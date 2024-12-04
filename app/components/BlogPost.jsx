import React from "react";

const BlogPost = ({ id, title, read, date, content }) => {
  return (
    <>
      <div
        href={`/Blog/${id}`}
        className="pt-[6rem] mt-10 h-fit pb-10 mb-10 rounded-[25px]"
      >
        <h1 className="mb-10 tracking-tighter text-2xl sm:text-4xl md:text-5xl">
          {title}
        </h1>
        <div className="flex  mb-[5rem]">
          <p className="mr-4">{read} min read</p>
          <p>{date}</p>
        </div>

        <p className=" text-[1.2rem] md:text-medium">{content}</p>
      </div>
    </>
  );
};

export default BlogPost;
