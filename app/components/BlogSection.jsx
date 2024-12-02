import React from "react";
import { TbSearch } from "react-icons/tb";
import BlogCard from "@/app/components/BlogCard";
import { blogData } from "@/app/utils/blogData";
import Link from "next/link";
const BlogSection = () => {
  return (
    <div id="Blogs">
      <div className="mb-[8rem] flex items-center justify-between ]">
        <h1 className="font-extrabold">Blogs</h1>
        <div
          className=" flex items-center justify-between bg-foreground
         rounded-[2rem] shadow-inset w-[30rem] h-12"
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
      {blogData.map(({ title, read, date, desc }) => {
        return (
          <BlogCard
            key={title}
            title={title}
            read={read}
            date={date}
            desc={desc}
          />
        );
      })}
      <Link
        href="/Blog"
        className="block w-fit m-auto text-[1.4rem] mb-[25rem]"
      >
        Read more
      </Link>
    </div>
  );
};

export default BlogSection;
