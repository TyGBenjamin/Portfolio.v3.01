import React from "react";
import "./about.css";
import Ty from "../../assets/twoTime.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { MdOutlineLibraryBooks } from "react-icons/md";

const About = () => {
  return (
    <section id="about">
      <h5> Get</h5>
      <h2> About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__mePhoto">
            <img src={Ty} alt="about tyler"></img>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"></FaAward>
              <h5>Experience</h5>
              <small> 1 year</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon"></FiUsers>
              <h5>Clients</h5>
              <small>3 </small>
            </article>
            <article className="about__card">
              <MdOutlineLibraryBooks className="about__icon"></MdOutlineLibraryBooks>
              <h5>Projects</h5>
              <small> 25+</small>
            </article>
          </div>
          <p>
            Hello my name is Tyler B Gandy and I write code. The main
            programming language I use is javascript. I have spent a moderate
            amount of developing and writing code for both front and back-end
            sides of applications. In addition, the use of different ypes of
            databases and the this.props and cons to each respective database is
            something I effectively implented throughout my studies and early
            career thus far.
          </p>
          <a href="#contact" className="btn btn-primary">
            Reach Out
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
