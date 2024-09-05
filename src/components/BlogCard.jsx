import React from "react";

function BlogCard({ image, title, badge, date }) {
  return (
    <>
      <div className="w-full mx-auto md:px-20 px-4 bg-white">
        <div className="card w-auto">
          <figure>
            <img
              src={image}
              alt="blog-img"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="px-1 py-3">
            <div className="flex justify-between">
              <div className="badge bg-[#d9ffd8] text-[#0000fe] font-sans">
                {badge}
              </div>
              <div>
                <p className="">{date}</p>
              </div>
            </div>
            <p className="text-[30px] font-sans font-bold text-[#02015a]">
              {title}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default BlogCard;
