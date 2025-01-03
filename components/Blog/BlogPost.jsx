"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import BlogForm from "./BlogForm";
import BlogContent from "./BlogContentWrapper";
import { IoIosMore } from "react-icons/io";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const BlogPost = ({
  id,
  title,
  subtitle,
  length,
  date,
  content,
  authorName,
}) => {
  const searchParams = useSearchParams();
  const isUpdate = searchParams.get("action") === "update";

  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = async () => {
    try {
      const res = await fetch(`/api/Blog/${id}`, { method: "DELETE" });
      const { message } = await res.json();
      if (!res.ok) {
        toast.error("you need to login");
      }
      toast.success(message);
      router.push("/Blog");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsOpen(false);
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
        subtitle={subtitle}
        length={length}
        content={content}
        onSubmit={handleEdit}
      />
    );
  }

  //continue reading function
  if (typeof windows !== "undefined") {
    localStorage.setItem("lastReadTitle", title);
    localStorage.setItem("lastReadID", id);
  }

  return (
    <>
      <div className="md:w-[80%] m-auto pt-[6rem] mt-10 h-fit pb-10 mb-10 rounded-[25px]">
        <div className="flex  items-center justify-between mb-10 gap-48 ">
          <h1 className=" text-foreground tracking-tighter text-xl md:text-2xl">
            {title}
          </h1>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="outline-none w-8 h-8">
                <IoIosMore className="w-[100%] h-[100%]" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-fit bg-item">
              <DropdownMenuLabel>options</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <Link href={`/Blog/${id}?action=update`}>edit</Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setIsOpen(true)}>
                  delete
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <i className="mb-10 block text-gray-300 font-grotesk">{subtitle}</i>

        {/*userprofile and name */}
        <div className="mb-10 flex gap-6 items-start">
          <img
            src="https://avatars.githubusercontent.com/u/125772813?v=4&size=64"
            className="rounded-[100rem] w-11 h-11"
          />
          <div>
            <div className="flex mb-1">
              <p className="mr-4 sm:mr-14 font-semibold text-[1.1rem]">
                {authorName}
              </p>
              <p className="mr-4">.</p>
              <a className="text-[0.8rem]">Follow</a>
            </div>
            <div className="flex">
              <p className="mr-4 text-gray-300 font-extralight">
                {length} min read
              </p>
              <div className="flex items-center">
                <p className="mr-4">.</p>
              </div>

              <p className="text-gray-300 font-light">{date}</p>
            </div>
          </div>
        </div>

        <BlogContent content={content} />
        <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
          <AlertDialogContent className="rounded-[20px] md:rounded-[20px]">
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleDelete}>
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </>
  );
};

export default BlogPost;
