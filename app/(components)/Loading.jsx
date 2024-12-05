import React from "react";

const Loading = () => {
  return (
    <div className="mt-[5rem] animate-pulse w-[80vw] md:w-[60vw] m-auto">
      <div className="mt-16 w-[100%] h-[20vh] bg-foreground rounded"></div>
      <br />
      <div className="flex gap-5">
        <div className="w-[50%] h-[20vh] bg-foreground rounded mt-10"></div>
        <div className="w-[100%] mt-10">
          <div className="w-[80%] h-[1rem] bg-foreground m-2 rounded"></div>
          <div className="w-[80%] h-[1rem] bg-foreground m-2 rounded"></div>
          <div className="w-[30%] h-[1rem] bg-foreground m-2 rounded"></div>
          <br />
          <div className="w-[80%] h-[1rem] bg-foreground m-2 rounded"></div>
          <div className="w-[70%] h-[1rem] bg-foreground m-2 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
