import { z, ZodError } from "zod";

const blog = z.object({
  title: z
    .string({ message: "title cannot be empty!" })
    .min(5, { message: "title cannot be less than 5 characters!" }),
  length: z
    .string({ message: "length cannot be empty!" })
    .max(2, { message: "length cannot be more than 2 characters!" })
    .min(1, { message: "length is required" }),
  content: z
    .string({ message: "content cannot be empty!" })
    .min(50, { message: "content cannot be less than 50 characters!" }),
});

export const validate = (data) => {
  try {
    blog.parse(data);
    return true;
  } catch (error) {
    if (error instanceof ZodError) {
      const message = error.errors.map((err) => err.message);
      return message;
    } else {
      return ["validation passed but unexpected error happened"];
    }
  }
};

export default blog;
