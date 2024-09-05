import React from "react";
import BlogCard from "../BlogCard";
import b1 from "../../assets/b1.avif";
import b2 from "../../assets/b2.avif";
import b3 from "../../assets/b3.avif";
import b4 from "../../assets/b4.avif";
import b5 from "../../assets/b5.avif";
import b6 from "../../assets/b6.avif";
import BlogBox from "./BlogBox";

const items = [
  {
    title: "What is CAC and how do I calculate it?",
    badge: "ARTICLES",
    date: "Apr 5, 2024",
    image: b1,
  },
  {
    title:
      "How you can use recurring revenue financing for faster growth without dilution",
    badge: "CASE STUDIES",
    date: "Mar 5, 2023",
    image: b2,
  },
  {
    title: "Announcing Slang.ai’s $20M in funding",
    badge: "FUNDING",
    date: "Mar 15, 2024",
    image: b3,
  },
  {
    title: "Announcing Slang.ai’s $20M in funding",
    badge: "INNOVATION",
    date: "Feb 28, 2022",
    image: b4,
  },
  {
    title: "Building a Navigation Component with Variables",
    badge: "PRESS RELEASE",
    date: "Feb 6, 2022",
    image: b5,
  },
  {
    title: "How to Create an Effective Design Portfolio",
    badge: "INNOVATION",
    date: "Jan 12, 2022",
    image: b6,
  },
];

function BlogHome() {
  return (
    <>
      <div className="bg-white">
        <div className="h-full relative flex flex-col justify-center items-center space-y-8 bg-white py-36">
          <div className="sm:w-1/2 text-center px-4 sm:px-0">
            <div className="badge bg-[#fff] py-3">
              <p className="bg-gradient-to-r from-[#a15ee8] to-[#6d8dff] text-transparent bg-clip-text text-sm">
                BLOG
              </p>
            </div>
            <h1 className="sm:text-[60px] text-[45px] text-[#02015a] font-bold leading-tight">
              Learn and grow
            </h1>
          </div>
          <div className="text-center sm:w-1/2 px-4 sm:px-0">
            <p className="text-[18px] text-[#4e5774]">
              Here are all our essential tips to empower you to embark on your
              entrepreneurial journey.
            </p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <BlogCard
              key={index}
              title={item.title}
              badge={item.badge}
              image={item.image}
              date={item.date}
            />
          ))}
        </div>
        <BlogBox/>
      </div>
    </>
  );
}

export default BlogHome;
