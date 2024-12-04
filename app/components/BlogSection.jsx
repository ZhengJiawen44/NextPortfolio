import React from "react";
import { TbSearch } from "react-icons/tb";
import BlogCard from "@/app/components/BlogCard";
import { blogData } from "@/app/utils/blogData";
import Link from "next/link";

const BlogSection = ({ displayAll }) => {
  let data = [];
  if (displayAll || blogData.length <= 2) {
    data = blogData;
  } else {
    data = blogData.slice(0, 2);
  }
  return (
    <div id="Blogs">
      <div className="mb-[2rem] md:mb-[4rem] md:flex items-center justify-between">
        <h1 className="mb-[5rem] md:mb-0 text-[2.5rem] md:text-[3.5rem] font-extrabold ">
          Blogs
        </h1>
        <div
          className=" flex items-center justify-between bg-foreground
         rounded-[2rem] shadow-inset
         mt-10 md:mt-0 
         md:w-[50%] lg:w-[40%] h-12"
        >
          <input
            type="text"
            className="w-[80%] h-[100%] bg-transparent pl-7 text-medium
          outline-none"
          ></input>
          <button className="border w-[20%] h-[100%] flex items-center justify-center">
            <TbSearch className="w-[50%] h-[50%] hover:scale-125 hover:text-primaryLight" />
          </button>
        </div>
      </div>

      {data.map(({ id, title, read, date, desc }) => {
        return (
          <BlogCard
            key={id}
            id={id}
            title={title}
            read={read}
            date={date}
            desc={desc}
          />
        );
      })}

      <Link
        href={displayAll ? "/#Blogs" : "/Blog"}
        scroll={false}
        className="block w-fit m-auto text-[1.4rem]"
      >
        {displayAll ? "Back Home" : "Read more"}
      </Link>
    </div>
  );
};

export default BlogSection;
