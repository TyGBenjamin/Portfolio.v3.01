import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { TiContacts } from "react-icons/ti";

const Nav = () => {
  return (
    <nav>
      <a href="#">
        <AiOutlineHome className="heyIcon" />
      </a>
      <a href="#about">
        <AiOutlineUser className="heyIcon" />
      </a>
      <a href="#experience">
        <BiBook className="heyIcon" />
      </a>
      <a href="#services">
        <RiServiceLine className="heyIcon" />
      </a>
      <a href="#contact">
        <TiContacts className="heyIcon" />
      </a>
    </nav>
  );
};

export default Nav;
