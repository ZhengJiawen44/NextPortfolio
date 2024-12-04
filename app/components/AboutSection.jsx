import React from "react";
import styles from "@/app/ui/about.module.css";
import Socials from "./Socials";
const About = () => {
  return (
    <div id="Home">
      <h1 className="mb-0.5 text-[2.5rem] md:text-[4rem] font-extrabold">
        Full Stack developer
      </h1>
      <h3 className="mt-5 text-[1.25rem] mb-0.5 md:font-semibold">
        Zheng Jiawen
      </h3>
      <Socials />
      <div className="grid grid-cols-1 xlg:grid-cols-2 ">
        <p className="mt-[4rem] ml-[1rem] text-[1.5rem] justify-self-start ">
          I’m a software developer fluent in design and programming. I have a
          knack for problem solving and clean design. When I am not online, I
          enjoy reading and creating assets in blender that I use for my other
          projects.
        </p>

        <div className="hidden grid-rows-2 justify-self-end xlg:grid ">
          <div className={styles.greenPopup} />
          <div className={`${styles.greenPopup} ${styles.dark}`} />
        </div>
      </div>
    </div>
  );
};

export default About;
