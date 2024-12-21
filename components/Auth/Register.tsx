"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { registerZodSchema } from "@/schemas";
import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import FormToast from "./FormToast";
import Oauth from "./Oauth";

const Register = () => {
  const [message, setMessage] = useState("");
  const [isError, toggleIsError] = useState(false);

  const form = useForm<z.infer<typeof registerZodSchema>>({
    resolver: zodResolver(registerZodSchema),
    defaultValues: { name: "", email: "", password: "", confirmPassword: "" },
  });

  const onSubmit = async (formData: z.infer<typeof registerZodSchema>) => {
    try {
      const response = await fetch("/api/Auth/Register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const body = await response.json();

      if (body.success) {
        setMessage(body.success);
        toggleIsError(false);
        console.log(body.success);
      } else {
        toggleIsError(true);
        setMessage(body.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[100vw] h-[100vh]">
      <div className=" flex justify-center items-center w-full h-full">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-[90%] md:w-[80%] lg:w-[50%] 2xl:w-[30%] bg-item
             px-5 md:px-16 py-9 rounded-2xl grid gap-y-2 md:gap-y-7 border-item-foreground
              border-[1px] shadow-2xl shadow-black mb-6 sm:mb-0"
          >
            <h1 className="m-auto text-4xl ">Register</h1>
            <p className="m-auto opacity-55 text-md">Welcome</p>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[1rem]">Name</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[1rem]">Email</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[1rem]">Password</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} type="password" />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[1rem]">
                    Confirm password
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
              className="mt-2 text-base rounded-lg"
            >
              Register
            </Button>
            <Oauth />

            <FormToast message={message} isError={isError} />

            <p className="m-auto opacity-50 mt-8 ">
              already have an account?
              <Link href="Login">{" Login"}</Link>
            </p>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Register;
