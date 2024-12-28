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
    const res = await fetch("/api/Blog", {
      method: "POST",
      body: JSON.stringify(values),
    });
    const { message } = await res.json();
    try {
      if (res.ok) {
        toast.success(message);
        router.push("/Blog");
      } else {
        toast.error(message);
      }
    } catch (error: any) {
      toast.error(error);
    }
  };

  return <BlogForm onSubmit={onSubmit} />;
};

export default page;
