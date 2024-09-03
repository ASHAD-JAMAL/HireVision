import React from "react";

function BlogCard({ image, title, badge }) {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="card w-96">
          <figure>
            <img
              src={image}
              alt="blog-img"
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="card-body">
            <div className="badge badge-secondary">{badge}</div>
            <p>{title}</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default BlogCard;
