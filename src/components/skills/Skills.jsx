import React from "react";
import "./Skill.css";
import Fade from "react-reveal/Fade";

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <Fade left>
          <div className="anime__container">
            <img src="/images/Coding-bro2.svg" alt="anime" />
          </div>
        </Fade>
        <Fade right>
          <div className="parent__table">
            <div id="myText2" className="skills__table block">
              <h1>Skills</h1>
              <p>My programming language proficiency</p>
              <span>Html</span>
              <div className="html language"></div>

              <span>Css</span>
              <div className="css language"></div>

              <span>Javascript</span>
              <div className="javascript language"></div>

              <span>React</span>
              <div className="react language"></div>

              <span>Git&GitHub</span>
              <div className="git language"></div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default Skills;
