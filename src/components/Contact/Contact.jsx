import React from "react";
import "./Contact.css";
import Fade from "react-reveal/Fade";

function Contact() {
  return (
    <section id="contact">
      <div className="contact__con">
        <hr />
        <div class="contact__chi__con">
          <Fade bottom>
            <h1>I can help.</h1>
          </Fade>
          <Fade bottom>
            <p>
              If you have a project that you want to get start, need my help with something or just
              fancy saying hey, then get in touch.
            </p>
          </Fade>
          <Fade bottom>
            <a href="mailto:ahmadmonirosmani@gmail.com">Message Me</a>
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default Contact;
