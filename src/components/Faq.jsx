import React, { useState } from "react";

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleCollapse = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="max-w-screen-2xl flex flex-col justify-center items-center space-y-3 md:py-32 md:px-0 px-4">
        <div className="flex flex-col justify-center items-center my-8">
          <div className="badge bg-[#fff] py-3">
            <p className="bg-gradient-to-r from-[#a15ee8] to-[#6d8dff] text-transparent bg-clip-text text-sm">
              FAQ
            </p>
          </div>
          <div>
            <h1 className="text-[#02015a] text-[32px] font-bold md:text-[60px] text-center">
              We’ve got you covered
            </h1>
          </div>
        </div>
        
        {[
          { title: "Does This App Offer A Free Trial Period", content: "All individual Framer subscriptions..." },
          { title: "What Payment Methods Do You Offer", content: "All individual Framer subscriptions..." },
          { title: "How Much Does The Subscription Cost", content: "All individual Framer subscriptions..." },
          { title: "What Is Your Refund Policy", content: "All individual Framer subscriptions..." },
        ].map((faq, index) => (
          <div
            key={index}
            className={`collapse collapse-arrow bg-[#ecf1f7] md:w-[650px] w-full cursor-pointer ${
              activeIndex === index ? "collapse-open" : "collapse-close"
            }`}
            onClick={() => toggleCollapse(index)}
          >
            <div className="collapse-title text-xl font-semibold text-[#02015a] text-[20px]">
              {faq.title}
            </div>
            <div className="collapse-content">
              <p className="text-[16px] text-[#5b637e]">{faq.content}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Faq;
