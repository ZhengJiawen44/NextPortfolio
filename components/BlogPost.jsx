"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const BlogPost = ({ id, title, length, date, content }) => {
  const router = useRouter();
  const [isDelete, setIsDelete] = useState(false);
  const handleDelete = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch(`/api/Blog/${id}`, { method: "DELETE" });
      const { message } = await res.json();
      if (res.ok) {
        toast.success(message);
        router.push("/Blog");
      } else {
        throw new Error(message);
      }
    } catch (error) {
      toast.error(error.message);
      setIsDelete(!isDelete);
    }
  };

  return (
    <>
      <div
        className={`fixed h-[10rem] w-[80%] md:h-[15rem] md:w-[50%] left-[50%] top-[50%]
       translate-x-[-50%] translate-y-[-50%] bg-foreground rounded ${
         isDelete ? "block " : "hidden"
       }`}
        //  bg-[rgb(32, 32, 32, 50%] rounded backdrop-blur-md
      >
        <form onSubmit={(event) => handleDelete(event)}>
          <h3 className="mt-10 w-fit m-auto font-extrabold text-[0.8rem] sm:text-[0.9rem] md:text-[1rem] lg:text-[1.5rem]">
            are you sure you want to delete this?
          </h3>
          <div className=" mt-10 flex justify-center gap-24 ">
            <button className="block md:text-[2rem]  hover:cursor-pointer hover:underline">
              yes
            </button>
            <button
              className="block md:text-[2rem] hover:cursor-pointer hover:underline"
              type="button"
              onClick={() => setIsDelete(!isDelete)}
            >
              no
            </button>
          </div>
        </form>
      </div>

      <div
        href={`/Blog/${id}`}
        className=" pt-[6rem] mt-10 h-fit pb-10 mb-10 rounded-[25px]"
      >
        <h1 className="text-foreground mb-10 tracking-tighter text-2xl sm:text-4xl md:text-5xl">
          {title}
        </h1>
        <div className="flex  mb-[5rem]">
          <p className="mr-4 text-foreground">{length} min read</p>
          <p className="text-foreground">{date}</p>
        </div>

        <p className=" text-foreground w-full text-[1.2rem] md:text-medium break-words">
          {content}
        </p>

        <button
          className="mr-8 my-8 bg-item p-2 px-4 rounded-2xl shadow-inset
       text-item-foreground hover:text-foreground"
        >
          edit
        </button>
        <button
          className="my-8 bg-item p-2 px-4 rounded-2xl shadow-inset
        text-item-foreground hover:text-foreground"
          onClick={() => setIsDelete(!isDelete)}
        >
          delete
        </button>
      </div>
    </>
  );
};

export default BlogPost;
