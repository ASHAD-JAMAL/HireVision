import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import { useLocation, NavLink } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";

function Navbar() {
  const [navbarBg, setNavbarBg] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State for hamburger menu open/close
  const location = useLocation(); // Get current route

  useEffect(() => {
    const handleScroll = () => {
      setNavbarBg(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  const navItems = (
    <>
      <NavLink
        to="/feature"
        className={({ isActive }) =>
          `text-[16px] font-bold hover:text-[#573cff] ${
            location.pathname === "/blog"
              ? "lg:text-black"
              : location.pathname === "/contact"
              ? "lg:text-black"
              : isActive
              ? "lg:text-blue-500"
              : navbarBg
              ? "lg:text-[#02015a]"
              : "lg:text-[#fff]"
          }`
        }
        onClick={closeNavbar}
      >
        Features
      </NavLink>
      <NavLink
        to="/pricing"
        className={({ isActive }) =>
          `text-[16px] font-bold hover:text-[#573cff] ${
            location.pathname === "/blog"
              ? "lg:text-black"
              : location.pathname === "/contact"
              ? "lg:text-black"
              : isActive
              ? "lg:text-blue-500"
              : navbarBg
              ? "lg:text-[#02015a]"
              : "lg:text-[#fff]"
          }`
        }
        onClick={closeNavbar}
      >
        Pricing
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `text-[16px] font-bold hover:text-[#573cff] ${
            location.pathname === "/blog"
              ? "lg:text-black"
              : location.pathname === "/contact" || isActive
              ? "lg:text-blue-500"
              : navbarBg
              ? "lg:text-[#02015a]"
              : "lg:text-[#fff]"
          }`
        }
        onClick={closeNavbar}
      >
        Contact
      </NavLink>
      <NavLink
        to="/blog"
        className={({ isActive }) =>
          `text-[16px] font-bold hover:text-[#573cff] ${
            location.pathname === "/contact"
              ? "lg:text-black"
              : isActive
              ? "text-blue-500"
              : navbarBg
              ? "lg:text-[#02015a]"
              : "lg:text-[#fff]"
          }`
        }
        onClick={closeNavbar}
      >
        Blog
      </NavLink>
    </>
  );

  return (
    <div
      className={`max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 py-2 duration-500 ${
        location.pathname === "/contact"
          ? "bg-white" // Set background to white on /contact
          : navbarBg
          ? "bg-[#eff2fb]"
          : "bg-transparent"
      }`}
    >
      <div className="navbar flex items-center justify-between">
        <div className="navbar-start">
          <img src={logo} alt="Logo" className="w-auto" />
        </div>
        <div className="navbar-end lg:hidden">
          <button onClick={toggleNavbar} className="btn btn-ghost">
            {isOpen ? (
              // Close icon when menu is open
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-black bg-red-900" // Adjust color as needed
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger icon when menu is closed
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-black" // Adjust color as needed
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        {/* Mobile Navbar */}
        <div
          className={`lg:hidden fixed top-0 left-0 w-full bg-white py-4 px-6 duration-300 z-40 ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <ul className="flex flex-col space-y-4">{navItems}</ul>
        </div>
        {/* Desktop Navbar */}
        <div className="hidden lg:flex">
          <ul className="flex space-x-10 ml-60">{navItems}</ul>
        </div>
        <div className="hidden lg:flex navbar-end justify-end w-full">
          <a
            href="https://andrea-montini.lemonsqueezy.com/buy/f4da987f-2be5-4c3c-b2b2-9a5df3121631?discount=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className={`flex items-center px-5 py-3 border rounded-lg text-[15px] duration-300 ${
                location.pathname === "/blog" ||
                location.pathname === "/contact"
                  ? "border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
                  : navbarBg
                  ? "border-[rgb(87,60,255)] text-[rgb(87,60,255)] hover:bg-[rgb(87,60,255)] hover:text-white"
                  : "border-white text-white hover:bg-[rgb(87,60,255)]"
              }`}
            >
              <p className="group-hover:-translate-x-1 duration-300 text-lg">
                Duplicate in Framer
              </p>
              <MdArrowOutward className="text-[20px] sm:text-[22px] group-hover:translate-x-1 duration-300" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
