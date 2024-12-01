import React from "react";
import { TbBrandBluesky } from "react-icons/tb";
import { TbBrandGithub } from "react-icons/tb";
import { TbMail } from "react-icons/tb";
import { TbBrandLinkedin } from "react-icons/tb";
const Socials = () => {
  return (
    <div className="mt-0.9 flex items-center gap-1 content-center">
      <a href="/" className="hover:primary-medium hover:scale-110">
        <TbBrandBluesky className="h-7 w-7" />
      </a>
      <a href="/" className="hover:primary-medium hover:scale-110">
        <TbBrandGithub className="h-7 w-7" />
      </a>
      <a href="/" className="hover:primary-medium hover:scale-110">
        <TbMail className="h-7 w-7" />
      </a>
      <a href="/" className="hover:primary-medium hover:scale-110">
        <TbBrandLinkedin className="h-7 w-7" />
      </a>
    </div>
  );
};

export default Socials;
