import React from "react";
import "./header.css";
import Code from "./Code";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I am</h5>
        <h1>Tyler B. Gandy</h1>
        <h5 className="text-light">Fullstck Javascript Developer</h5>
        <Code />
      </div>
    </header>
  );
};

export default Header;
