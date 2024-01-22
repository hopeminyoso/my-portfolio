import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/IMG1.png"; 


const data = [
  {
    id: 1,
    image: IMG1,
    title: "Patient Registration App",
    github: "https://github.com/hopeminyoso/patient-registration",
    description:
    "This project features a web application and RESTful backend for streamlined patient management. It captures initial patient details and records visit information, with specialized sections based on BMI. The backend supports crucial endpoints, ensuring secure data handling. This project highlights my proficiency in creating an efficient solution for registering patients and managing healthcare data through RESTful APIs.",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, site, description }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img className="imgs" src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="description">{description}</div>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  GitHub
                </a>
                <a
                  href={site}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  View Site
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
