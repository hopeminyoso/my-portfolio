import React from "react";
import "./services.css";
import { BsCheckLg } from "react-icons/bs";

const data = [
  {
    title: "Responsive Web Design",
    content:
      "Designing websites that are optimized for viewing on different devices including desktops, laptops, tablets, and smartphones.",
  },
  {
    title: "Performance Optimization",
    content:
      "Optimizing websites or web applications for faster load times and better performance.",
  },
  {
    title: "Website Maintenance",
    content:
      "Maintaining and updating websites or web applications to ensure that they remain secure, up-to-date, and functional.",
  },
  {
    title: "Cross-Browser Compatibility Testing",
    content:
      "Testing websites or web applications on different browsers to ensure that they work well on all of them.",
  },
];

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {data.map(({ title, content }, index) => (
          <div key={index} className="service">
            <div className="service__head">
              <h3>{title}</h3>
            </div>
            <ul className="service__list">
              <li>
                <BsCheckLg className="service__list-icon" />
                <p>{content}</p>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;


