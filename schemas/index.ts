import { z } from "zod";
export const MAX_LENGTH = 20000;

export const blogZodSchema = z.object({
  title: z
    .string({ message: "title cannot be empty!" })
    .min(5, { message: "title cannot be less than 5 characters!" }),
  subtitle: z
    .string()
    .max(200, { message: "subtitles cannot be longer than 200 words" })
    .optional(),
  length: z
    .number({ message: "length cannot be empty!" })
    .max(2, { message: "length cannot be more than 60 minutes!" })
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

export const registerZodSchema = loginZodSchema
  .extend({
    name: z
      .string({ message: "name is a required field" })
      .min(2, { message: "name must contain atleast (2) characters" }),

    password: loginZodSchema.shape.password
      .min(8, {
        message: "passwords should be minimum 8 characters!",
      })
      .refine(
        (value) => {
          return value.match("^(?=.*?[A-Z])");
        },
        { message: "at least one Upper Case letter" }
      )
      .refine(
        (value) => {
          return value.match("^(?=.*?[a-z])");
        },
        { message: "at least one Lower Case letter" }
      )
      .refine(
        (value) => {
          return value.match("^(?=.*?[0-9])");
        },
        { message: "at least one Digit" }
      )
      .refine(
        (value) => {
          return value.match("^(?=.*?[#?!@$%^&*-])");
        },
        { message: "at least one special digit" }
      ),
    confirmPassword: z.string({ message: "password cannot be left emptpy!" }),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "passwords do not match!",
    path: ["confirmPassword"],
  });
