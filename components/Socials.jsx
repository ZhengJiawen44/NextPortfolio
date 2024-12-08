import React from "react";
import { TbBrandBluesky } from "react-icons/tb";
import { TbBrandGithub } from "react-icons/tb";
import { TbMail } from "react-icons/tb";
import { TbBrandLinkedin } from "react-icons/tb";
import styles from "@/components/ui/socials.module.css";
const Socials = () => {
  return (
    <div className="mt-2 flex items-center gap-4 content-center">
      <a href="/" className={styles.socialItem}>
        <TbBrandBluesky className="logo" />
      </a>
      <a href="/" className={styles.socialItem}>
        <TbBrandGithub className="logo" />
      </a>
      <a href="/" className={styles.socialItem}>
        <TbMail className="logo" />
      </a>
      <a href="/" className={styles.socialItem}>
        <TbBrandLinkedin className="logo" />
      </a>
    </div>
  );
};

export default Socials;
