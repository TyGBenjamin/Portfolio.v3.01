import React from "react";
import CV from "../../assets/cover.pdf";

const Code = () => {
  return (
    <div className="cta">
      <a href={CV} downlaod className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Reach Out
      </a>
    </div>
  );
};

export default Code;