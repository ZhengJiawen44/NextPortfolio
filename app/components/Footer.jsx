import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className=" mt-[10rem] w-fit m-auto text-primaryMedium ">
      <div className="flex justify-between mb-10">
        <Link href="/">terms of use</Link>
        <Link href="/">privacy policy</Link>
      </div>
      <p className="w-fit m-auto mb-4">
        © 2024 Zheng Jiawen. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
