"use client";
import styles from "@/app/ui/home.module.css";
import clsx from "clsx";
import { useState } from "react";
const Home = () => {
  const [color, setColor] = useState(true);
  return (
    <>
      <div
        onClick={() => setColor(!color)}
        className={clsx(color ? "bg-slate-400" : "bg-black", styles.shape)}
      ></div>
    </>
  );
};

export default Home;
