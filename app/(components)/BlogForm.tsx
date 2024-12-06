"use client";
import React, { FormEvent } from "react";
import FormRow from "./FormRow";
import TextArea from "./TextArea";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { validate } from "@/app/utils/blogValidation";

const BlogForm = () => {
  const router = useRouter();

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const zodResult = validate(data);

    if (zodResult === true) {
      const res = await fetch("/api/Blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const { message } = await res.json();
      if (res.ok) {
        router.push("/Blog");
        toast(message, { className: "bg-foreground" });
      } else {
        toast.error(message);
      }
    } else {
      zodResult.forEach((error) => {
        toast.error(error);
      });
      return;
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <h1 className="text-4xl md:text-6xl mb-24">Create Blog</h1>
        <div className="grid gap-[3rem] grid-cols-2">
          <FormRow type="text" name="title" />
          <FormRow type="text" name="length" />
          <TextArea name="content" />
        </div>
        <button
          type="submit"
          className="w-full bg-cyan200 text-black font-extrabold block text-2xl rounded py-1 md:py-2"
        >
          create
        </button>
      </div>
    </form>
  );
};

export default BlogForm;
