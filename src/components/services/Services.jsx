import React from "react";
import "./services.css";
import { BiCheckboxSquare } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I can do </h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheckboxSquare className="service__lict-icon" />
              <p> BootStrap </p>
            </li>
            <li>
              <BiCheckboxSquare className="service__lict-icon" />
              <p> WebPack and other node modules</p>
            </li>
            <li>
              <BiCheckboxSquare className="service__lict-icon" />
              <p> CSS and JSX effects and design</p>
            </li>
            <li>
              <BiCheckboxSquare className="service__lict-icon" />
              <p>Website Design and Management</p>
            </li>
            <li>
              <BiCheckboxSquare className="service__lict-icon" />
              <p>React</p>
            </li>
          </ul>
        </article>
        {/* END OF UI  */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheckboxSquare className="service__lict-icon" />
              <p>
                {" "}
                Ability to assist with creating front-end and/or back-end
                applications to assist with data entry and updating data
                respectively.
              </p>
            </li>
            <li>
              <BiCheckboxSquare className="service__lict-icon" />
              <p> SQL Database management</p>
            </li>
            <li>
              <BiCheckboxSquare className="service__lict-icon" />
              <p>Express Routes for sending and receicing data</p>
            </li>
            <li>
              <BiCheckboxSquare className="service__lict-icon" />
              <p>Integrating and implementation of API applications</p>
            </li>
            <li>
              <BiCheckboxSquare className="service__lict-icon" />
              <p>Use of encryption to protect sensitive information</p>
            </li>
          </ul>
        </article>
        {/* END OF WEBDEV  */}
        <article className="service">
          <div className="service__head">
            <h3>Creative Content</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheckboxSquare className="service__lict-icon" />
              <p> Use of animation desing to create 2-D video game</p>
            </li>
            <li>
              <BiCheckboxSquare className="service__lict-icon" />
              <p>
                User-friendly and interactive interfaces which allow for more
                user engagement
              </p>
            </li>
            {/* <li>
              <BiCheckboxSquare className="service__lict-icon" />
              <p> I will add to this space as my knowledge enhances</p>
            </li> */}
          </ul>
        </article>
        {/* END OF CC  */}
      </div>
    </section>
  );
};

export default Services;
