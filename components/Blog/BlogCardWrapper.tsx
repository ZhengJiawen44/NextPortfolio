"use client";
import dynamic from "next/dynamic";

const BlogCardNoSSR = dynamic(() => import("./BlogCard"), {
  ssr: false,
  loading: () => (
    <div className="relative mb-10 pb-9 mt-[7rem]">
      <div className="relative">
        <div className=" rounded-xl bg-item pt-[2rem] w-[95%] m-auto mb-10"></div>
        <div className=" flex w-[95%] m-auto ">
          <p className="rounded-xl bg-item w-[5rem]  h-4 mr-6"></p>
          <p className="rounded-xl bg-item w-[7rem] h-4"></p>
        </div>

        <p className="rounded-xl bg-item h-[4.4rem] lg:h-[6rem] mt-11 w-[95%] m-auto "></p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent from-60% to-background  z-10 pointer-events-none"></div>
    </div>
  ),
});

export default BlogCardNoSSR;
