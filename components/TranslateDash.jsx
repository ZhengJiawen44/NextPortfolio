import React from "react";
import styles from "@/components/ui/island.module.css";
import { TbLanguageHiragana } from "react-icons/tb";
const TranslateDash = () => {
  return (
    <>
      <div className={`${styles.translate} ${styles.dashboard}`}>
        <TbLanguageHiragana className={styles.dashItems} />
      </div>
    </>
  );
};
export default TranslateDash;
