import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import { useLocation, NavLink } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
function Navbar() {
  const [navbarBg, setNavbarBg] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State for hamburger menu open/close
  const location = useLocation(); // Get current route

  // dark mode logic start
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);
  // dark mode logic end
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
          </button>
        </div>
        {/* Mobile Navbar */}
        <div
          className={`lg:hidden fixed top-0 left-0 w-full bg-white py-4 px-6 duration-300 z-40  ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <IoMdClose
            className="text-3xl text-black z-[30] absolute top-[20px] right-[30px] cursor-pointer"
            onClick={toggleNavbar}
          />
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
        <div className="md:ml-4">
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" />

            {/* sun icon */}
            <svg
              className="swap-on h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-off h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
