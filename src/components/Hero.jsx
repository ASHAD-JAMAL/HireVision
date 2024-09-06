import React, { useRef, useEffect } from "react";
import Navbar from "./Navbar";
import Slider from "./Slider";
import Crousal from "../template/crousel";
import FeatureCard from "./FeatureCard";
import Box from "./Box";
import Testimonal from "./Testimonal";
import Faq from "./Faq";
import Footer from "./Footer";
import BlogCard from "./BlogCard";
import blog1 from "../assets/blog1.avif";
import blog2 from "../assets/blog2.avif";
import blog3 from "../assets/blog3.avif";
import TimeLine from "./TimeLine";

const items = [
  {
    image: blog1,
    title: "What is CAC and how do I calculate it?",
    badge: "ARTICLES",
  },
  {
    image: blog2,
    title:
      "How you can use recurring revenue financing for faster growth without dilution",
    badge: "CASE STUDIES",
  },
  {
    image: blog3,
    title: "Announcing Slang.ai’s $20M in funding",
    badge: "FUNDING",
  },
];

function Hero() {
  return (
    <div className="bg-white">
      <Navbar />
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
          <div className="sm:mt-36 mt-24">
            <button className="btn rounded-full bg-[#f8fafd] text-primary">
              <div className="badge bg-[#eaf2ff] py-3 text-primary text-sm">
                New
              </div>
              Create teams in Organisation →
            </button>
          </div>
          <div className="sm:w-1/2 text-center px-4 sm:px-0">
            <h1 className="sm:text-[60px] text-[45px] text-[#02015a] font-bold">
              Boost your hiring process with AI solution
            </h1>
          </div>
          <div className="text-center sm:w-1/2 px-4 sm:px-0">
            <p className="text-[18px] text-[#4e5774]">
              Hirevision is used by numerous businesses, institutions, and
              recruiters to significantly enhance their screening and
              recruitment procedures.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="avatar-group -space-x-6 rtl:space-x-reverse py-10">
              <div className="avatar hover:-translate-y-1">
                <div className="w-10 h-10 cursor-pointer">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <div className="avatar hover:-translate-y-1">
                <div className="w-10 h-10 cursor-pointer">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <div className="avatar hover:-translate-y-1">
                <div className="w-10 h-10 cursor-pointer">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <div className="avatar hover:-translate-y-1">
                <div className="w-10 h-10 cursor-pointer">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
            </div>
            <div>
              <p className="text-[16px] text-[#4e5774]">
                Trusted Already 1.25k+
              </p>
            </div>
          </div>
          <div className="px-4 sm:px-0 sm:space-x-5 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:w-auto w-full">
            <button className="px-5 py-3 text-[16px] text-[rgb(87,60,255)] border border-[rgb(87,60,255)] rounded-lg hover:bg-[rgb(87,60,255)] hover:text-white duration-300">
              Learn More
            </button>
            <button className="text-[16px] px-5 py-3 text-white font-semi-bold bg-[#573cff] hover:bg-[rgb(0,0,254)] hover:text-[18px] rounded-lg duration-300">
              Request Demo <span className="text-[18px]">↗</span>
            </button>
          </div>
        </div>
        <Slider />
      </div>
      <Crousal />
      <FeatureCard />
      <Box />
      <div className="py-20 bg-white">
        <div className="flex flex-col justify-center items-center">
          <div className="badge bg-[#eaf2ff] py-3">
            <p className="bg-gradient-to-r from-[#a15ee8] to-[#6d8dff] text-transparent bg-clip-text text-sm">
              METRICES
            </p>
          </div>
          <h1 className="text-center py-5 text-[24px] md:text-[48px] text-[#02015a]">
            Numbers speaking for themselves
          </h1>
        </div>
        <div className="stats flex flex-col md:flex-row md:px-32 md:mt-5 py-5 bg-white">
          <div className="stat place-items-center">
            <div className="stat-value text-[#573cff] text-[58px]">75%</div>
            <div className="stat-desc text-[#5b637e] text-[20px] py-5">
              Candidate match rate
            </div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-value text-[#573cff] text-[58px]">4,000+</div>
            <div className="stat-desc text-[#5b637e] text-[20px] py-5">
              Successful placement
            </div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-value text-[#573cff] text-[58px]">50+</div>
            <div className="stat-desc text-[#5b637e] text-[20px] py-5">
              Operating countries
            </div>
          </div>
        </div>
      </div>
      <Testimonal />
      <TimeLine/>
      <Faq />
      <div>
        <div className="flex flex-col justify-center items-center mt-10">
          <div className="badge bg-[#eaf2ff] py-3">
            <p className="bg-gradient-to-r from-[#a15ee8] to-[#6d8dff] text-transparent bg-clip-text text-sm">
              BLOG
            </p>
          </div>
          <h1 className="text-center py-5 text-[24px] md:text-[48px] text-[#02015a]">
            From our Blog
          </h1>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <BlogCard
              key={index}
              title={item.title}
              badge={item.badge}
              image={item.image}
            />
          ))}
        </div>
      </div>
      <Box />
      <Footer />
    </div>
  );
}

export default Hero;
