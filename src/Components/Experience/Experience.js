import React, { Component } from "react";
import "./Experience.css";
import Card from "../Card/Card";

class Experience extends Component {
  render() {
    const exp = [
      {
        title: "Graduate Teaching Assistant",
        place: "Virginia Tech",
        start: "Aug 2020",
        end: "Present",
        description: `· Taught 600 CS2 level students, covering Data Structures and Algorithm and problem-solving skills \r
          · Collaborated with 20 TAs on a weekly basis to develop a compact core Data Structures class \r
          · Skills and Tools: Java, Unit Testing, Data Structures and Algorithms, Eclipse, Teaching, Communication`,
      },
      {
        title: "Graduate Research Assistant",
        place: "Virginia Tech",
        start: "Aug 2020",
        end: "Present",
        description: `· Continued work from undergraduate research to enhance support for OpenDSA opensource
          · Designed and Developed various ways to support data structures visualizations and exercises
          · Collaborated with PhD students and professors to improve engagement from students with OpenDSA eTextbook
          · Skills and Tools: JavaScript, HTML/CSS, JSON, Ruby, Rails, Docker, Linux, GitHub, Teamwork, Communication`,
      },
      {
        title: "Undergraduate Research Assistant",
        place: "Virginia Tech",
        start: "Dec 2018",
        end: "July 2020",
        description: `· Designed and developed web application with React for start-up company to publish its first website
          · Participated in all phases of the development lifecycle, beginning with the gathering of requirements, and project specifications
          · Managed project tasks and timelines and communicate project status and deliverables with team
          · Skills and Tools: ReactJS, Redux, Ajax, HTML/CSS, JSON, GitHub, Teamwork, Communication`,
      },
      {
        title: "Machine Learning Competition",
        place: "Algorima",
        start: "July 2019",
        end: "Aug 2019",
        description: `· Participated in Machine Learning competition hosted by the government of South Korea with 4 teammates
        · Took 2nd place in Movie Review Score Prediction among 70 teams and 3rd place in Intent Classification
        · Implemented different models including RNN with Bi-LSTM model and basic CNN model
        · Skills and Tools: Pytorch, TensorFlow, Keras, Kaggle, GitHub, Adaptability, Teamwork, Communication`,
      },
      {
        title: "Software Developer Internship",
        place: "Algorima",
        start: "June 2019",
        end: "Aug 2019",
        description: `· Designed and developed web application with React for start-up company to publish its first website
          · Participated in all phases of the development lifecycle, beginning with the gathering of requirements, and project specifications
          · Managed project tasks and timelines and communicate project status and deliverables with team
          · Skills and Tools: ReactJS, Redux, Ajax, HTML/CSS, JSON, GitHub, Teamwork, Communication`,
      },
      
    ];

    const expList = exp.map((data) => {
      return (
        <Card
          title={data.title}
          place={data.place}
          start={data.start}
          end={data.end}
          desc={data.description}
        />
      );
    });

    return (
      <div id="experience" className="experience">
        {expList}
      </div>
    );
  }
}

export default Experience;
