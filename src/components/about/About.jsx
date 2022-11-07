import React from "react";
import "./about.css";
import Fade from "react-reveal/Fade";

function About() {
  return (
    <section id="about" className="about">
      <Fade left>
        <div className="img__container">
          <img src="/images/image2.jpg" alt="monir img" />
        </div>
      </Fade>

      <Fade right>
        <div className="text__container">
          <h1>About me</h1>
          <div className="my__text">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages.
            </p>
          </div>
        </div>
      </Fade>
    </section>
  );
}

export default About;
