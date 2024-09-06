import React from "react";

function BlogBox() {
  return (
    <>
      <div className="bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-20 lg:px-40 py-10 space-y-10 md:mt-60 bg-white">
          <div className="bg-[#ece5ff] rounded-2xl opacity-100 py-10 sm:py-14 md:py-16 px-6 sm:px-8 md:px-16 flex flex-col md:flex-row md:items-center">
            <div className="flex-1">
              <h2 className="text-[24px] sm:text-[28px] md:text-[40px] text-[#5d42ff] font-bold font-sans leading-tight">
                Subscribe to our <br /> newsletter
              </h2>
              <p className="text-[#02015a] font-sans text-[16px] sm:text-[18px] md:text-[20px] mt-4 text-justify">
                Stay updated with the latest news, trends, and insights in the
                world of AI and technology by subscribing to our newsletter.
              </p>
            </div>
            <div className="flex gap-3 md:mt-0 mt-8">
              <input
                type="email"
                placeholder="your@gmail.com"
                className="input w-full border"
              />
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogBox;
