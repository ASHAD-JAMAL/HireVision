import React from "react";
import { FaArrowDown } from "react-icons/fa";

function TimeLine() {
  return (
    <>
      <div>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li className="h-48">
            <div className="timeline-middle flex justify-center items-center h-12 w-12 rounded-full border border-black">
              <p className="text-center">
                <FaArrowDown />
              </p>
            </div>
            <hr className="space-y-10"/>
          </li>
          <li>
            <hr />
            <div className="timeline-middle flex justify-center items-center h-12 w-12 rounded-full border border-black">
              <p className="text-center">01</p>
            </div>
            <div className="timeline-end mb-10 bg-[#181716] text-white p-8 rounded-lg md:w-1/2">
              <div className="text-lg text-[#837766]">iMac</div>
              iMac is a family of all-in-one Mac desktop computers designed and
              built by Apple Inc. It has been the primary part of Apple's
              consumer desktop offerings since its debut in August 1998, and has
              evolved through seven distinct forms
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle flex justify-center items-center h-12 w-12 rounded-full border border-black">
              <p className="text-center">02</p>
            </div>
            <div className="timeline-start mb-10 bg-[#181716] text-white p-8 rounded-lg md:w-1/2">
              <div className="text-lg text-[#837766]">iPod</div>
              The iPod is a discontinued series of portable media players and
              multi-purpose mobile devices designed and marketed by Apple Inc.
              The first version was released on October 23, 2001, about 8+1⁄2
              months after the Macintosh version of iTunes was released. Apple
              sold an estimated 450 million iPod products as of 2022. Apple
              discontinued the iPod product line on May 10, 2022. At over 20
              years, the iPod brand is the oldest to be discontinued by Apple
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle flex justify-center items-center h-12 w-12 rounded-full border border-black">
              <p className="text-center">03</p>
            </div>
            <div className="timeline-end mb-10 bg-[#181716] text-white p-8 rounded-lg md:w-1/2">
              <div className="text-lg text-[#837766]">iPhone</div>
              iPhone is a line of smartphones produced by Apple Inc. that use
              Apple's own iOS mobile operating system. The first-generation
              iPhone was announced by then-Apple CEO Steve Jobs on January 9,
              2007. Since then, Apple has annually released new iPhone models
              and iOS updates. As of November 1, 2018, more than 2.2 billion
              iPhones had been sold. As of 2022, the iPhone accounts for 15.6%
              of global smartphone market share
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle flex justify-center items-center h-12 w-12 rounded-full border border-black">
              <p className="text-center">04</p>
            </div>
            <div className="timeline-start mb-10 bg-[#181716] text-white p-8 rounded-lg md:w-1/2">
              <div className="text-lg text-[#837766]">Apple Watch</div>
              The Apple Watch is a line of smartwatches produced by Apple Inc.
              It incorporates fitness tracking, health-oriented capabilities,
              and wireless telecommunication, and integrates with iOS and other
              Apple products and services
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default TimeLine;
