"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import BlogForm from "./BlogForm";
import DOMPurify from "dompurify";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const BlogPost = ({ id, title, length, date, content }) => {
  if (typeof window !== "undefined") {
    content = DOMPurify.sanitize(content);
  }

  const searchParams = useSearchParams();
  const isUpdate = searchParams.get("action") === "update";

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

  const handleEdit = async (value) => {
    try {
      const res = await fetch(`/api/Blog/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(value),
      });
      const { message } = await res.json();
      if (res.ok) {
        toast.success(message);
        router.push(`/Blog/${id}`);
      } else {
        throw new Error(message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  if (isUpdate) {
    return (
      <BlogForm
        title={title}
        length={length}
        content={content}
        onSubmit={handleEdit}
      />
    );
  }

  return (
    <>
      <div
        href={`/Blog/${id}`}
        className=" pt-[6rem] mt-10 h-fit pb-10 mb-10 rounded-[25px]"
      >
        <h1 className="text-foreground mb-10 tracking-tighter text-4xl sm:text-4xl md:text-title">
          {title}
        </h1>
        <div className="flex  mb-[5rem]">
          <p className="mr-4 text-foreground">{length} min read</p>
          <p className="text-foreground">{date}</p>
        </div>
        <p
          className=" text-foreground w-full text-[1.2rem] md:text-[xl] leading-10 break-words"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        {/* {content} */}

        <Link
          href={`/Blog/${id}?action=update`}
          className="mr-8 my-8 bg-item p-2 px-4 rounded-2xl shadow-inset
       text-item-foreground hover:text-foreground hover:bg-accent"
        >
          edit
        </Link>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              variant="destructive"
              className="mr-8 my-8 bg-item p-2 px-4 rounded-2xl shadow-inset
       text-item-foreground hover:text-foreground"
            >
              delete
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <form onSubmit={(event) => handleDelete(event)}>
                <AlertDialogAction className="w-full" type="submit">
                  Continue
                </AlertDialogAction>
              </form>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </>
  );
};

export default BlogPost;
