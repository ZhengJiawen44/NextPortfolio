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
import { forwardRef } from "react";

const IslandDash = forwardRef(({ isVertical }, ref) => {
  const isItemVertical = clsx(
    styles.dashItems,
    isVertical && `${styles.vertical}  ${styles.show}`
  );
  return (
    <>
      <div
        ref={ref}
        className={clsx(
          styles.dashboard,
          isVertical && `${styles.vertical} ${styles.show}`
        )}
      >
        <DashItems icon={<TbHome className={isItemVertical} />} label="Home" />
        <DashItems
          icon={<TbBriefcase className={isItemVertical} />}
          label="Project"
        />
        <DashItems
          icon={<TbTool className={isItemVertical} />}
          label="Tech I use"
        />
        <DashItems
          icon={<TbNotebook className={isItemVertical} />}
          label="Blogs"
        />
        <DashItems
          icon={<TbMail className={isItemVertical} />}
          label="Contact"
        />
      </div>
      <TranslateDash />
    </>
  );
});

export default IslandDash;
