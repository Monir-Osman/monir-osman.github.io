import React, { useState } from "react";
import "./nav.css";

function Nav() {
  const [active, setActive] = useState(false);

  window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    if (window.scrollY > 240) {
      setActive(true);
    } else {
      setActive(false);
    }
  });
  return (
    <nav className={active ? "nav__background" : ""}>
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
    </nav>
  );
}

export default Nav;
