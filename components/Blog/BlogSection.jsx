import React from "react";
import BlogCardWrapper from "./BlogCardWrapper";
import Link from "next/link";

const BlogSection = async ({ displayAll }) => {
  let displayData = [];
  try {
    const data = await fetch("http:/localhost:3000/api/Blog", {
      method: "GET",
      cache: "no-store",
    });
    const { formattedBlogs } = await data.json();

    if (formattedBlogs) {
      if (displayAll || formattedBlogs.length <= 2) {
        displayData = formattedBlogs;
      } else {
        displayData = formattedBlogs.slice(0, 2);
      }
    } else {
      return <div>no blogs to display</div>;
    }
  } catch (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div id="Blogs">
      <div className="mb-[2rem] md:mb-[4rem] md:flex items-center justify-between ">
        <div className="flex items-baseline gap-6 ">
          <h1 className="text-foreground mb-[5rem] md:mb-0 text-[2.5rem] md:text-title">
            Blogs
          </h1>
        </div>
      </div>

      {displayData.length > 0
        ? displayData.map(({ _id, title, length, date, content }) => {
            return (
              <BlogCardWrapper
                key={_id}
                id={_id}
                title={title}
                length={length}
                date={date}
                content={content}
              />
            );
          })
        : "No blogs to display"}

      <Link
        href={displayAll ? "/" + "#Blogs  " : "/Blog"}
        scroll={false}
        className="block w-fit m-auto md:text-[1.4rem] hover:text-foreground hover:translate-y-1 transition-all ease-in-out duration-200"
      >
        {displayAll ? "Back Home" : "read more"}
      </Link>
    </div>
  );
};

export default BlogSection;
