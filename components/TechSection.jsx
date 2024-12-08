import React from "react";
import { techData } from "@/lib/techData";
import { techWord } from "@/lib/techWord";

import TechCard from "@/components/TechCard";

const TechSection = () => {
  return (
    <div>
      <h1
        id="Tech"
        className="mb-[4rem] text-[2.5rem] md:text-[3.5rem] static font-extrabold "
      >
        Tech I use
      </h1>

      <div className="relative h-[5rem] overflow-hidden">
        <div className="flex relative">
          {techWord.map(({ logo }, index) => {
            return (
              <TechCard
                key={logo}
                logo={logo}
                title={logo}
                delay={(15000 / 6) * index - 1}
                reverse
              />
            );
          })}
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(20, 20, 20) 0%, rgba(20, 20, 20, 0) 10%, rgba(20, 20, 20, 0) 80%, rgba(20, 20, 20, 1) 100%)",
          }}
        ></div>
      </div>

      <div className="relative h-[5rem] overflow-hidden">
        <div className="flex relative">
          {techData.map(({ logo, title, description }, index) => {
            return (
              <TechCard
                key={title}
                logo={logo}
                title={title}
                description={description}
                delay={(7000 / 6) * index - 1}
              />
            );
          })}
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(20, 20, 20) 0%, rgba(20, 20, 20, 0) 10%, rgba(20, 20, 20, 0) 80%, rgba(20, 20, 20, 1) 100%)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default TechSection;
