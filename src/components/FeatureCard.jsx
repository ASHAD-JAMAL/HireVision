import React from "react";
import img1 from "../assets/f1.avif";
import img2 from "../assets/f2.avif";
import img3 from "../assets/f3.avif";
import { RiSignalTowerFill, RiCameraLensLine } from "react-icons/ri";
import { PiAnchor } from "react-icons/pi";
import { TbHandClick } from "react-icons/tb";
import { SiCitrix } from "react-icons/si";
import { FaCookieBite } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
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
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-40 py-10 md:space-y-40 space-y-10 bg-[#fff]">
        {/* Feature Sections */}
        {[img1, img2, img3].map((img, index) => (
          <div
            key={index}
            className={`flex flex-col-reverse md:flex-row justify-between items-center gap-10 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="w-full md:w-1/2 px-4 md:px-8 space-y-5">
              <div className="badge bg-[#eaf2ff] py-3">
                <p className="bg-gradient-to-r from-[#a15ee8] to-[#6d8dff] text-transparent bg-clip-text text-sm">
                  Feature
                </p>
              </div>
              <h1 className="text-[#02015a] text-2xl md:text-5xl font-sans font-bold">
                {index === 0
                  ? "Automated Candidate Ranking"
                  : index === 1
                  ? "Real-Time Applicant Analytics"
                  : "Seamless Multilingual Support"}
              </h1>
              <p className="text-[#6a728d] text-base md:text-lg text-justify">
                Let AI analyze and rank applicants based on qualifications,
                experience, and skills, ensuring you focus on the most promising
                candidates first.
              </p>
              <div className="w-fit mt-8">
                <Link to="#">
                  <button className="flex md:text-lg text-sm px-4 sm:px-5 py-2 sm:py-3 border border-[#573cff] hover:border-none  text-[#573cff] bg-white hover:bg-[#573cff] hover:text-white rounded-lg hover:duration-1000 items-center gap-3 group">
                    <p className="group-hover:-translate-x-1 duration-300">
                      Request Demo
                    </p>
                    <MdArrowOutward className="text-[20px] sm:text-[22px] group-hover:translate-x-1 duration-300" />
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4 md:px-8">
              <img
                src={img}
                alt="Feature Image"
                className="md:w-11/12 w-full h-auto object-cover"
              />
            </div>
          </div>
        ))}
        {/* Includes Section */}
        <div>
          <div className="flex flex-col justify-center items-center py-14 text-center md:space-y-9 space-y-4">
            <div className="badge bg-[#eaf2ff] py-3">
              <p className="bg-gradient-to-r from-[#a15ee8] to-[#6d8dff] text-transparent bg-clip-text text-sm">
                INCLUDED
              </p>
            </div>
            <h1 className="md:text-[60px] text-2xl text-[#02015A] font-bold leading-tight">
              Powerful features tailored <br className="hidden md:block" /> to
              your needs
            </h1>
            <p className="text-[#6a728d] text-base md:text-lg">
              Gain valuable data-driven insights into talent markets worldwide.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, index) => (
              <div key={index} className="card bg-white p-6 rounded-lg">
                <div className="card-body flex flex-col items-center text-center space-y-4">
                  <div className="bg-[#4b53ff] p-4 rounded-full text-white text-3xl">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#02015a]">
                    {item.title}
                  </h3>
                  <p className="text-[#4e5774] text-[17px]">{item.contentt}</p>
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
