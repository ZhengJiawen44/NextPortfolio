"use client";
import React from "react";
import blogValidation from "@/app/utils/blogValidation";
import { useState } from "react";
const TextArea = ({ name }) => {
  const [errors, setErrors] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    const result = blogValidation.shape[name].safeParse(value);
    if (result.success) {
      setErrors("");
    } else {
      setErrors(result.error.formErrors.formErrors[0]);
    }
  };

  return (
    <div className="flex flex-col col-span-2">
      <label htmlFor={name} className="md:text-[1.5rem] mb-3">
        {name}
      </label>
      <textarea
        onChange={(event) => handleChange(event)}
        id={name}
        name={name}
        className=" bg-foreground rounded-[1rem] md:rounded-[1.5rem] shadow-inset 
   h-[10rem] outline-none pl-5 md:text-medium mb-10 pt-4 min-h-[6rem]"
      ></textarea>
      <span className="mb-[3rem]">{errors}</span>
    </div>
  );
};

export default TextArea;
