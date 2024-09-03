import React, { useRef, useEffect } from "react";
import img1 from "../assets/img1.avif";
import img2 from "../assets/img2.avif";
import img3 from "../assets/img3.avif";
import img4 from "../assets/img4.avif";
import img5 from "../assets/img5.avif";
import img6 from "../assets/img6.avif";
import img7 from "../assets/img7.avif";
import img8 from "../assets/img8.avif";

const initialTranslateLTR = -50; // Starting translation for LTR
const initialTranslateRTL = 50;  // Starting translation for RTL

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
      if (isIntersecting) {
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

function Slider() {
  const line1Ref = useRef(null);

  // Set up the observer on the line1 element
  useIntersectionObserver(line1Ref, true, 0.15);

  return (
      <div className="relative flex flex-col justify-center items-center bg-[#f3f7fb] sm:py-10">
        <div id="slider-container" className="w-full relative overflow-hidden">
          <div
            id="line1"
            ref={line1Ref} 
            className="flex gap-4 w-full transition-transform ease-linear my-20 justify-center items-center"
          >
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl md:min-h-32 md:min-w-32">
              <img src={img1} alt="" />
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl md:min-h-32 md:min-w-32">
              <img src={img2} alt="" />
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl md:min-h-32 md:min-w-32">
              <img src={img3} alt="" />
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl md:min-h-32 md:min-w-32">
              <img src={img4} alt="" />
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl md:min-h-32 md:min-w-32">
              <img src={img5} alt="" />
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl md:min-h-32 md:min-w-32">
              <img src={img6} alt="" />
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl md:min-h-32 md:min-w-32">
              <img src={img7} alt="" />
            </div>
            <div className="flex flex-col justify-center gap-2 items-center min-w-24 min-h-24 bg-white rounded-xl md:min-h-32 md:min-w-32">
              <img src={img8} alt="" />
            </div>
          </div>
        </div>
      </div>
  );
}

export default Slider;
