import React from "react";

const Loading = () => {
  return (
    <div className="mt-[5rem] animate-pulse w-[80vw] lg:w-[60vw] m-auto rounded-lg">
      <div className="mt-16 w-[100%] h-[20vh] bg-item  rounded-lg"></div>
      <br />
      <div className="flex gap-5">
        <div className="w-[50%] h-[20vh] bg-item  mt-10 rounded-lg"></div>
        <div className="w-[100%] mt-10">
          <div className="w-[80%] h-[1rem] bg-item m-2 rounded-lg"></div>
          <div className="w-[80%] h-[1rem] bg-item m-2 rounded-lg"></div>
          <div className="w-[30%] h-[1rem] bg-item m-2 rounded-lg"></div>
          <br />
          <div className="w-[80%] h-[1rem] bg-item m-2 rounded-lg"></div>
          <div className="w-[70%] h-[1rem] bg-item m-2 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
