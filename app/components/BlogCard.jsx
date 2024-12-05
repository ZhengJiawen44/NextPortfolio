import Link from "next/link";
import React from "react";

const BlogCard = ({ id, title, read, date, desc }) => {
  return (
    <Link
      href={`/Blog/${id}`}
      className=" block h-fit  mb-10 pb-7 rounded-[25px] border border-background hover:border-primaryMedium"
    >
      <h1 className=" pt-[2rem] md:pt-[2rem] ml-5 md:ml-10 mb-7 tracking-tighter text-2xl sm:text-4xl md:text-5xl">
        {title}
      </h1>
      <div className="flex ml-5 md:ml-10">
        <p className="mr-6">{read} min read</p>
        <p className="">{date}</p>
      </div>

      <p className="mt-6 text-[1rem] md:text-[1.5rem] ml-5 mr-5 md:ml-10 ">
        {desc}
      </p>
    </Link>
  );
};

export default BlogCard;
