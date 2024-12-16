"use client";
import dynamic from "next/dynamic";

const BlogContentNoSSR = dynamic(() => import("./BlogContent"), {
  ssr: false,
  loading: () => (
    <>
      <p className="rounded-xl w-full bg-item h-[2rem] mt-[1rem]"></p>
      <p className="rounded-xl w-full bg-item h-[2rem] mt-[1rem]"></p>
      <p className="rounded-xl w-full bg-item h-[2rem] mt-[1rem]"></p>
      <p className="rounded-xl w-[50%] bg-item h-[2rem] mt-[1rem]"></p>
      <p className="rounded-xl w-full bg-item h-[2rem] mt-[1rem]"></p>
    </>
  ),
});

export default BlogContentNoSSR;
