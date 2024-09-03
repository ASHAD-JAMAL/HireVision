import React from "react";
import "./crousal.css";
import { useRef } from "react";
import chatgpt from "../assets/chatgpt.png";
import splice from "../assets/splice.png";
import logo from "../assets/logo.png";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

// ParallaxText component
function ParallaxText({ baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, 0, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="Parallax">
      <motion.div
        className="scroller flex space-x-5 sm:space-x-14 justify-center items-center"
        style={{ x }}
      >
        <div className="w-44 h-44 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56">
          <img src={chatgpt} alt="" className="w-full h-full object-contain" />
        </div>
        <div className="w-44 h-44 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56">
          <img src={splice} alt="" className="w-full h-full object-contain" />
        </div>
        <div className="w-44 h-44 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56">
          <img src={logo} alt="" className="w-full h-full object-contain" />
        </div>
        <div className="w-44 h-44 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56">
          <img src={splice} alt="" className="w-full h-full object-contain" />
        </div>
        <div className="w-44 h-44 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56">
          <img src={logo} alt="" className="w-full h-full object-contain" />
        </div>
        <div className="w-44 h-44 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56">
          <img src={chatgpt} alt="" className="w-full h-full object-contain" />
        </div>
      </motion.div>
    </div>
  );
}

// Main crousel component
function Crousel() {
  return (
    <>
      <section>
        <h5 className="text-[#9ea4b5] text-[28px] text-center mt-2">
          Already chosen by the world leaders
        </h5>
        <ParallaxText baseVelocity={-6} />
      </section>
      <div className="max-w-screen-2xl container mx-auto my-10 mb-32">
        <div className="flex flex-col justify-center items-center md:px-0 space-y-4 md:space-y-8 px-2">
          <div className="badge bg-[#eaf2ff] py-3">
            <p className="bg-gradient-to-r from-[#a15ee8] to-[#6d8dff] text-transparent bg-clip-text text-sm">
              How It Works
            </p>
          </div>
          <h1 className="md:text-[60px] text-2xl text-[#02015A] font-bold tracking-tighter font-sans text-center leading-tight">
            Easy implementation in <br /> three easy steps
          </h1>
          <p className="text-[#6a728d] text-[17px] text-center">
            Cutting-edge, user-friendly AI tool and growth analytics designed to
            boost user conversion, engagement, and retention.
          </p>
        </div>
      </div>
    </>
  );
}

export default Crousel;
