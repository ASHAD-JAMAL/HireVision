import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import { useLocation, NavLink } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";

function Navbar() {
  const [navbarBg, setNavbarBg] = useState(false);
  const location = useLocation(); // Get current route

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
      >
        Blog
      </NavLink>
    </>
  );

  return (
    <div
      className={`max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 py-2 duration-500 ${
        location.pathname === "/contact"
          ? "lg:bg-white" // Set background to white on /contact
          : navbarBg
          ? "lg:bg-[#eff2fb]"
          : "lg:bg-transparent"
      }`}
    >
      <div className="navbar group bg-transparent">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-y-2"
            >
              {navItems}
            </ul>
          </div>
          <img src={logo} alt="Logo" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex space-x-10 ml-60">{navItems}</ul>
        </div>
        <div className="navbar-end hidden lg:flex justify-end w-full">
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
