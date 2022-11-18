import React from "react";
import "./about.css";
import Fade from "react-reveal/Fade";

function About() {
  return (
    <section id="about" className="about">
      <Fade bottom>
        <div className="text__container row">
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
          <div className="contact__details">
            <h2>Contact details</h2>
            <p>Monir Osmani</p>
            <p>Italy/Rome</p>
            <p>+39 3791491965</p>
            <p>ahmadmonirosmani@gmail.com</p>
          </div>
        </div>
      </Fade>
    </section>
  );
}

export default About;
