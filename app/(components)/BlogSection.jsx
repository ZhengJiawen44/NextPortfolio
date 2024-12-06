import React from "react";
import { TbSearch, TbPlus } from "react-icons/tb";
import BlogCard from "@/app/(components)/BlogCard";
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
        <div className="flex items-baseline gap-6">
          <h1 className="mb-[5rem] md:mb-0 text-[2.5rem] md:text-[3.5rem] font-extrabold ">
            Blogs
          </h1>
          {displayAll && (
            <Link
              className="bg-foreground w-fit h-fit px-4 py-2  flex items-center gap-1 rounded-[20px] hover:text-primaryLight"
              href="/Blog/new"
            >
              <TbPlus />
              <p>create</p>
            </Link>
          )}
        </div>

        <div
          className="flex items-center justify-between bg-foreground
         rounded-[2rem] shadow-inset
         mt-10 md:mt-0 
         md:w-[50%] lg:w-[40%] h-12 "
        >
          <input
            type="text"
            className=" w-[80%] h-[100%] bg-transparent pl-7 text-medium
          outline-none"
          ></input>
          <button className="w-[20%] h-[100%] flex items-center justify-center">
            <TbSearch className="w-[50%] h-[50%] ml-[40%]  hover:scale-125 hover:text-primaryLight" />
          </button>
        </div>
      </div>

      {data.map(({ id, title, read, date, content }) => {
        return (
          <BlogCard
            key={id}
            id={id}
            title={title}
            read={read}
            date={date}
            content={content}
          />
        );
      })}

      <Link
        href={displayAll ? "/" + "#Blogs  " : "/Blog"}
        scroll={false}
        className="block w-fit m-auto md:text-[1.4rem] hover:text-primaryLight hover:translate-y-1"
      >
        {displayAll ? "Back Home" : "Read more"}
      </Link>
    </div>
  );
};

export default BlogSection;