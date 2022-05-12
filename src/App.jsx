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

const App = () => {
  return (
    <>
      <Cursor />
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
