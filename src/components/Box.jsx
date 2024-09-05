import React from "react";
import { MdArrowOutward } from "react-icons/md";

function Box() {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto px-4 md:px-20 lg:px-40 my-10 space-y-10 md:mt-60">
        <div className="bg-gradient-to-r from-[#573cff] to-[#557aff] rounded-2xl opacity-100 py-10 sm:py-14 md:py-16 px-6 sm:px-8 md:px-16 flex flex-col md:flex-row md:items-center">
          <div className="flex-1">
            <h2 className="text-[24px] sm:text-[28px] md:text-[40px] text-white font-bold font-sans leading-tight">
              Make a lasting <br className="hidden md:block" /> impression with{" "}
              <br className="hidden md:block" /> Hirevision
            </h2>
            <p className="text-white font-sans text-[16px] sm:text-[18px] md:text-[20px] mt-4">
              Discover why hiring managers prefer Hirevision over the
              competition <br className="hidden md:block" /> and what makes it
              the easiest, most powerful video{" "}
              <br className="hidden md:block" /> interviewing platform on the
              market.
            </p>
          </div>
          <div className="w-fit mx-auto">
            <button className="flex md:text-lg text-sm px-4 sm:px-5 py-2 sm:py-3  text-[#573cff] bg-white rounded-lg hover:duration-300 items-center gap-3 group font-semibold">
              <p className="group-hover:-translate-x-1 duration-300">
                Dupluicate In Framer
              </p>
              <MdArrowOutward className="text-[20px] sm:text-[22px] group-hover:translate-x-1 duration-300" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Box;
