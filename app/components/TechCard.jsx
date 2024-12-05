import React from "react";
import Image from "next/image";
const TechCard = ({ logo, title, description }) => {
  return (
    <div
      className=" hover:animate-pulse flex items-center aspect-[3.5]  
    bg-gradient-to-bl from-foreground to-background rounded-[2rem]"
    >
      <Image
        src={logo}
        className="h-[80%] md:h-[80%] lg:h-[65%] w-auto ml-2 md:ml-4 lg:ml-8 mr-[4px] md:mr-4 lg:mr-10"
        alt="picture of logo"
      />
      <div>
        <h3 className="text-[0.6rem] md:text-[1rem] lg:text-[1.5rem] mb-1">
          {title}
        </h3>
        <p className="text-[1.2rem] text-primaryDark hidden xlg:block md:text-[0.8rem] xlg:text-[1.2rem]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TechCard;
