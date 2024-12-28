import React from "react";
import Image from "next/image";
import Loading from "@/public/loading.svg";

const LoadingFormSpinner = () => {
  return (
    <div className="min-w-full min-h-screen flex items-center justify-center py-6 sm:py-0">
      <div
        className="w-[90vw] md:w-[80vw] lg:w-[50vw] 2xl:w-[30vw] h-[70vh] bg-item
             px-5 md:px-16 rounded-2xl flex flex-col gap-2 md:gap-7   border-item-foreground border
              shadow-2xl shadow-black mb-6 sm:mb-0 "
      >
        <Image
          src={Loading}
          alt="loading spinner"
          className="w-[4rem] md:w-[5rem]  m-auto animate-spin"
        />
      </div>
    </div>
  );
};

export default LoadingFormSpinner;
