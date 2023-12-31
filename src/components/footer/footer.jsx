import React from "react";
import "./footer.css";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Hope Shirley
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/hope-shirley-30a31828b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Hope Shirley. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
