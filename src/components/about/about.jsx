import React from "react";
import "./about.css";
import ME from "../../assets/profile-image.jpg";
import { FaAward } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

function About(props) {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Shirley" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 Year Working Experience</small>
            </article>
            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Feedbacks</h5>
              <small>10+ Feedbacks</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>5 Completed Projects</small>
            </article>
          </div>

          <p>
          I am a driven Frontend Developer with a robust proficiency in HTML, CSS, JavaScript, and Typescript, coupled with extensive experience in frameworks such as React, Next.js, Angular, and Tailwind CSS. My track record demonstrates a talent for crafting responsive and intuitive web applications. I possess a fervor for continuous learning, consistently staying abreast of cutting-edge web technologies and emerging trends. My work ethic is characterized by strong organization, dedication, energy, and ambition, perpetually aiming for the utmost excellence in every undertaking
          </p>
          <a href="#contact" className="btn btn-primary">
            Lets Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
