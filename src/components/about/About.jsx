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
              Hi there, my name is Monir! I am a front-end developer, I have been coding for the
              past couple of months. I started learning coding by myself and then I also took a
              bootcamp by{" "}
              <a
                href="https://powercoders.org/"
                target="_blank"
                rel="noreferrer"
                title="powercoders.org"
              >
                POWERCODERS
              </a>{" "}
              which that took me to another level of experty. Along the journey I realised that the
              best way to develop my coding skills is by building the REAL WORLD projects,that took
              me to start cloning my favorite apps. The best thing in programming is problem solving
              and the world of creativity and how to apply these skills in a range of cool builds
              and this is why I'm fall in love with coding.
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
