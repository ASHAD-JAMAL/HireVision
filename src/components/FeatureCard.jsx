import React from "react";
import img1 from "../assets/f1.avif";
import img2 from "../assets/f2.avif";
import img3 from "../assets/f3.avif";
import { RiSignalTowerFill } from "react-icons/ri";
import { RiCameraLensLine } from "react-icons/ri";
import { PiAnchor } from "react-icons/pi";
import { TbHandClick } from "react-icons/tb";
import { SiCitrix } from "react-icons/si";
import { FaCookieBite } from "react-icons/fa6";
const items = [
  {
    title: "Find Your Perfect Fit",
    contentt:
      "Empowering you to make informed hiring decisions and stay ahead of the competition.",
    icon: <RiSignalTowerFill />,
  },
  {
    title: "Hire Globally with Ease",
    contentt:
      "Empowering you to make informed hiring decisions and stay ahead of the competition.",
    icon: <RiCameraLensLine />,
  },
  {
    title: "Make Data-Driven Decisions",
    contentt:
      "Empowering you to make informed hiring decisions and stay ahead of the competition.",
    icon: <PiAnchor />,
  },
  {
    title: "Simplify Your Hiring Process",
    contentt:
      "Empowering you to make informed hiring decisions and stay ahead of the competition.",
    icon: <TbHandClick />,
  },
  {
    title: "Tailored to Your Needs",
    contentt:
      "Empowering you to make informed hiring decisions and stay ahead of the competition.",
    icon: <SiCitrix />,
  },
  {
    title: "Focus on the Best Fits",
    contentt:
      "Empowering you to make informed hiring decisions and stay ahead of the competition.",
    icon: <FaCookieBite />,
  },
];

function FeatureCard() {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto px-4 md:px-40 my-10 md:space-y-40 space-y-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="w-full md:w-1/2 px-4 md:px-8 space-y-5">
            <div className="badge bg-[#eaf2ff] py-3">
              <p className="bg-gradient-to-r from-[#a15ee8] to-[#6d8dff] text-transparent bg-clip-text text-sm">
                Feature
              </p>
            </div>
            <h1 className="text-[#02015a] text-2xl md:text-5xl font-sans font-bold">
              Automated Candidate Ranking
            </h1>
            <p className="text-[#6a728d] text-base md:text-lg text-justify">
              Let AI analyze and rank applicants based on qualifications,
              experience, and skills, ensuring you focus on the most promising
              candidates first.
            </p>
            <div className="px-4 sm:px-0 sm:space-x-5 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:w-auto w-full">
              <button className="text-base md:text-lg px-5 py-3 border border-[rgb(0,0,254)] hover:text-white text-[rgb(0,0,254)] font-semibold hover:bg-[rgb(0,0,254)] rounded-lg duration-300">
                Request Demo <span className="text-lg">↗</span>
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4 md:px-8">
            <img
              src={img1}
              alt="Automated Candidate Ranking"
              className="md:w-11/12 w-full h-auto object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 order-2">
          <div className="w-full md:w-1/2 px-4 md:px-8 space-y-5 md:order-2">
            <div className="badge bg-[#eaf2ff] py-3">
              <p className="bg-gradient-to-r from-[#a15ee8] to-[#6d8dff] text-transparent bg-clip-text text-sm">
                Feature
              </p>
            </div>
            <h1 className="text-[#02015a] text-2xl md:text-5xl font-sans font-bold">
              Real-Time Applicant Analytics
            </h1>
            <p className="text-[#6a728d] text-base md:text-lg text-justify">
              Let AI analyze and rank applicants based on qualifications,
              experience, and skills, ensuring you focus on the most promising
              candidates first.
            </p>
            <div className="px-4 sm:px-0 sm:space-x-5 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:w-auto w-full">
              <button className="text-base md:text-lg px-5 py-3 border border-[rgb(0,0,254)] hover:text-white text-[rgb(0,0,254)] font-semibold hover:bg-[rgb(0,0,254)] rounded-lg duration-300">
                Request Demo <span className="text-lg">↗</span>
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4 md:px-8 md:order-1">
            <img
              src={img2}
              alt="Automated Candidate Ranking"
              className="md:w-11/12 w-full h-auto object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="w-full md:w-1/2 px-4 md:px-8 space-y-5">
            <div className="badge bg-[#eaf2ff] py-3">
              <p className="bg-gradient-to-r from-[#a15ee8] to-[#6d8dff] text-transparent bg-clip-text text-sm">
                Feature
              </p>
            </div>
            <h1 className="text-[#02015A] text-2xl md:text-5xl font-sans font-bold">
              Seamless Multilingual Support
            </h1>
            <p className="text-[#6a728d] text-base md:text-lg text-justify">
              Let AI analyze and rank applicants based on qualifications,
              experience, and skills, ensuring you focus on the most promising
              candidates first.
            </p>
            <div className="px-4 sm:px-0 sm:space-x-5 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:w-auto w-full">
              <button className="text-base md:text-lg px-5 py-3 border border-[rgb(0,0,254)] hover:text-white text-[rgb(0,0,254)] font-semibold hover:bg-[rgb(0,0,254)] rounded-lg duration-300">
                Request Demo <span className="text-lg">↗</span>
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4 md:px-8">
            <img
              src={img3}
              alt="Automated Candidate Ranking"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        {/* includes section  */}
        <div>
          <div className="flex flex-col justify-center items-center py-14 text-center md:space-y-9 space-y-4">
            <div className="badge bg-[#eaf2ff] py-3">
              <p className="bg-gradient-to-r from-[#a15ee8] to-[#6d8dff] text-transparent bg-clip-text text-sm">
                INCLUDED
              </p>
            </div>
            <h1 className="md:text-[60px] text-2xl text-[#02015A] font-bold leading-tight">
              Powerful features tailored <br /> to your needs
            </h1>
            <p className="text-[#6a728d] text-base md:text-lg">
              Gain valuable data-driven insights into talent markets worldwide.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item, index) => (
              <div key={index} className="card w-96">
                <div className="card-body flex justify-center items-center">
                  <div className="bg-[#4b53ff] px-3 py-3 rounded-full w-fit h-fit text-white text-3xl">
                    {item.icon}
                  </div>
                  <div className="items-center mb-2">
                    <h3 className="ml-2 text-xl font-bold text-[#02015a] text-[20px]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-center text-[#4e5774] text-[17px]">
                    {item.contentt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default FeatureCard;
