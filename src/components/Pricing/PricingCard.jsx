import React from "react";
import { FaCheck } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
export function PricingCard() {
  return (
    <div className="flex gap-20 md:py-24 flex-col md:flex-row justify-center items-center">
      <div className="card w-full max-w-[20rem] bg-white text-black p-8">
        <div className="card-header pb-8">
          <div className="badge bg-primary py-3">
            <p className="text-white font-semibold">STARTER</p>
          </div>
          <div className="mt-6 items-baseline gap-1 text-7xl font-normal">
            <span className="mt-2 text-4xl">$</span>19{" "}
            <span className="text-4xl">/mo</span>
          </div>
        </div>
        <div className="card-body p-0 px-4">
          <p>What's include</p>
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4">
              <span className="rounded-full border p-1 border-[#573cff] text-[#573cff]">
                <FaCheck />
              </span>
              <span className="font-normal">5 team members</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border p-1 border-[#573cff] text-[#573cff]">
                <FaCheck />
              </span>
              <span className="font-normal">200+ components</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border p-1 border-[#573cff] text-[#573cff]">
                <FaCheck />
              </span>
              <span className="font-normal">40+ built-in pages</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border p-1 border-[#573cff] text-[#573cff]">
                <FaCheck />
              </span>
              <span className="font-normal">1 year free updates</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border p-1 border-[#573cff] text-[#573cff]">
                <FaCheck />
              </span>
              <span className="font-normal">Lifetime technical support</span>
            </li>
          </ul>
        </div>
        <div className="mt-12 p-0">
          <button className="btn w-full hover:scale-105 focus:scale-105 active:scale-100 bg-white text-[#573cff]  border border-[#573cff] hover:bg-primary hover:text-white group">
            <p className="group-hover:-translate-x-1 duration-300">
              Get Started
            </p>
            <MdArrowOutward className="text-[20px] sm:text-[22px] group-hover:translate-x-1 duration-300" />
          </button>
        </div>
      </div>
      <div className="card w-full max-w-[20rem] bg-primary text-white p-8">
        <div className="card-header pb-8">
          <div className="badge bg-[#fbf7b8] py-3">
            <p className="text-primary font-semibold">PRO</p>
          </div>
          <div className="mt-6 items-baseline gap-1 text-7xl font-normal">
            <span className="mt-2 text-4xl">$</span>29{" "}
            <span className="text-4xl">/mo</span>
          </div>
        </div>
        <div className="card-body p-0 px-4">
          <p>What's include</p>
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4">
              <span className="rounded-full border p-1 border-white">
                <FaCheck />
              </span>
              <span className="font-normal">5 team members</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border p-1 border-white">
                <FaCheck />
              </span>
              <span className="font-normal">200+ components</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border p-1 border-white">
                <FaCheck />
              </span>
              <span className="font-normal">40+ built-in pages</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border p-1 border-white">
                <FaCheck />
              </span>
              <span className="font-normal">1 year free updates</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border p-1 border-white">
                <FaCheck />
              </span>
              <span className="font-normal">Lifetime technical support</span>
            </li>
          </ul>
        </div>
        <div className="mt-12 p-0">
          <button className="btn w-full hover:scale-105 focus:scale-105 active:scale-100 bg-white text-[#573cff]  border border-[#573cff] hover:bg-primary hover:text-white group">
            <p className="group-hover:-translate-x-1 duration-300">
              Get Started
            </p>
            <MdArrowOutward className="text-[20px] sm:text-[22px] group-hover:translate-x-1 duration-300" />
          </button>
        </div>
      </div>
      <div className="card w-full max-w-[20rem] bg-white text-black p-8">
        <div className="card-header pb-8">
          <div className="badge bg-primary py-3">
            <p className="text-white font-semibold">TEAM</p>
          </div>
          <div className="mt-6 items-baseline gap-1 text-7xl font-normal">
            <span className="mt-2 text-4xl">$</span>49{" "}
            <span className="text-4xl">/mo</span>
          </div>
        </div>
        <div className="card-body p-0 px-4">
          <p>What's include</p>
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4">
              <span className="rounded-full border p-1 border-[#573cff] text-[#573cff]">
                <FaCheck />
              </span>
              <span className="font-normal">5 team members</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border p-1 border-[#573cff] text-[#573cff]">
                <FaCheck />
              </span>
              <span className="font-normal">200+ components</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border p-1 border-[#573cff] text-[#573cff]">
                <FaCheck />
              </span>
              <span className="font-normal">40+ built-in pages</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border p-1 border-[#573cff] text-[#573cff]">
                <FaCheck />
              </span>
              <span className="font-normal">1 year free updates</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border p-1 border-[#573cff] text-[#573cff]">
                <FaCheck />
              </span>
              <span className="font-normal">Lifetime technical support</span>
            </li>
          </ul>
        </div>
        <div className="mt-12 p-0">
          <button className="btn w-full hover:scale-105 focus:scale-105 active:scale-100 bg-white text-[#573cff]  border border-[#573cff] hover:bg-primary hover:text-white group">
            <p className="group-hover:-translate-x-1 duration-300">
              Get Started
            </p>
            <MdArrowOutward className="text-[20px] sm:text-[22px] group-hover:translate-x-1 duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
}
