import React from "react";
import Image from "next/image";
const TechCard = ({ logo, delay, reverse }) => {
  const isReversed = reverse ? "animate-slideReverse" : "animate-slide";
  return (
    <div
      className={` h-[2rem] sm:h-[3rem] aspect-square md:h-[5rem]  absolute left-[100%] ${isReversed}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {reverse ? (
        <p className=" w-fit">{logo}</p>
      ) : (
        <Image src={logo} className="" alt="picture of logo" />
      )}
    </div>
  );
};

export default TechCard;
