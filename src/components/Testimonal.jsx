import React, { useRef, useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const initialTranslateLTR = -50;
const initialTranslateRTL = 50;

function useIntersectionObserver(elementRef, isLTR, speed) {
  useEffect(() => {
    const element = elementRef.current;

    const scrollHandler = () => {
      const translateX =
        (window.innerHeight - element.getBoundingClientRect().top) * speed;

      let totalTranslate = 0;
      if (isLTR) {
        totalTranslate = -(translateX + initialTranslateLTR);
      } else {
        totalTranslate = translateX + initialTranslateRTL;
      }
      element.style.transform = `translateX(${totalTranslate}px)`;
    };

    const intersectionCallback = (entries) => {
      const isIntersecting = entries[0].isIntersecting;
      if (isIntersecting && window.innerWidth >= 640) {
        document.addEventListener("scroll", scrollHandler);
      } else {
        document.removeEventListener("scroll", scrollHandler);
      }
    };

    const intersectionObserver = new IntersectionObserver(intersectionCallback);
    intersectionObserver.observe(element);

    return () => {
      document.removeEventListener("scroll", scrollHandler);
      intersectionObserver.disconnect();
    };
  }, [elementRef, isLTR, speed]);
}

function Testimonial() {
  const line1Ref = useRef(null);
  useIntersectionObserver(line1Ref, true, 0.25);

  return (
    <div className="flex flex-col justify-center items-center bg-[#f3f7fb] sm:py-10 py-10 px-4 md:px-0">
      <div className="md:py-5 py-6 flex flex-col justify-center items-center space-y-4">
        <div className="badge bg-[#fff] py-4">
          <p className="bg-gradient-to-r from-[#a15ee8] to-[#6d8dff] text-transparent bg-clip-text text-xs sm:text-sm">
            TESTIMONIALS
          </p>
        </div>
        <div>
          <h1 className="md:text-[60px] text-2xl sm:text-3xl text-[#02015A] font-bold leading-tight text-center">
            Don’t take our word for it
          </h1>
        </div>
      </div>
      <div id="slider-container" className="w-full relative overflow-hidden">
        <div
          id="line1"
          ref={line1Ref}
          className="flex flex-col sm:flex-row gap-4 w-full transition-transform ease-linear my-10 justify-center items-center"
        >
          {/* Responsive Card */}
          <div className="card bg-[#ece5ff] w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-4 h-auto sm:h-[400px]">
            <div className="card-body h-full flex flex-col justify-between">
              <p className="text-[#033bac] font-medium text-lg sm:text-xl md:text-2xl">
                "We struggled to find the right talent globally, but with their
                automated candidate ranking, we quickly identified top-notch
                candidates who perfectly fit our requirements."
              </p>
              <div className="card-actions flex items-center mt-4">
                <div className="avatar items-center space-x-4">
                  <div className="w-12 sm:w-14 md:w-16 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                  <p className="text-[#033bac] text-xs sm:text-sm">
                    John Smith, HR Manager at ABC Tech Solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Another Responsive Card */}
          <div className="card bg-[#fbf7b8] w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-4 h-auto sm:h-[400px]">
            <div className="card-body h-full flex flex-col justify-between">
              <p className="text-[#033bac] font-medium text-lg sm:text-xl md:text-2xl">
                "As a fast-growing startup, we needed an efficient way to find
                skilled professionals from various regions. This AI tool
                exceeded our expectations."
              </p>
              <div className="card-actions flex items-center mt-4">
                <div className="avatar items-center space-x-4">
                  <div className="w-12 sm:w-14 md:w-16 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                  <p className="text-[#033bac] text-xs sm:text-sm">
                    John Smith, HR Manager at ABC Tech Solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Another Responsive Card */}
          <div className="card bg-[#fbf7b8] w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-4 h-auto sm:h-[400px]">
            <div className="card-body h-full flex flex-col justify-between">
              <p className="text-[#033bac] font-medium text-lg sm:text-xl md:text-2xl">
                "The platform's emphasis on diversity and inclusion impressed
                me, helping us create a more inclusive workforce."
              </p>
              <div className="card-actions flex items-center mt-4">
                <div className="avatar items-center space-x-4">
                  <div className="w-12 sm:w-14 md:w-16 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                  <p className="text-[#033bac] text-xs sm:text-sm">
                    John Smith, HR Manager at ABC Tech Solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-fit mb-10">
        <button className="flex md:text-lg text-sm px-4 sm:px-5 py-2 sm:py-3 border border-[rgb(0,0,254)] text-[rgb(0,0,254)] hover:bg-[rgb(0,0,254)] rounded-lg hover:duration-300 items-center gap-3 group">
          <p className="group-hover:-translate-x-1 duration-300 group-hover:text-white">
            More Stories
          </p>
          <FaArrowRightLong className="text-[20px] sm:text-[22px] group-hover:translate-x-1 duration-300 group-hover:text-white" />
        </button>
      </div>
    </div>
  );
}

export default Testimonial;
