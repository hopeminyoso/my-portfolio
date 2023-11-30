import React from "react";
import "./portfolio.css";


const data = [
  {
    id: 1,
    image: IMG1,
    title: 
    github: 
    site: 
    description:
     
  },
  {
    id: 2,
    image: IMG2,
    title: 
    github: 
    site:
    description:
      
  },
  {
    id: 3,
    image: IMG3,
    title: 
    github: 
    site: 
    description:
      
  },
  {
    id: 4,
    image: IMG4,
    title: 
    github: 
    site: 
    description:
      
  },
  {
    id: 5,
    image: IMG5,
    title: 
    github: 
    site: 
    description:
    
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
              <div className="porfolio__item-cta">
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