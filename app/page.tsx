"use client";
import styles from "@/app/ui/home.module.css";
import clsx from "clsx";
import Counter from "./components/Counter";
import { useState } from "react";
const Home = () => {
  return (
    <div>
      <Counter />
    </div>
  );
};

export default Home;
