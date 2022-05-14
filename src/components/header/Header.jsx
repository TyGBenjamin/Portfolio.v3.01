import React from "react";
import "./header.css";
import Code from "./Code";
import Tyler from "../../assets/useProfile.jpg";
import SocialMedia from "./SocialMedia";
import Photo from "../photo/Photo";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hey There, my name is</h5>
        <h1>Tyler B. Gandy</h1>
        <h5>and I write code</h5>
        <Code />
        <SocialMedia />
        {/* <div className="me">
          <img className="Tyler" src={Tyler} alt="Tyler B. Gandy"></img>
        </div> */}
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
