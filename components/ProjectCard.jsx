"use client";
import React, { useState } from "react";
import { TbLink } from "react-icons/tb";
import { TbBrandGithub } from "react-icons/tb";
import { TbNews } from "react-icons/tb";
import styles from "@/app/ui/project.module.css";
import clsx from "clsx";

const ProjectCard = ({ title, desc, content, tags }) => {
  const handleLinkClick = (e) => {
    e.stopPropagation(); // This prevents the click from reaching the parent div
  };
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      className={clsx(styles.projectCard, showDetails && styles.expand)}
      onClick={() => setShowDetails(!showDetails)}
    >
      <div
        className={clsx(styles.cardContainer, showDetails && styles.expand2)}
      >
        <div className={styles.image}></div>
        <div className="w-[100%]  hover:cursor-pointer ">
          <h2 className="font-[600] text-[2rem] md:text-[3rem] mb-2 ">
            {title}
          </h2>
          <p className="md:text-[1.5rem] text-primaryDark">{desc}</p>

          <div className="mt-5 flex flex-wrap gap-2 text-[1rem]">
            {showDetails
              ? tags.map(({ tag, link }) => (
                  <a
                    className={styles.tag}
                    key={tag}
                    href={link}
                    target="_blank"
                    onClick={handleLinkClick}
                  >
                    {tag === "Github" ? (
                      <TbBrandGithub className={styles.logo} />
                    ) : tag === "Website" ? (
                      <TbLink className={styles.logo} />
                    ) : (
                      <TbNews className={styles.logo} />
                    )}
                    {tag}
                  </a>
                ))
              : ""}
          </div>
        </div>
      </div>
      {showDetails ? <p className={styles.content}>{content}</p> : ""}
    </div>
  );
};

export default ProjectCard;
