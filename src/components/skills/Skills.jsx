import React from "react";
import "./Skill.css";
import Fade from "react-reveal/Fade";
import { useRef } from "react";
import { useEffect } from "react";

function Skills() {
  const el = useRef();

  useEffect(() => {
    const height = el.current.clientHeight;
    const width = el.current.clientWidth;
    console.log(el.current);

    function handleMove(e) {
      const xVal = e.layerX;
      const yVal = e.layerY;

      const yRotation = 20 * ((xVal - width / 2) / width);

      const xRotation = -20 * ((yVal - height / 2) / height);

      const string =
        "perspective(500px) scale(1) rotateX(" + xRotation + "deg) rotateY(" + yRotation + "deg)";

      el.current.style.transform = string;
    }

    el.current.addEventListener("mousemove", handleMove);

    el.current.addEventListener("mouseout", function () {
      el.current.style.transform = "perspective(500px) scale(1) rotateX(0) rotateY(0)";
    });

    el.current.addEventListener("mousedown", function () {
      el.current.style.transform = "perspective(500px) scale(0.9) rotateX(0) rotateY(0)";
    });

    el.current.addEventListener("mouseup", function () {
      el.current.style.transform = "perspective(500px) scale(1.1) rotateX(0) rotateY(0)";
    });
  }, []);
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
            <div ref={el} className="skills__table block">
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

              <div className="cover"></div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default Skills;
