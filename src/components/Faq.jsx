import React from "react";

function Faq() {
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
            <h1 className="text-[#02015a] text-[40px] font-bold md:text-[60px] text-center">
              We’ve got you covered
            </h1>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-[#ecf1f7] md:w-[650px] w-fit">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold text-[#02015a] text-[20px]">
            Does This app Offer The Free Trial Period
          </div>
          <div className="collapse-content">
            <p className="text-[16px] text-[#5b637e]">
              All individual Framer subscriptions have been grandfathered into a
              Pro plan at your existing rate. If you were on a Small Team plan,
              then all 5 seats have been converted over to Pro seats at your
              existing rate. Regardless of your subscription plan, all new paid
              editors that you add to your subscription will be billed at the
              new plan rates.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-[#ecf1f7] md:w-[650px] w-fit">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-semibold text-[#02015a] text-[20px]">
            What Payment Method Do you Offer
          </div>
          <div className="collapse-content">
            <p className="text-[16px] text-[#5b637e]">
              All individual Framer subscriptions have been grandfathered into a
              Pro plan at your existing rate. If you were on a Small Team plan,
              then all 5 seats have been converted over to Pro seats at your
              existing rate. Regardless of your subscription plan, all new paid
              editors that you add to your subscription will be billed at the
              new plan rates.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-[#ecf1f7] w-fit md:w-[650px]">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-semibold text-[#02015a] text-[20px]">
            How Much Does The Subscription Cost
          </div>
          <div className="collapse-content">
            <p className="text-[16px] text-[#5b637e]">
              All individual Framer subscriptions have been grandfathered into a
              Pro plan at your existing rate. If you were on a Small Team plan,
              then all 5 seats have been converted over to Pro seats at your
              existing rate. Regardless of your subscription plan, all new paid
              editors that you add to your subscription will be billed at the
              new plan rates.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-[#ecf1f7] w-fit md:w-[650px]">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-semibold text-[#02015a] text-[20px]">
            What Is Your Refund Policy
          </div>
          <div className="collapse-content">
            <p className="text-[16px] text-[#5b637e]">
              All individual Framer subscriptions have been grandfathered into a
              Pro plan at your existing rate. If you were on a Small Team plan,
              then all 5 seats have been converted over to Pro seats at your
              existing rate. Regardless of your subscription plan, all new paid
              editors that you add to your subscription will be billed at the
              new plan rates.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Faq;
