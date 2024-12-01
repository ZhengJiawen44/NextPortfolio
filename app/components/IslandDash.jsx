"use client";
import TranslateDash from "@/app/components/TranslateDash";
import { TbHome } from "react-icons/tb";
import { TbBriefcase } from "react-icons/tb";
import { TbTool } from "react-icons/tb";
import { TbNotebook } from "react-icons/tb";
import { TbMail } from "react-icons/tb";
import DashItems from "./DashItems";
import styles from "@/app/ui/island.module.css";
import clsx from "clsx";
//import { forwardRef } from "react";

// const IslandDash = forwardRef(({ isVertical }, ref) => {
//const isItemVertical = isVertical ? "dash-items vertical" : "dash-items ";
const IslandDash = () => {
  return (
    <div>
      <div className={styles.dashboard}>
        <DashItems
          icon={<TbHome className={styles.dashItems} />}
          label="Home"
        />
        <DashItems
          icon={<TbBriefcase className={styles.dashItems} />}
          label="Project"
        />
        <DashItems
          icon={<TbTool className={styles.dashItems} />}
          label="Tech I use"
        />
        <DashItems
          icon={<TbNotebook className={styles.dashItems} />}
          label="Blogs"
        />
        <DashItems
          icon={<TbMail className={styles.dashItems} />}
          label="Contact"
        />
      </div>
      <TranslateDash />
    </div>
  );
};

export default IslandDash;
