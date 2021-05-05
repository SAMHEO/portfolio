import React, { Component } from "react";
import Headroom from "react-headroom";
import "./Nav.css";
import { Link } from "react-scroll";

class Nav extends Component {
  render() {
    return (
      <Headroom>
        <header>
          <div className="nav">
            <ul>
              <li>
                <Link activeClass="active" to="home" spy={true} smooth={true}>
                  <div className="btn">
                    <button>Home</button>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="about" spy={true} smooth={true}>
                  <div className="btn">
                    <button>About</button>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="experience" spy={true} smooth={true}>
                  <div className="btn">
                    <button>Experience</button>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="contact" spy={true} smooth={true}>
                  <div className="btn">
                    <button>Contact</button>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </header>
      </Headroom>
    );
  }
}

export default Nav;
