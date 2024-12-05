import React from "react";
import FormRow from "./FormRow";
import TextArea from "./TextArea";
const BlogForm = () => {
  return (
    <div>
      <h1 className="text-4xl md:text-6xl mb-24">Create Blog</h1>
      <div className="grid gap-[3rem] grid-cols-2">
        <FormRow type="text" name="title" />
        <FormRow type="text" name="length" />
        <TextArea name="content" />
      </div>
      <button className="w-full bg-cyan200 text-black font-extrabold block text-2xl rounded py-1 md:py-2">
        create
      </button>
    </div>
  );
};

export default BlogForm;
