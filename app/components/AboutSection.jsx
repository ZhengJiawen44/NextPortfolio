import React from "react";
import styles from "@/app/ui/about.module.css";
import Socials from "./Socials";
const About = () => {
  return (
    <div className="mb-21">
      <h1 className="mb-0.5 font-extrabold">Full Stack developer</h1>
      <h3 className="mt-5 text-[1.25rem] mb-0.5 font-semibold">Zheng Jiawen</h3>
      <Socials />
      <div className={styles.greenPopupGrid}>
        <div className={styles.greenPopup} />
        <div className={`${styles.greenPopup} ${styles.dark}`} />
      </div>

      <p className={styles.indented}>
        I’m a software developer fluent in design and programming. I have a
        knack for problem solving and clean design. When I am not online, I
        enjoy reading and creating assets in blender that I use for my other
        projects.
      </p>
    </div>
  );
};

export default About;
