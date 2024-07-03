import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/User";

export const register = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  const usernameRegex = /^[a-zA-Z0-9]+$/;
  try {
    // 1. Validate input fields
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

    // 2. Check for Existing Username
    const existingUserWithUsername = await User.findOne({ username: username });
    if (existingUserWithUsername) {
      return res.status(400).json({
        message:
          "Username is already taken!, Please provide an unique username",
      });
    }

    // 3. Check for Existing Email
    const existingUserWithEmail = await User.findOne({ email: email });
    if (existingUserWithEmail) {
      return res.status(400).json({
        message: "Email id is already taken!, Try another email",
      });
    }

    // 4. Validate Username Format
    if (!usernameRegex.test(username)) {
      return res.status(400).json({
        message: "Please provide the valid username",
      });
    }

    // 5. Hash the Password
    const salt = await bcrypt.genSalt(); // Generate a salt using bcrypt.
    const hashedPassword = await bcrypt.hash(password, salt); // Hash the password using the generated salt.

    // 6. Create a new user in the database with the provided email, hashed password, and username.
    const newUser = await User.create({
      username: username,
      email: email,
      password: hashedPassword,
    });

    // 7. Create a JWT token that includes the user's ID and email.
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

    // 8. Set the JWT token in a cookie to be sent with the response.
    // The cookie is set to expire in 24 hours, is accessible only via HTTP (not JavaScript), and uses a lax same-site policy.
    res.cookie("token", jwtToken, {
      path: "/",
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
      httpOnly: true,
      sameSite: "lax",
    });

    console.log("New User: ", newUser);
    console.log("Existing user with username: ", existingUserWithUsername);
    console.log("Existing user with email: ", existingUserWithEmail);

    // 9. Send Successful Response
    return res.status(201).json({
      message: "Registration successful! Welcome to CodeSpace. :)",
      username: newUser.username,
      email: newUser.email,
      password: newUser.password,
      savedCodes: newUser.savedCodes,
    });
  } catch (error) {
    return res.status(500).json({
      message:
        "Oops! Something went wrong while register. Please try again later or contact support for assistance.!",
      error: error,
    });
  }
};

export const login = async (req: Request, res: Response) => {
  // userId, password: Destructure the request body to get the input data. userId can be either an email or a username.
  const { userId, password }: { userId: string; password: string } = req.body;
  try {
    // 1. Validate Input Fields
    // Check if userId and password are provided. If not, send an appropriate error message.
    if (!userId) {
      return res.status(400).send({
        message: "Please provide your username!",
      });
    }

    if (!password) {
      return res.status(400).send({
        message: "Please provide your password",
      });
    }

    // 2. Find Existing User
    let existingUser = undefined;
    // Determine if userId is an email or a username by checking if it contains an "@" character.
    if (userId.includes("@")) {
      existingUser = await User.findOne({ email: userId });
    } else {
      existingUser = await User.findOne({ username: userId });
    }

    // 3. Check if User not Exists
    // If no user is found, send an error message.
    if (!existingUser) {
      return res.status(400).json({
        message: "User not found!",
      });
    }

    // 4. Verify Password
    // Use bcrypt to compare the provided password with the stored hashed password.
    // If the passwords do not match, send an error message.
    const passwordMatched = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!passwordMatched) {
      return res.status(400).json({
        message: "Incorrect password. Please try again.",
      });
    }

    // 5. Generate JWT Token
    // Create a JWT token that includes the user's ID and email.
    // Sign the token with a secret key (process.env.JWT_KEY) and set an expiration time of 1 day.
    const jwtToken = jwt.sign(
      {
        _id: existingUser._id,
        email: existingUser.email,
      },
      process.env.JWT_KEY!,
      {
        expiresIn: "1d",
      }
    );

    // 6. Set the JWT token in a cookie to be sent with the response.
    // The cookie is set to expire in 24 hours, is accessible only via HTTP (not JavaScript), and uses a lax same-site policy.
    res.cookie("token", jwtToken, {
      path: "/",
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
      httpOnly: true,
      sameSite: "lax",
    });

    // 7. Send Successful Response
    // Send a response with the existing user's information.
    return res.status(200).send({
      message: "Login successful! Welcome back.",
      username: existingUser.username,
      picture: existingUser.picture,
      email: existingUser.email,
      savedCodes: existingUser.savedCodes,
    });
  } catch (error) {
    return res.status(500).send({
      message:
        "Oops! Something went wrong while login. Please try again later or contact support for assistance.!!",
      error: error,
    });
  }
};

export const logout = async (req: Request, res: Response) => {
  try {
    // Clear Cookie:
    res.clearCookie("token")
    return res.status(200).json({
        message: "You have been logged out successfully. See you next time!"
    })
  } catch (error) {
    return res.status(500).send({
      message:
        "Oops! Something went wrong while logging out. Please try again later or contact support for assistance.!",
      error,
    });
  }
};

export const changePassword = async (req: Request, res: Response) => {
  try {
    const { password, email } = req.body;
    bcrypt
      .hash(password, 10)
      .then((hashedPassword) => {
        User.findOneAndUpdate({ email: email }, { password: hashedPassword })
          .then(() => res.status(200).send({ Status: "Success" }))
          .catch((err) => res.status(400).send({ Status: err }));
      })
      .catch((err) => res.status(400).send({ Status: err }));
  } catch (error) {
    console.log("Error inside changePassword controller: ", error);
  }
};

export const userDetails = async (req: Request, res: Response) => {
  const userId = req._id
  try {
    
  } catch (error) {
    return res.status(500).json({
      message: "Cannot fetch user details!"
    })
  }
}