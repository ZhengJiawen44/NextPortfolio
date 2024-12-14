import Link from "next/link";
import React from "react";
const BlogCard = ({ id, title, length, date, content }) => {
  return (
    <Link
      href={`/Blog/${id}`}
      className="text-foreground relative block h-fit  mb-10 pb-9 rounded-[20px] border-2 border-background hover:border-primaryMedium  overflow-hidden"
    >
      <div className="relative">
        <h1 className=" pt-[2rem] md:pt-[2rem] w-[95%] m-auto  mb-7 tracking-tighter text-2xl sm:text-4xl md:text-subtitle">
          {title}
        </h1>
        <div className=" flex w-[95%] m-auto ">
          <p className="mr-6">{length} min read</p>
          <p className="">{date}</p>
        </div>

        <p className=" h-[4.4rem] lg:h-[6rem] overflow-hidden mt-6 text-[1rem] md:text-[1.2rem] w-[95%] m-auto  text-item-foreground">
          {content}
        </p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent from-60% to-background  z-10 pointer-events-none"></div>
    </Link>
  );
};

export default BlogCard;
