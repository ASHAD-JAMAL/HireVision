import React from "react";

function Footer() {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto px-4 md:px-20 lg:px-40 bg-white">
        <footer className="flex flex-col md:flex-row justify-between items-start py-16 px-6 sm:px-12 lg:px-20 space-y-8 md:space-y-0">
          <aside className="flex-shrink-0 order-2 md:order-1 py-5 md:py-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="46"
              fill="none"
              className="mb-4"
            >
              <path
                fill="#573CFF"
                d="M0 29.116c0 2.25 1.959 4.076 4.375 4.076s4.375-1.826 4.375-4.076c0-1.65-2.568-3.203-2.568-6.114 0-2.62 2.568-4.464 2.568-6.114 0-2.25-1.959-4.076-4.375-4.076S0 14.637 0 16.888c0 1.65 2.568 3.493 2.568 6.114 0 2.62-2.568 4.463-2.568 6.114zm21.25-25.04C21.25 1.826 23.209 0 25.625 0S30 1.825 30 4.076c0 .709-.474 1.4-1.014 2.188-.718 1.046-1.554 2.265-1.554 3.926 0 1.46.798 2.68 1.505 3.76.56.856 1.063 1.624 1.063 2.354 0 .098-.004.195-.011.29.007.097.011.194.011.292 0 .709-.474 1.4-1.014 2.188-.718 1.046-1.554 2.265-1.554 3.926 0 1.46.798 2.68 1.505 3.76.56.856 1.063 1.624 1.063 2.354a4 4 0 0 1-.011.291 4 4 0 0 1 .011.291c0 .73-.503 1.498-1.063 2.355-.707 1.079-1.505 2.298-1.505 3.76 0 1.66.836 2.879 1.554 3.925.54.789 1.014 1.48 1.014 2.188C30 44.174 28.041 46 25.625 46s-4.375-1.825-4.375-4.076c0-.73.503-1.498 1.063-2.354.707-1.08 1.505-2.299 1.505-3.76 0-1.46-.798-2.68-1.505-3.76-.56-.856-1.063-1.624-1.063-2.354 0-.098.003-.195.01-.29a3.848 3.848 0 0 1-.01-.292c0-.73.503-1.498 1.063-2.355.707-1.079 1.505-2.298 1.505-3.76 0-1.46-.798-2.68-1.505-3.758-.56-.857-1.063-1.625-1.063-2.355 0-.098.003-.195.01-.291a3.843 3.843 0 0 1-.01-.291c0-.73.503-1.498 1.063-2.355.707-1.079 1.505-2.298 1.505-3.76 0-1.46-.798-2.68-1.505-3.759-.56-.856-1.063-1.624-1.063-2.354zM15 39.596c-2.417 0-4.376-1.825-4.376-4.076 0-.73.503-1.498 1.064-2.355.706-1.079 1.505-2.298 1.505-3.759 0-1.46-.799-2.68-1.505-3.76-.56-.856-1.064-1.624-1.064-2.354a4 4 0 0 1 .011-.291 3.843 3.843 0 0 1-.01-.291c0-.73.502-1.498 1.063-2.355.706-1.079 1.505-2.298 1.505-3.76 0-1.46-.799-2.68-1.505-3.759-.56-.856-1.064-1.624-1.064-2.354 0-2.25 1.96-4.076 4.376-4.076 2.416 0 4.375 1.825 4.375 4.076 0 .709-.474 1.4-1.015 2.188-.718 1.046-1.554 2.265-1.554 3.926 0 1.46.799 2.68 1.505 3.76.56.856 1.064 1.624 1.064 2.354 0 .098-.004.195-.011.29.007.097.01.194.01.292 0 .73-.502 1.498-1.063 2.354-.706 1.08-1.505 2.3-1.505 3.76 0 1.66.836 2.88 1.554 3.926.54.788 1.015 1.48 1.015 2.188 0 2.25-1.96 4.076-4.375 4.076z"
              />
            </svg>
            <p className="text-gray-600 text[#9fa6bf]">
              Significantly enhance your <br /> screening and recruitment <br />
              procedures.
            </p>
          </aside>
          <nav className="flex flex-col md:flex-row md:space-x-12 lg:space-x-20 order-1 md:order-2">
            <div className="flex flex-col space-y-2 md:space-y-4">
              <a className="text-[#02015a] hover:text-[#573cff] cursor-pointer md:text-[30px] text-[50px]">
                Features
              </a>
              <a className="text-[#02015a] hover:text-[#573cff] cursor-pointer md:text-[30px] text-[50px]">
                Pricing
              </a>
              <a className="text-[#02015a] hover:text-[#573cff] cursor-pointer md:text-[30px] text-[50px]">
                Use Case
              </a>
              <a className="text-[#02015a] hover:text-[#573cff] cursor-pointer md:text-[30px] text-[50px]">
                Community
              </a>
            </div>
            <div className="flex flex-col space-y-2 md:space-y-4">
              <h6 className="footer-title font-bold text-[#02015a] md:pt-0 pt-3">
                Resources
              </h6>
              <a className="link link-hover text-black hover:text-[#02015a]">About us</a>
              <a className="link link-hover text-black hover:text-[#02015a]">Contact</a>
              <a className="link link-hover text-black hover:text-[#02015a]">Jobs</a>
              <a className="link link-hover text-black hover:text-[#02015a]">Press kit</a>
            </div>
            <div className="flex flex-col space-y-2 md:space-y-4">
              <h6 className="footer-title font-bold text-[#02015a]  md:pt-0 pt-3">Company</h6>
              <a className="link link-hover text-black hover:text-[#02015a]">Terms of use</a>
              <a className="link link-hover text-black hover:text-[#02015a]">Privacy policy</a>
              <a className="link link-hover text-black hover:text-[#02015a]">Cookie policy</a>
            </div>
          </nav>
        </footer>
        <footer className="footer flex flex-col-reverse md:flex-row justify-between items-center px-6 sm:px-12 lg:px-20 py-6">
          <aside className="text-gray-600">
            <p className="text-black hover:text-[#02015a]">
              Hirevision • Copyright © {new Date().getFullYear()}
            </p>
          </aside>
          <nav className="flex">
            <a className="link link-hover text-black hover:text-[#02015a]">
              <p>Terms of service</p>
            </a>
            <a className="link link-hover text-black hover:text-[#02015a]">
              <p>Privacy Policy</p>
            </a>
          </nav>
        </footer>
      </div>
    </>
  );
}

export default Footer;
