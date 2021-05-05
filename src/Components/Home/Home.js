import React, { Component } from "react";
import "./Home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import Typical from "react-typical";
import Trail from "../Trail/Trail"; 
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
    };
  }
  render() {
    return (
      <div id="home">
        <Row className="home align-items-center">
          <Col className="info">
          
            <Trail
              open={this.state.open}
              onClick={() => this.setState({ open: !this.state.open })}
            >
              <span>Samnyeong Heo</span>
            </Trail>
            {/* <h1 className="fullname">Samnyeong Heo</h1> */}
            <p className="role">
              I'm a{" "}
              <Typical
                loop={Infinity}
                wrapper="b"
                steps={[
                  "Developer 💻",
                  1000,
                  "Research Assistant 📖",
                  1000,
                  "Teaching Assistant 👨‍🏫",
                  1000,
                  "Open Sourcer 💡",
                  1000,
                ]}
              />
            </p>
            
            <Col className="social">
              <ul>
                <li>
                  <a href="https://github.com/SAMHEO">
                    <FontAwesomeIcon icon={faGithub} size="3x" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/samnyeong">
                    <FontAwesomeIcon icon={faLinkedin} size="3x" />
                  </a>
                </li>
              </ul>
            </Col>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
