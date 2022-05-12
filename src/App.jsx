import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimony from "./components/testimony/Testimony";
import Contact from "./components/contact/Contact";
import Photo from "./components/photo/Photo";
import Footer from "./components/footer/Footer";
import "./index.css";
import Cursor from "./components/cursor/Cursor";
let cursorOne = document.querySelector(".cursorOne");
let cursorTwo = document.querySelector(".cursorTwo");

let links = document.querySelectorAll("a");

function go() {
  window.onmousemove = (e) => {
    cursorOne.style.top = e.pageY + "px";
    cursorOne.style.left = e.pageX + "px";
    cursorTwo.style.top = e.pageY + "px";
    cursorTwo.style.left = e.pageX + "px";
  };

  function changeCursor() {
    links.forEach((links) => {
      links.onmouseenter = () => {
        cursorOne.classList.add("active");
        cursorTwo.classList.add("active");
      };
      links.onmouseleave = () => {
        cursorOne.classList.remove("active");
        cursorTwo.classList.remove("active");
      };
    });
  }

  changeCursor();
}

const App = () => {
  go();

  return (
    <>
      {/* <Cursor /> */}
      <Header />
      <Photo />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimony />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
