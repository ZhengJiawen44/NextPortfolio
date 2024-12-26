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

const BlogPost = ({ id, title, subtitle, length, date, content }) => {
  const searchParams = useSearchParams();
  const isUpdate = searchParams.get("action") === "update";

  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = async () => {
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

  return (
    <>
      <div className="md:w-[80%] m-auto pt-[6rem] mt-10 h-fit pb-10 mb-10 rounded-[25px]">
        <div className="flex  items-center justify-between mb-10 ">
          <h1 className=" text-foreground tracking-tighter text-4xl sm:text-4xl md:text-title">
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

        <div className="flex mb-[5rem]">
          <p className="mr-4 text-foreground">{length} min read</p>
          <p className="text-foreground">{date}</p>
        </div>
        <i className="mb-10 block text-gray-300 font-grotesk">{subtitle}</i>

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
