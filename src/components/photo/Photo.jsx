import React from "react";
import "./photo.css";
import Tyler from "../../assets/useProfile.jpg";

const Portfolio = () => {
  return (
    <div className="photoDiv">
      <div className="photo">
        <img className="Tyler" src={Tyler} alt="Tyler B. Gandy"></img>
      </div>
    </div>
  );
};

export default Portfolio;
