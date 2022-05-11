import React from "react";
import "./header.css";
import Code from "./Code";
import Tyler from "../../assets/tylerMain.jpg";
import SocialMedia from "./SocialMedia";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hey There, my name is</h5>
        <h1>Tyler B. Gandy</h1>
        <h5 className="text-light">I am a Fullstck Javascript Developer</h5>
        <Code />
        <SocialMedia />
        <div className="me">
          <img src={Tyler} alt="Tyler B. Gandy"></img>
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
