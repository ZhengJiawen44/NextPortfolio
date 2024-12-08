"use client";
import React from "react";
import blogValidation from "@/lib/blogValidation";
import { useState } from "react";
interface FormRowProps {
  type: string;
  name: keyof typeof blogValidation.shape;
  value: string;
  noValidation: boolean;
}

const FormRow: React.FC<FormRowProps> = ({
  type,
  name,
  value,
  noValidation,
}) => {
  const [errors, setErrors] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
    <div className="flex flex-col">
      <label htmlFor={name} className="md:text-[1.5rem] mb-3">
        {name}
      </label>
      <input
        onChange={(event) => (noValidation ? "" : handleChange(event))}
        type={type}
        id={name}
        name={name}
        defaultValue={value}
        className="bg-item rounded-[1rem] md:rounded-[1.5rem] shadow-inset 
  h-9 md:h-16 outline-none pl-5 md:text-medium "
        required
      ></input>
      <span className="m-3 text-[0.7rem] md:text-[0.9rem]">
        {noValidation ? "" : errors}
      </span>
    </div>
  );
};

export default FormRow;
