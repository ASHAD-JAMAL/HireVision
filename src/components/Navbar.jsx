import React from "react";
import logo from "../assets/logo.svg";
function Navbar() {
  const navItems = (
    <>
      <li>
        <a
          href="#"
          className="text-[16px] text-white hover:text-[rgb(87,60,255)] group-hover:text-blue-900"
        >
          Features
        </a>
      </li>
      <li>
        <a
          href="#"
          className="text-[16px] text-white hover:text-[rgb(87,60,255)] group-hover:text-blue-900"
        >
          Pricing
        </a>
      </li>
      <li>
        <a
          href="#"
          className="text-[16px] text-white hover:text-[rgb(87,60,255)] group-hover:text-blue-900"
        >
          Contact
        </a>
      </li>
      <li>
        <a
          href="#"
          className="text-[16px] text-white hover:text-[rgb(87,60,255)] group-hover:text-blue-900"
        >
          Blog
        </a>
      </li>
    </>
  );

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 sm:hover:bg-[rgb(255,255,255,1)] duration-300 py-2 bg-[rgb(255,255,255,1)] sm:bg-transparent">
        <div className="navbar sm:bg-transparent group">
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
            <ul className="flex space-x-10">{navItems}</ul>
          </div>
          <div className="navbar-end">
            <button className="no-animation px-5 py-2 border border-white text-white rounded-lg text-[15px] hover:bg-[rgb(87,60,255)] hover:text-white hidden lg:block group-hover:border-[rgb(87,60,255)] group-hover:text-[rgb(87,60,255)] duration-300">
              Duplicate in Framer <span className="text-[20px] ml-3">↗</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
