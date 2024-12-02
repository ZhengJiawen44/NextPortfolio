import React from "react";

const FormRow = ({ type, name }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-[1.5rem] mb-3">
        {name}
      </label>
      <input
        type={type}
        id={name}
        className=" bg-foreground rounded-[1.5rem] shadow-inset 
   h-16 outline-none pl-5 text-medium "
      ></input>
    </div>
  );
};

export default FormRow;
