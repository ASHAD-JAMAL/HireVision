import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [navbarBg, setNavbarBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBg(true);
      } else {
        setNavbarBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = (
    <>
      <NavLink
        to="/feature"
        className={`text-[16px] hover:text-[#573cff] group-hover:text-[#573cff] font-bold  ${
          navbarBg ? "text-[#02015a]" : "text-[#fff]"
        }`}
      >
        Features
      </NavLink>
      <NavLink
        to="/pricing"
        className={`text-[16px] hover:text-[#573cff] group-hover:text-[#573cff] font-bold  ${
          navbarBg ? "text-[#02015a]" : "text-[#fff]"
        }`}
      >
        Pricing
      </NavLink>
      <NavLink
        to="/contact"
        className={`text-[16px] hover:text-[#573cff] group-hover:text-[#573cff] font-bold  ${
          navbarBg ? "text-[#02015a]" : "text-[#fff]"
        }`}
      >
        Contact
      </NavLink>
      <NavLink to="/blog"
        className={`text-[16px] hover:text-[#573cff] group-hover:text-[#573cff] font-bold  ${
          navbarBg ? "text-[#02015a]" : "text-[#fff]"
        }`}
      >
        Blog
      </NavLink>
    </>
  );

  return (
    <>
      <div
        className={`max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 py-2  hover:bg-[#fff] duration-1000 ${
          navbarBg ? "bg-[#eff2fb]" : "bg-transparent"
        }`}
      >
        <div className="navbar group bg-transparent">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {navItems}
              </ul>
            </div>
            <img src={logo} alt="" />
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="flex space-x-10 ml-60">{navItems}</ul>
          </div>
          <div className="navbar-end hidden lg:flex justify-end w-full">
            <button
              className={`flex items-center no-animation px-5 py-3 border border-white text-white rounded-lg text-[15px] hover:bg-[rgb(87,60,255)] group-hover:border-[rgb(87,60,255)] group-hover:text-[#02015a] duration-300 ${
                navbarBg
                  ? "lg:border-[rgb(87,60,255)] lg:text-[rgb(87,60,255)]"
                  : ""
              }`}
            >
              <p>Duplicate in Framer</p>
              <FaArrowRightLong className="ml-2 text-[20px] sm:text-[22px] hover:translate-x-1 duration-300" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
