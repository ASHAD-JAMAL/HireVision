import React from "react";

function Box() {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto px-4 md:px-40 my-10 space-y-10 md:mt-60">
        <div className="bg-gradient-to-r from-[#573cff] to-[#557aff] rounded-2xl opacity-100 py-14 md:py-16 px-8 md:px-16 md:flex md:items-center">
          <div className="flex-1">
            <h2 className="text-[28px] md:text-[40px] text-white font-bold font-sans leading-tight">
              Make a lasting <br /> impression with <br /> Hirevision
            </h2>
            <p className="text-white font-sans text-[18px] md:text-[20px] mt-4">
              Discover why hiring managers prefer Hirevision over the
              competition <br /> and what makes it the easiest, most powerful video
              interviewing <br /> platform on the marke
            </p>
          </div>
          <div className="mt-8 md:mt-0 md:flex-none md:w-auto">
            <button className="text-[16px] px-5 py-3 text-[rgb(87,60,255)] font-semibold bg-white rounded-lg">
              Duplicate In Framer <span className="text-[18px]">↗</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Box;
