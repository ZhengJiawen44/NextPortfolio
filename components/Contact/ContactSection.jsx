"use client";
import { useForm } from "react-hook-form";
import React from "react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting, errors },
  } = useForm();
  const onSubmit = () => {
    console.log("");
  };
  return (
    <div>
      <h1
        id="Contact"
        className="text-foreground mb-[5rem] text-[2.5rem] md:text-title"
      >
        Contact Me
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-16 md:p-11 "
      >
        <div className="flex flex-col md:col-span-1">
          <label htmlFor="name" className="md:text-[1.5rem]">
            name
          </label>
          <input
            {...register("name", { required: "name is an required field" })}
            id="name"
            className="border bg-item rounded-md p-1 focus:outline-none focus:outline-item-foreground md:w-full"
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>

        {/* Email Field */}
        <div className="flex flex-col md:col-span-1">
          <label htmlFor="email" className="md:text-[1.5rem]">
            email
          </label>
          <input
            type="email"
            {...register("email", { required: "email is an required field" })}
            id="email"
            className="border bg-item rounded-md p-1 focus:outline-none focus:outline-item-foreground md:w-full"
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        {/* Message Field */}
        <div className="flex flex-col md:col-span-2">
          <label htmlFor="message" className="md:text-[1.5rem]">
            message
          </label>
          <textarea
            {...register("message", {
              required: "please write a message 😃",
              minLength: { value: 10, message: "a few more words 😆" },
            })}
            id="message"
            className="min-h-[10rem] border bg-item rounded-md p-1 focus:outline-none focus:outline-item-foreground w-full"
          />
          {errors.message && <span>{errors.message.message}</span>}
        </div>

        {/* Submit Button */}
        <Button
          disabled={isSubmitting}
          className="mt-4 text-[1.1rem] hover:text-black md:col-span-2"
        >
          submit
        </Button>
      </form>
    </div>
  );
};

export default ContactSection;
