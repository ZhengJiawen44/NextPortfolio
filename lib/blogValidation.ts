import { ZodError } from "zod";

import { blogZodSchema } from "@/schemas/index";
type ValidateProps = {
  title: string;
  length: string;
  content: string;
};

export const validate = (data: ValidateProps) => {
  try {
    blogZodSchema.parse(data);
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

export default blogZodSchema;
