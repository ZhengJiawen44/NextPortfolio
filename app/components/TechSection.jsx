import React from "react";
import { techData } from "@/app/utils/techData";
import TechCard from "@/app/components/TechCard";
const TechSection = () => {
  return (
    <div>
      <h1
        id="Tech"
        className="mb-[4rem] text-[2.5rem] md:text-[3.5rem] static font-extrabold "
      >
        Tech I use
      </h1>

      <div className=" grid grid-cols-3 gap-2 md:gap-3 lg:gap-5">
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
    </div>
  );
};

export default TechSection;
