import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoHandRightOutline } from "react-icons/io5";
import { BsBrightnessHigh } from "react-icons/bs";
const items = [
  {
    title: "Read the docs",
    content:
      "Looking for detailed information about our AI-powered hiring solutions and how they can benefit your company? Our comprehensive documentation is available to guide you through the process and answer your questions.",
    icon: <IoHandRightOutline />,
    btnContent: "Read Documentation",
  },
  {
    title: "Submit The Ticket",
    content:
      "If you require immediate support or have a specific query, our ticket system is the perfect way to get in touch with our expert team. Submit a ticket, and we'll prioritize your request to provide prompt assistance.",
    icon: <BsBrightnessHigh />,
    btnContent: "Open Ticket",
  },
];

function ContactHero() {
  return (
    <>
      <div className="w-full relative overflow-x-hidden">
        <div className="absolute md:flex z-[3] hidden">
          <div className="bg-[#F8FF37] h-[400px] w-[400px] rounded-full blur-[100px] relative left-[-100px] top-[-120px]"></div>
          <div className="bg-[#02ED2A] h-[300px] w-[350px] rounded-full blur-[100px] relative left-[-100px] top-[-140px]"></div>
        </div>
        {/* Hero Section */}
        <div className="h-full relative flex flex-col justify-center items-center space-y-8 bg-white py-36">
          <div className="sm:w-1/2 text-center px-4 sm:px-0">
            <div className="badge bg-[#fff] py-3">
              <p className="bg-gradient-to-r from-[#a15ee8] to-[#6d8dff] text-transparent bg-clip-text text-sm">
                CONTACT
              </p>
            </div>
            <h1 className="sm:text-[60px] text-[45px] text-[#02015a] font-bold leading-tight">
              Here to help
            </h1>
          </div>
          <div className="text-center sm:w-1/2 px-4 sm:px-0">
            <p className="text-[18px] text-[#4e5774]">
              Have a question, suggestion, or just want to learn more about our
              innovative AI-powered hiring solutions? Get in touch!
            </p>
          </div>
          <div className="contact lg:w-1/3 w-full px-4">
            <div className="flex flex-col w-full py-10 space-y-5">
              <div className="flex gap-4">
                <div className="w-1/2 rounded-lg">
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered w-full bg-[#ecf1f7]"
                  />
                </div>
                <div className="w-1/2 rounded-lg">
                  <input
                    type="text"
                    placeholder="Email"
                    className="input input-bordered w-full bg-[#ecf1f7]"
                  />
                </div>
              </div>
              <div className="w-full rounded-lg">
                <textarea
                  className="textarea w-full bg-[#ecf1f7]  rounded-lg border-none"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="mt-4">
                <button className="w-full bg-[#4a00ff] rounded-lg py-4 text-white font-semibold hover:bg-[#0400ff]">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f4f7fb] py-20">
          <div className="flex flex-col justify-center items-center space-y-5 mb-5 text-center px-4">
            <h1 className="sm:text-[60px] text-[45px] text-[#02015a] font-bold leading-tight">
              Get help quickly
            </h1>
            <p className="text-[18px] text-[#4e5774] max-w-xl">
              Feel free to reach out or access our documentation whenever you
              need immediate assistance.
            </p>
          </div>
          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8 w-full py-10 px-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="card w-full sm:w-1/2 md:w-1/3 lg:w-1/3 bg-white rounded-lg shadow-md p-6"
              >
                <div className="card-body">
                  <div className="bg-[#4b53ff] p-4 rounded-full text-white text-3xl w-fit mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#02015a] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#4e5774] text-[17px] mb-4">
                    {item.content}
                  </p>
                  <div className="w-fit">
                    <button className="flex md:text-lg text-sm px-4 sm:px-5 py-2 sm:py-3 border border-[rgb(0,0,254)] text-[rgb(0,0,254)] hover:bg-[rgb(0,0,254)] rounded-lg hover:duration-300 items-center gap-3 group">
                      <p className="group-hover:-translate-x-1 duration-300 group-hover:text-white">
                        {item.btnContent}
                      </p>
                      <FaArrowRightLong className="text-[20px] sm:text-[22px] group-hover:translate-x-1 duration-300 group-hover:text-white" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactHero;
