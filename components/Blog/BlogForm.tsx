"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { blogZodSchema } from "@/schemas";
import { useForm } from "react-hook-form";
import Editor from "@/components/RichText/Editor";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";

type blogProps = {
  title?: string;
  subtitle?: string;
  length?: number;
  content?: string;
  onSubmit: Function;
};

const BlogForm = ({
  title,
  subtitle,
  length,
  content,
  onSubmit,
}: blogProps) => {
  const form = useForm<z.infer<typeof blogZodSchema>>({
    resolver: zodResolver(blogZodSchema),
    defaultValues: {
      title: title || "",
      length: length || 1,
      content: content || "",
      subtitle: subtitle || "",
    },
  });

  return (
    <Form {...form}>
      <form
        className="border border-item-foreground bg-item p-7  rounded-2xl"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex gap-[5%]">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className=" my-5 min-w-[60%]">
                <div className="flex flex-col">
                  <FormLabel className="text-[1rem] sm:text-[1.3rem] text-white">
                    Title
                  </FormLabel>
                  <FormControl>
                    <input
                      placeholder="your blog title here"
                      className="border border-item-foreground bg-transparent p-2 rounded-lg"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="length"
            render={({ field }) => (
              <FormItem className="my-5 min-w-[35%]">
                <div className="flex flex-col">
                  <FormLabel className="text-[1rem] sm:text-[1.3rem] text-white">
                    Length
                  </FormLabel>
                  <FormControl>
                    <input
                      placeholder="your blog title here"
                      className="border border-item-foreground bg-transparent p-2 rounded-lg"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="subtitle"
          render={({ field }) => (
            <FormItem className=" my-5 min-w-[60%]">
              <div className="flex flex-col">
                <FormLabel className="text-[1rem] sm:text-[1.3rem] text-white">
                  Subtitle
                </FormLabel>
                <FormControl>
                  <textarea
                    placeholder="an optional thumbnail description"
                    className="border border-item-foreground bg-transparent p-2 rounded-lg"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem className=" my-5 min-w-[35%]">
              <div className="flex flex-col">
                <FormLabel className="text-[1rem] sm:text-[1.3rem] text-white ">
                  Content
                </FormLabel>
                <FormControl>
                  <Editor content={field.value} onChange={field.onChange} />
                </FormControl>

                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        <Button
          disabled={form.formState.isSubmitting ? true : false}
          type="submit"
          className="ml-auto mr-0 block"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default BlogForm;
