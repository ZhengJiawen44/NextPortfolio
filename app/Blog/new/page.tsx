"use client";
import React from "react";
import { toast } from "react-toastify";
import { z } from "zod";
import { blogZodSchema } from "@/schemas";
import { useRouter } from "next/navigation";

import BlogForm from "@/components/Blog/BlogForm";

const page = () => {
  const router = useRouter();
  const onSubmit = async (values: z.infer<typeof blogZodSchema>) => {
    try {
      const res = await fetch("/api/Blog", {
        method: "POST",
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        toast.error("you need to log in again");
        return;
      }

      const { message } = await res.json();

      toast.success(message);
      router.push("/Blog");
    } catch (error) {
      console.log(error);
    }
  };

  return <BlogForm onSubmit={onSubmit} />;
};

export default page;
