import Link from "next/link";
import React from "react";

const BlogCard = ({ id, title, read, date, desc }) => {
  return (
    <Link
      href={`/Blog/${id}`}
      className=" relative block h-fit  mb-10 pb-7 rounded-[25px] border border-background hover:border-primaryMedium overflow-hidden"
    >
      <div className="relative">
        <h1 className=" pt-[2rem] md:pt-[2rem] w-[95%] m-auto  mb-7 tracking-tighter text-2xl sm:text-4xl md:text-5xl">
          {title}
        </h1>
        <div className=" flex w-[95%] m-auto ">
          <p className="mr-6">{read} min read</p>
          <p className="">{date}</p>
        </div>

        <p className=" h-[4.4rem] lg:h-[6rem] overflow-hidden mt-6 text-[1rem] md:text-[1.5rem] w-[95%] m-auto  ">
          {desc}
        </p>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent from-60% to-background  z-10 pointer-events-none"></div>
    </Link>
  );
};

export default BlogCard;
