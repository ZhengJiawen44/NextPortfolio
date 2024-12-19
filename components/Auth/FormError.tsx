"use client";
import React, { useState } from "react";
import { TbExclamationCircle } from "react-icons/tb";
import { TbX } from "react-icons/tb";
import clsx from "clsx";

interface formProps {
  message?: string;
}

const FormError = ({ message }: formProps) => {
  const [isVisible, setIsVisible] = useState(true);
  if (message) {
    return (
      <div
        className={clsx(
          "flex items-center gap-2 w-full bg-[#ffd4d4] text-red-500 p-3 rounded-sm mt-2 md:mt-0 transition-all ease-in-out duration-1000 ",
          !isVisible && "hidden"
        )}
      >
        <TbExclamationCircle />
        {message}
        <button
          type="button"
          className="mr-0 ml-auto"
          onClick={() => setIsVisible(false)}
        >
          <TbX />
        </button>
      </div>
    );
  } else {
    return <div>no message</div>;
  }
};

export default FormError;
