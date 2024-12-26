import Link from "next/link";
import React from "react";

interface CardProps {
  id: String;
  title: String;
  date: String;
}
const RecommendationCard = ({ id, title, date }: CardProps) => {
  return (
    <Link
      href={`/Blog/${id}`}
      className="text-foreground relative block h-fit  mb-10 pb-9 rounded-[20px] border-2 border-background   overflow-hidden"
    >
      <div className="relative">
        <h1 className=" pt-[2rem]  w-[95%] m-auto  mb-7 tracking-tighter text-2xl sm:text-4xl md:text-subtitle">
          {title}
        </h1>
        <div className=" flex w-[95%] m-auto ">
          <p className="mr-6">{length} min read</p>
          <p className="">{date}</p>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent from-60% to-background  z-10 pointer-events-none"></div>
    </Link>
  );
};

export default RecommendationCard;
