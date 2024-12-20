import React from "react";
import Image from "next/image";
import Github from "@/public/github.svg";
import Google from "@/public/google.svg";
import Link from "next/link";

const Oauth = () => {
  return (
    <>
      <div className="relative w-full h-[0.5px] bg-item-foreground my-7 ">
        <p className="border-4 border-item absolute text-sm right-[50%] translate-x-[50%] bottom-[50%] translate-y-[50%] bg-item text-item-foreground">
          other log in options
        </p>
      </div>
      <div className="flex gap-10">
        <Link
          href="/"
          className="bg-[#cccccc] m-auto w-1/2 py-1 rounded-md transition-all duration-300
    hover:shadow-lg hover:shadow-black "
        >
          <Image
            src={Github}
            alt="github logo"
            className="w-[2rem] md:w-[2.7rem] m-auto"
          />
        </Link>
        <Link
          href="/"
          className="bg-[#cccccc] m-auto w-1/2 py-1 rounded-md transition-all duration-300
    hover:shadow-lg hover:shadow-black"
        >
          <Image
            src={Google}
            alt="google logo"
            className="w-[2rem] md:w-[2.7rem] m-auto"
          />
        </Link>
      </div>
    </>
  );
};

export default Oauth;