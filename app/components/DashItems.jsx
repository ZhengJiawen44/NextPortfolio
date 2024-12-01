import React from "react";
import styles from "@/app/ui/island.module.css";

const DashItems = ({ icon, label }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        window.location.replace(`/#${label.split(" ")[0]}`);
      }}
    >
      <div className={styles.dashItemContainer}>
        {icon}
        <p className={styles.labelContainer}>{label}</p>
      </div>
    </button>
  );
};

export default DashItems;
