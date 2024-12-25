import React from "react";
import { TbSearch } from "react-icons/tb";

const SearchBar = () => {
  return (
    <div
      className="flex items-center justify-between bg-item
 rounded-[2rem] shadow-inset
 w-full h-10 sm:h-12  pr-3 sm:pr-5"
    >
      <input
        type="text"
        className=" w-full h-[100%] bg-transparent pl-3 sm:pl-7 text-medium
  outline-none "
      ></input>

      <TbSearch className=" w-[1.5rem] h-[1.5rem] sm:w-[2rem] sm:h-[2rem]  transition-all duration-300 ease-in-out hover:scale-125 hover:text-foreground" />
    </div>
  );
};

export default SearchBar;
