import React, { useState } from "react";
import Logo from "../assets/logo.png";
import {
  FaBars,
  FaTimes,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

import { GoPerson } from "react-icons/go";

function Navbar() {
  const [navToggle, setNavToggle] = useState(false);

  const HanburderHandle = () => setNavToggle(!navToggle);

  return (
    <div className="fixed w-full h-[60px] flex justify-between item-center px-5 py-4 bg-slate-800 text-gray-300">
      {/* Logo Design */}
      <div>
        <img src={Logo} style={{width: "80px", height:"50px"}}alt="logo" className="h-14 p-2" />
      </div>

      {/* Menu Design */}

      <ul className="hidden md:flex">
        {/* <a href="/">  <li>Home </li></a>
        <a href="/About"> <li>About</li></a>
        <a href="/skills"><li>Skill</li></a>
        <a href="/work">  <li>Work</li></a>
        <a href="/contact">  <li>Contact</li> </a> */}

        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/About">About</a>
        </li>
        <li>
          <a href="/Skills">Skills</a>
        </li>
        <li>
          <a href="/Work">Work</a>
        </li>
        <li>
          <a href="/Contact">Contact</a>
        </li>
      </ul>

      {/* Hamburger */}
      <div className="md:hidden px-2 py-4 z-10" onClick={HanburderHandle}>
        {!navToggle ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile View */}
      <ul
        className={
          !navToggle
            ? "hidden"
            : "absolute w-full h-screen top-0 left-0 bg-slate-800 flex flex-col item-center justify-center text-center"
        }
      >
        <li className="py-6 text-4xl">
          <a href="/">Home</a>
        </li>
        <li className="py-6 text-4xl">
          <a href="/About">About</a>
        </li>
        <li className="py-6 text-4xl">
          <a href="/Skills">Skills</a>
        </li>
        <li className="py-6 text-4xl">
          <a href="/Work">Work</a>
        </li>
        <li className="py-6 text-4xl">
          <a href="/Contact">Contact</a>
        </li>
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[100px] h-[50px] flex justify-between item-center ml-[-70px] duration-300 hover:ml-[-10px] bg-blue-500">
            <a
              className="flex justify-between items-center w-full h-[40px]  py-5 text-lg font-bold px-[-1]"
              href="https://www.linkedin.com/in/ihtisham-khattak-6661641a5/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              LikedIn <FaLinkedinIn />
            </a>
          </li>
          <li className="w-[100px] h-[50px] flex justify-between item-center ml-[-70px] duration-300 hover:ml-[-10px] bg-[#000000]">
            <a
              className="flex justify-between items-center w-full h-[30px]  py-5 text-lg font-bold px-[-1]"
              href="https://github.com/Ihtisham-Khattak"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Github <FaGithub />
            </a>
          </li>
          <li className="w-[105px] h-[50px] flex justify-between item-center ml-[-75px] duration-300 hover:ml-[-10px] bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full h-[25px]  py-5 text-lg font-bold px-[-1]"
              href="contact"
            >
              {" "}
              Contact <FaEnvelope />
            </a>
          </li>
          <li className="w-[105px] h-[50px] flex justify-between item-center ml-[-75px] duration-300 hover:ml-[-10px] bg-[#565f69]">
            <a
              href="/"
              className="flex justify-between items-center w-full h-[25px]  py-5 text-lg font-bold px-[-1]"
            >
              Resume <GoPerson />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
