import React from "react";
import styles from "@/components/ui/island.module.css";

const DashItems = ({ icon, label }) => {
  function scrollToSection(e) {
    e.preventDefault();
    window.location.replace(`/#${label.split(" ")[0]}`);
  }

  return (
    <button onClick={scrollToSection}>
      <div className={styles.dashItemContainer}>
        {icon}
        <p className={styles.labelContainer}>{label}</p>
      </div>
    </button>
  );
};

export default DashItems;
