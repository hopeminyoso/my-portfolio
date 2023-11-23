import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/hope-shirley-30a31828b/"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillLinkedin />
      </a>
      <a
        href="https://github.com/hopeminyoso?tab=repositories"
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
