"use client";
import BlogSection from "@/app/components/BlogSection";

const Blog = () => {
  return (
    <>
      <div className="m-auto mt-[15vh] w-[90vw] md:w-[80vw] text-primaryMedium">
        <BlogSection displayAll />
      </div>
    </>
  );
};

export default Blog;
