import React from "react";

function FeatureHero() {
  return (
    <>
      <div>
        <div className="w-full relative overflow-x-hidden">
          <div className="absolute md:flex z-[3] hidden">
            <div className="bg-[#f8ff37] h-[200px] w-[400px] rounded-full blur-[76px]"></div>
            <div className="bg-[#02ed2a] h-[200px] w-[150px] rounded-full blur-[76px] top-[-63px] relative"></div>
            <div className="bg-[#371ae7] h-[270px] w-[400px] rounded-r-none blur-[80px] relative top-[-100px]"></div>
            <div className="bg-[#371ae7] h-[370px] w-[350px] rounded-l-none blur-[80px] relative top-[-230px] left-[-60px]"></div>
            <div className="bg-[#371ae7] h-[400px] w-[450px] rounded-full blur-[80px] relative left-[-180px] top-[-100px]"></div>
          </div>
          {/* Hero Section */}
          <div className="min-h-screen relative flex flex-col justify-center items-center space-y-10 bg-[#f3f7fb]">
            <div className="sm:w-1/2 text-center px-4 sm:px-0">
              <h1 className="sm:text-[60px] text-[45px] text-[#02015a] font-bold leading-tight">
                AI-Powered features from the future.
              </h1>
            </div>
            <div className="text-center sm:w-1/2 px-4 sm:px-0">
              <p className="text-[18px] text-[#4e5774]">
                Hirevision is utilized by numerous businesses, institutions, and
                recruiters to significantly enhance their screening and
                recruitment procedures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeatureHero;
