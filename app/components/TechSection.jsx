import React from "react";
import { techData } from "@/app/utils/techData";
import TechCard from "@/app/components/TechCard";
const TechSection = () => {
  return (
    <>
      <h1 id="Tech" className="mb-20 mt-40 static font-extrabold">
        Tech I use
      </h1>

      <div className=" grid grid-cols-3 gap-3 mb-[20rem]">
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
