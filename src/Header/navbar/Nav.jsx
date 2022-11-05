import React from "react";
import "./nav.css";
import LightSpeed from "react-reveal/LightSpeed";
import Bounce from "react-reveal/Bounce";

function Nav() {
  return (
    <nav>
      <Bounce left>
        <div className="div__li__container">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#works">Works</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </Bounce>
    </nav>
  );
}

export default Nav;
