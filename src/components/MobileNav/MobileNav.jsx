import React, { useState } from "react";
import "./MobileNav.css";
import MenuIcon from "@mui/icons-material/Menu";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";

function MobileNav() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="mob__container">
      <Bounce left>
        <MenuIcon
          onClick={() => setIsClicked((current) => !current)}
          className="menu__icon"
          sx={{ fontSize: 40 }}
        />
      </Bounce>
      {isClicked && (
        <Fade right>
          <div onClick={() => setIsClicked(false)} className="mob__content">
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
        </Fade>
      )}
    </div>
  );
}

export default MobileNav;
