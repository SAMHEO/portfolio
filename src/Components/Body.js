import React, { Component } from "react";
import "./Body.css";

import Navbar from "./Nav/Nav";
import Home from "./Home/Home";
import About from "./About/About";
import Experience from "./Experience/Experience";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

class Body extends Component {
  render() {
    return (
      <div className="body">
        <Navbar />
        <Home />
        <About />
        <Experience />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Body;
