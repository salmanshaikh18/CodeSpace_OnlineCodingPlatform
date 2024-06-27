import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/User";

export const register = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  const usernameRegex = /^[a-zA-Z0-9]+$/;
  try {
    // Validate input fields
    if (
      (!email && !username && !password) ||
      (!email && !username) ||
      (!email && !password) ||
      (!username && !password)
    ) {
      return res.status(400).json({
        message: "All fields are required to register as a new user",
      });
    } else {
      if (!email) {
        return res.status(400).json({
          message: "Please provide your email",
        });
      } else if (!password) {
        return res.status(400).json({
          message: "Please provide your password",
        });
      } else if (!username) {
        return res.status(400).json({
          message: "Please provde your username",
        });
      }
    }

    // Check for Existing Username
    const existingUserWithUsername = await User.findOne({ username: username });
    if (existingUserWithUsername) {
      return res.status(400).json({
        message:
          "Username is already taken!, Please provide an unique username",
      });
    }

    // Check for Existing Email
    const existingUserWithEmail = await User.findOne({ email: email });
    if (existingUserWithEmail) {
      return res.status(400).json({
        message: "Email id is already taken!, Try another email",
      });
    }

    // Validate Username Format
    if (!usernameRegex.test(username)) {
      return res.status(400).json({
        message: "Please provide the valid username",
      });
    }

    // Hash the Password
    const salt = await bcrypt.genSalt(); // Generate a salt using bcrypt.
    const hashedPassword = await bcrypt.hash(password, salt); // Hash the password using the generated salt.

    // Creating the User
    // Create a new user in the database with the provided email, hashed password, and username.
    const newUser = await User.create({
      username: username,
      email: email,
      password: hashedPassword,
    });

    // Generate JWT Token
    // Create a JWT token that includes the user's ID and email.
    // Sign the token with a secret key (process.env.JWT_KEY) and set an expiration time of 1 day.
    const jwtToken = jwt.sign(
      {
        _id: newUser._id,
        email: newUser.email,
      },
      process.env.JWT_KEY!,
      {
        expiresIn: "1d",
      }
    );

    // Set JWT Token as a Cookie
    // Set the JWT token in a cookie to be sent with the response.
    // The cookie is set to expire in 24 hours, is accessible only via HTTP (not JavaScript), and uses a lax same-site policy.
    res.cookie("token", jwtToken, {
      path: "/",
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
      httpOnly: true,
      sameSite: "lax",
    });

    console.log("New User: ", newUser)

    // Send Successful Response
    return res.status(201).json({
        username: newUser.username,
        email: newUser.email,
        password: newUser.password,
        savedCodes: newUser.savedCodes,
    })
  } catch (error) {
    return res.status(500).json({
      message:
        "Oops! Something went wrong while register. Please try again later or contact support for assistance.!",
      error: error,
    });
  }
};
