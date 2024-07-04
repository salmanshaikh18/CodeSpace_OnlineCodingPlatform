import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { Button } from "./ui/button";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { handleError } from "@/utils/handleError";
import validator from "validator"

const Footer = () => {
  const [contact, setContact] = useState({
    userName: "",
    userEmail: "",
    userMessage: "",
  });

  // handling the input values
  const handleInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let name = e.target.name; // Get the name attribute of the input element
    let value = e.target.value; // Get the value entered into the input element

    // Update the user state object with the new value for the corresponding input field
    setContact({
      ...contact, // Spread the existing user state to retain its other properties
      [name]: value, // Dynamically set the property name based on the input field's name attribute, and set its value
    });
  };

  const handleSendMsg = async (e: FormEvent) => {
    e.preventDefault();

    const isValidEmail = (email: string) => {
      return validator.isEmail(email);
    };

    try {
      if (contact.userName && contact.userEmail && contact.userMessage) {
        if (!isValidEmail(contact.userEmail)) {
          toast.error("Please enter a valid email address.");
          return;
        }

        const response = await fetch(`${import.meta.env.VITE_BACKEND_URI}/contact/message`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contact),
        });

        if (response.ok) {
          setContact({
            userName: "",
            userEmail: "",
            userMessage: "",
          });
          toast.success("Message Sent Successfully :)");
        } else {
          toast.error("Message Not Delivered!");
        }
      } else {
        toast.error("All the fields are required to send a message!");
      }
    } catch (error) {
      handleError(error)
      console.log("Error while sending a message: ", error);
    }
  };
  return (
    <footer className="w-full">
      <div className="w-full flex flex-col md:flex-row py-10">
        <div className="__left md:w-1/2 flex flex-col text-center md:text-start md:ml-20 my-10">
          <h1 className="md:w-[70%] text-zinc-300 font-normal mb-4 text-3xl">
            Connect With Us
          </h1>
          <div className="text-zinc-400 flex flex-col justify-center md:justify-start md:items-start items-center">
            <p className="flex items-center md:w-[70%] gap-4 my-3">
              <span className="text-[#03CF86] text-xl">
                <IoLocationOutline />
              </span>
              India, Mumbai
            </p>
            <p className="flex items-center gap-4 my-3 md:w-[70%] transition-all ease-in-out duration-500 hover:text-[#03CF86] cursor-pointer">
              <span className="text-[#03CF86]">
                <MdOutlineEmail className="text-xl" />
              </span>
              salmanshaikh18786@gmail.com
            </p>
            <div className="flex gap-8 justify-center items-center md:w-1/2 text-2xl my-8">
              <p className="cursor-pointer transition-all ease-in-out duration-500 text-[#03CF86] hover:text-blue-600 hover:scale-110">
                <a href="https://github.com/salmanshaikh18" target="_blank">
                  <FaGithub />
                </a>
              </p>
              <p className="cursor-pointer transition-all ease-in-out duration-500 text-[#03CF86] hover:text-blue-600 hover:scale-110">
                <a
                  href="https://www.linkedin.com/in/salman-shaikh-aa15b9253"
                  target="_blank"
                >
                  <FaLinkedin />
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="__right md:w-1/2 flex flex-col md:ml-20 items-center gap-4 my-10">
          <h1 className="text-[#03CF86] md:w-[70%] mb-4 font-normal text-3xl">
            Contact Us
          </h1>
          <input
            className="p-2 pl-4 md:w-[70%] w-[300px] rounded-md bg-[#171F38] border outline-none border-[#03CF86a]"
            type="text"
            name="userName"
            value={contact.userName}
            onChange={handleInput}
            placeholder="Enter Your Name"
          />
          <input
            className="p-2 pl-4 md:w-[70%] w-[300px] border outline-none border-[#03CF86a] rounded-md bg-[#171F38]"
            type="email"
            name="userEmail"
            value={contact.userEmail}
            onChange={handleInput}
            placeholder="Enter Your Email"
          />
          <textarea
            className="rounded-md p-2 border outline-none border-[#03CF86a] text-zinc-200 pl-4 max-h-60 min-h-[120px] md:w-[70%] w-[300px] bg-[#171F38]"
            name="userMessage"
            value={contact.userMessage}
            onChange={handleInput}
            id=""
            placeholder="Enter Your Message"
          ></textarea>
          <Button
            className="md:w-[70%] w-[300px] bg-blue-800 transition-all ease-in-out duration-500 hover:bg-blue-900"
            variant={"secondary"}
            onClick={handleSendMsg}
          >
            Send Message
          </Button>
        </div>
      </div>
      <hr />
      <div className="md:h-[10vh] p-2 flex justify-center items-center">
        <p className="text-zinc-400 text-center md:text-md sm:text-sm text-[12px]">
          &copy; Copyright 2024 - The CodeSpace (Coding platform). All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
