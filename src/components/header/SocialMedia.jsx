import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaFacebook } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="social__media">
      <a
        href="https://www.linkedin.com/in/tyler-gandy-a90a41225/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/TyGBenjamin" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.facebook.com/" target="_blank">
        <FaFacebook />
      </a>
    </div>
  );
};

export default SocialMedia;
