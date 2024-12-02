import React from "react";
import Image from "next/image";
const TechCard = ({ logo, title, description }) => {
  return (
    <div className="flex justify-start items-center aspect-[3.5]  bg-gradient-to-bl from-foreground to-background rounded-[2rem]">
      <Image
        src={logo}
        className="h-[65%] w-auto ml-8 mr-10"
        alt="picture of mongodb logo"
      />
      <div>
        <h3 className=" text-[2rem] mb-1"> {title}</h3>
        <p className="text-[1.2rem] text-primaryDark">{description}</p>
      </div>
    </div>
  );
};

export default TechCard;
