import Link from "next/link";
import React from "react";
import DOMPurify from "dompurify";
import { TbBookmark } from "react-icons/tb";
import { redirect } from "next/navigation";

const BlogCard = ({ id, title, length, date, displayData }) => {
  displayData = DOMPurify.sanitize(displayData);
  displayData = displayData.replace(/<img[^>]+>/g, "");

  return (
    <div
      className="text-foreground relative block h-fit  mb-8 rounded-[20px]  overflow-hidden hover:cursor-pointer"
      onClick={() => {
        redirect(`/Blog/${id}`, "push");
      }}
    >
      <div className="relative">
        <h1 className=" pt-[2rem]  w-[95%] m-auto  mb-7 tracking-tighter text-2xl sm:text-4xl md:text-subtitle">
          {title}
        </h1>

        <div className=" flex w-[95%] m-auto ">
          <p className="mr-6">{length} min read</p>
          <p className="mr-6">{date}</p>
          <button
            onClick={(event) => {
              event.stopPropagation();
              console.log("bookmarked");
            }}
            className="relative flex hover:scale-125 transition-all duration-200"
          >
            <TbBookmark className="w-5 h-5" />
          </button>
        </div>

        <p
          className=" h-[4.4rem] lg:h-[6rem] overflow-hidden mt-6 text-[1rem] md:text-[1.2rem] w-[95%] m-auto  text-item-foreground"
          dangerouslySetInnerHTML={{ __html: displayData }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent from-60% to-background  z-10 pointer-events-none"></div>
    </div>
  );
};

export default BlogCard;
