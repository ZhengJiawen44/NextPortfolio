import React from "react";
import { TbBrandBluesky } from "react-icons/tb";
import { TbBrandGithub } from "react-icons/tb";
import { TbMail } from "react-icons/tb";
import { TbBrandLinkedin } from "react-icons/tb";

const Socials = () => {
  return (
    <div className="mt-2 flex items-center gap-4 content-center">
      <a
        href="/"
        className="text-item-foreground hover:text-hoverColor hover:scale-125"
      >
        <TbBrandBluesky className="logo" />
      </a>
      <a
        href="/"
        className="text-item-foreground hover:text-hoverColor hover:scale-125"
      >
        <TbBrandGithub className="logo" />
      </a>
      <a
        href="/"
        className="text-item-foreground hover:text-hoverColor hover:scale-125"
      >
        <TbMail className="logo" />
      </a>
      <a
        href="/"
        className="text-item-foreground hover:text-hoverColor hover:scale-125"
      >
        <TbBrandLinkedin className="logo" />
      </a>
    </div>
  );
};

export default Socials;
