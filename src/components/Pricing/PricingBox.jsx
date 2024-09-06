import React from "react";
import { MdArrowOutward } from "react-icons/md";

function PricingBox() {
  return (
    <>
      <div className="bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-20 lg:px-40 py-20 space-y-10 bg-white">
          <div className="hero bg-[#eaf2ff] rounded-2xl opacity-100 py-10 sm:py-14 md:py-16 px-6 sm:px-8 md:px-16 flex flex-col justify-center items-center">
            <div className="hero-content text-center">
              <div className="w-full">
                <h1 className="text-3xl font-bold font-sans text-center text-[#02015a] mb-6">
                  Not finding what you’re looking for?
                </h1>
                <div className="w-fit mx-auto">
                  <button className="flex md:text-lg text-sm px-4 sm:px-5 py-2 sm:py-3 border border-[rgb(0,0,254)] text-white bg-[rgb(0,0,254)] rounded-lg hover:duration-300 items-center gap-3 group">
                    <p className="group-hover:-translate-x-1 duration-300">
                      More Stories
                    </p>
                    <MdArrowOutward className="text-[20px] sm:text-[22px] group-hover:translate-x-1 duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PricingBox;
