import React from "react";

const TextArea = ({ name }) => {
  return (
    <div className="flex flex-col col-span-2">
      <label htmlFor={name} className="md:text-[1.5rem] mb-3">
        {name}
      </label>
      <textarea
        id={name}
        name={name}
        className=" bg-foreground rounded-[1rem] md:rounded-[1.5rem] shadow-inset 
   h-[10rem] outline-none pl-5 md:text-medium mb-10 pt-4 min-h-[6rem]"
      ></textarea>
    </div>
  );
};

export default TextArea;
