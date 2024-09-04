import React from "react";
import { PricingCard } from "./PricingCard";

function PricingHome() {
  return (
    <>
        <div className="w-full relative overflow-x-hidden">
          <div className="absolute md:flex z-[3] hidden right-0">
            <div className="bg-[#371ae7] h-[400px] w-[950px] rounded-full blur-[150px] relative left-[150px] top-[-170px]"></div>
          </div>
          {/* Hero Section */}
          <div className="h-full relative flex flex-col justify-center items-center space-y-8 bg-[#f3f7fb] py-36">
            <div className="sm:w-1/2 text-center px-4 sm:px-0">
              <h1 className="sm:text-[60px] text-[45px] text-[#02015a] font-bold leading-tight">
                Pick a plan, <br /> start free.
              </h1>
            </div>
            <div className="text-center sm:w-1/2 px-4 sm:px-0">
              <p className="text-[18px] text-[#4e5774]">
                Choose your ideal plan. No obligation, cancel anytime.
              </p>
            </div>
            <div className="flex">
            <PricingCard/>
            </div>
          </div>
        </div>
    </>
  );
}

export default PricingHome;
