import React, { Component } from "react";
import "./About.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Accordion from "../Accordion/Accordion";
import SkillBar from "../SkillBar/SkillBar";
import Skills from "../Skills/Skills";

class About extends Component {
  render() {
    const pl = [
      "Java",
      "JS/HTML/CSS",
      "ReactJS",
      "Ruby",
      "Python",
      "JSAV",
      "PHP",
      "jQuery",
      "C",
    ];
    const software = [
      "Git/Github",
      "AWS",
      "MySQL",
      "JUnit",
      "Docker",
      "Virtual Box",
    ];
    const os = ["Windows", "Mac", "Linux", "iOS"];

    const plList = pl.map((data) => {
      return <li>{data}</li>;
    });
    const softwareList = software.map((data) => {
      return <li>{data}</li>;
    });
    const osList = os.map((data) => {
      return <li>{data}</li>;
    });
    return (
      <Container id="about" className="about">
        {/* <SkillBar/> */}
        <Skills/>
        {/* <Row>
          <div className="profile">
            <Row className="education">
              <h3>Education</h3>
            </Row>
            <Row>
              <div>
                <div className="education-list">
                  Virginia Tech, Blacksburg, VA
                </div>
                <div className="education-list">
                  Master of Science, Computer Science
                </div>
                <div className="education-list">
                  Bachelor of Science, Computer Science
                </div>
              </div>
            </Row>
          </div>
          <div className="skills-container">
            <Row>
              <h3>Skills</h3>
            </Row>
            <div>
              <Accordion
                title="Programming Language"
                content="Java, JS/HTML/CSS, ReactJS, Ruby, Python, JSAV, PHP, jQuery, C"
              />
              <Accordion
                title="Software"
                content="Git/Github, AWS, MySQL, JUnit, Docker, Virtual Box"
              />
              <Accordion
                title="Operating Systems"
                content="Windows, Mac, Linux, iOS"
              />
            </div>
          </div>
        </Row> */}
      </Container>
    );
  }
}

export default About;
