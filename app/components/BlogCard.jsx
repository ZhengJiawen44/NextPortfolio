import React from "react";

const BlogCard = ({ title, read, date, desc }) => {
  return (
    <div className="mt-10 h-fit pb-10 mb-16  rounded-[25px]">
      <h1 className="pt-[6rem] ml-10 mb-7 tracking-tighter text-5xl">
        {title}
      </h1>
      <div className="flex pl-10">
        <p className="m-4">{read} min read</p>
        <p className="m-4">{date}</p>
      </div>

      <p className="m-10 text-medium">{desc}</p>
    </div>
  );
};

export default BlogCard;
