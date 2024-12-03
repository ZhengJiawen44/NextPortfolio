import React from "react";
import { techData } from "@/app/utils/techData";
import TechCard from "@/app/components/TechCard";
const TechSection = () => {
  return (
    <>
      <h1
        id="Tech"
        className="mb-20 text-[2.5rem] md:text-[3.5rem] mt-40 static font-extrabold "
      >
        Tech I use
      </h1>

      <div className=" grid grid-cols-3 gap-2 md:gap-3 lg:gap-5 mb-[20rem]">
        {techData.map(({ logo, title, description }) => {
          return (
            <TechCard
              key={title}
              logo={logo}
              title={title}
              description={description}
            />
          );
        })}
      </div>
    </>
  );
};

export default TechSection;
