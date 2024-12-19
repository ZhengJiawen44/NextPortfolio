import { z } from "zod";
export const MAX_LENGTH = 20000;

export const blog = z.object({
  title: z
    .string({ message: "title cannot be empty!" })
    .min(5, { message: "title cannot be less than 5 characters!" }),
  length: z
    .string({ message: "length cannot be empty!" })
    .max(2, { message: "length cannot be more than 2 characters!" })
    .min(1, { message: "length is required" }),
  content: z
    .string({ message: "content cannot be empty!" })
    .min(50, { message: "content cannot be less than 50 characters!" })
    .max(MAX_LENGTH, { message: "content cannot be over 20,000!" }),
});

export const loginZodSchema = z.object({
  email: z
    .string({ message: "email cannot be left empty!" })
    .email({ message: "please provide a valid email" }),
  password: z
    .string({ message: "passsword cannot be left emptpy!" })
    .min(1, { message: "password is a required field!" }),
});
