import React, { Component } from "react";
import "./SkillBar.css";

class SkillBar extends Component {
  render() {
    return (
    //   <div>
    //     <div class="container">
    //       <div class="python">75%</div>
    //     </div>
    //     <h3>Java</h3>
    //     <div class="container">
    //       <div class="java">70%</div>
    //     </div>
    //     <h3>C++</h3>
    //     <div class="container">
    //       <div class="cpp">60%</div>
    //     </div>
    //     <h3>C</h3>
    //     <div class="container">
    //       <div class="c">40%</div>
    //     </div>
    //   </div>
        <div className="skills-bar">
          <div className="bar">
            <div className="info">
              <span>HTML</span>
            </div>
            <div className="progress-line HTML">
              <span></span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <span>Python</span>
            </div>
            <div className="progress-line Python">
              <span></span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <span>Java</span>
            </div>
            <div className="progress-line Java">
              <span></span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <span>JS</span>
            </div>
            <div className="progress-line JS">
              <span></span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <span>C</span>
            </div>
            <div className="progress-line C">
              <span></span>
            </div>
          </div>
        </div>
    );
  }
}

export default SkillBar;
