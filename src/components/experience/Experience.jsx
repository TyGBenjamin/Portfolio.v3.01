import React from "react";
import "./experience.css";
import { MdLibraryAddCheck } from "react-icons/md";

const Experience = () => {
  return (
    <section id="experience">
      <h5>My current skillset</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>FrontEnd Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <MdLibraryAddCheck className="experience__details-icon" />
              <h4>HTML</h4>
              <small className="textLight">Experienced</small>
            </article>
            <article className="experience__details">
              <MdLibraryAddCheck className="experience__details-icon" />
              <h4>CSS</h4>
              <small className="textLight">Moderate</small>
            </article>
            <article className="experience__details">
              <MdLibraryAddCheck className="experience__details-icon" />
              <h4>Javascript</h4>
              <small className="textLight">Moderate</small>
            </article>
            <article className="experience__details">
              <MdLibraryAddCheck className="experience__details-icon" />
              <h4>Bootstrap</h4>
              <small className="textLight">Moderate</small>
            </article>
            <article className="experience__details">
              <MdLibraryAddCheck className="experience__details-icon" />
              <h4>React</h4>
              <small className="textLight">Experienced</small>
            </article>
            <article className="experience__details">
              <MdLibraryAddCheck className="experience__details-icon" />
              <h4>HTML</h4>
              <small className="textLight">Experience</small>
            </article>
          </div>
        </div>

        {/* START OF BACKEND DEVELOPMENT */}

        <div className="experience__backend">
          <h3>BackEnd Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <MdLibraryAddCheck className="experience__details-icon" />
              <div>
                <h4>NodeJS</h4>
                <small className="textLight">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <MdLibraryAddCheck className="experience__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="textLight">Moderate</small>
              </div>
            </article>
            <article className="experience__details">
              <MdLibraryAddCheck className="experience__details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="textLight">Moderate</small>
              </div>
            </article>
            <article className="experience__details">
              <MdLibraryAddCheck className="experience__details-icon" />
              <div>
                <h4>Express-Routes </h4>
                <small className="textLight">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <MdLibraryAddCheck className="experience__details-icon" />
              <div>
                <h4>IndexDB</h4>
                <small className="textLight">Moderate</small>
              </div>
            </article>
            <article className="experience__details">
              <MdLibraryAddCheck className="experience__details-icon" />
              <div>
                <h4>Graphql</h4>
                <small className="textLight">Moderate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
