import React from "react";
import "./header.css";
import CTA from "./cta";
import pg from "../../assets/profile-image.jpg";
import HeaderSocials from "./headerSocials";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";

const Header = (props) => {
  return (
    <header>
      <div className="container header__container">
        <h3>Hello i'm</h3>
        <h1>Hope Shirley</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="mobile__cta">
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
        <div className="pg">
          <img src={pg} alt="Shirley" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;

