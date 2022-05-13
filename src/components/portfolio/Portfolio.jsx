import React from "react";
import "./portfolio.css";
import Blue from "../../assets/BlueSky1.jpg";
import ProjectT from "../../assets/projectThreeOne.jpg";
import Jate from "../../assets/jateTextEdit.jpg";

const data = [
  {
    id: 1,
    image: Blue,
    title: " Socail Media Macth Maker",
    github: "https://github.com/Lischus/Blue-Sky-Farmers",
    beta: "https://radiant-caverns-76977.herokuapp.com/",
  },
  {
    id: 2,
    image: ProjectT,
    title: " Sports Betting App",
    github: "https://github.com/TyGBenjamin/Chartreuse_Gamblers",
    beta: "https://chartreuse-gamblers-app.herokuapp.com/",
  },
  {
    id: 3,
    image: Jate,
    title: " Not Another NotePad",
    github: "https://github.com/TyGBenjamin/Not_Another_NotePad",
    beta: "https://not-another-notepad.herokuapp.com/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5> Recent Projects and Repositories</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, beta }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title}></img>
              </div>
              <h3> {title}</h3>
              <div className="portfolio__item-cta">
                <a className="btn" href={github} target="blank">
                  GITHUB
                </a>
                <a className="btn btn-primary" href={beta} target="blank">
                  DEPLOYED
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
