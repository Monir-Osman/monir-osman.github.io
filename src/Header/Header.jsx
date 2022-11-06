import React, { useRef, useEffect } from "react";
import "./header.css";
import Typewriter from "typewriter-effect/dist/core";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Bounce from "react-reveal/Bounce";
import MobileNav from "./MobileNav/MobileNav";

function Header() {
  const myH1 = useRef();

  useEffect(() => {
    let typewriter = new Typewriter(myH1.current, {
      loop: false,
      autoStart: true,
      delay: 100,
      cursor: ">",
    });

    typewriter.pauseFor(200).typeString("<I'm Monir Osmani/").pauseFor(1000).start();
  }, []);
  return (
    <header>
      <div className="header__container">
        <div className="header__content__container">
          <div className="header__circle1">
            <div className="header__circle2">
              <div className="header__circle3">
                <div className="header__circle4">
                  <div className="header__circle5">
                    <div className="h1__con">
                      <img src="/images/profile.jpg" alt="profile" />
                      <p>Front-end developer</p>
                      <h1 ref={myH1}>I'm Monir Osmani</h1>
                      <Bounce left>
                        <ul>
                          <li>
                            <a href="https://github.com/Monir-Osman">
                              <GitHubIcon className="icon" />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.linkedin.com/in/ahmad-monir-osmani-03b148240/">
                              <LinkedInIcon className="icon" />
                            </a>
                          </li>
                          <li>
                            <a href="https://twitter.com/Monir1Osmani">
                              <TwitterIcon className="icon" />
                            </a>
                          </li>
                        </ul>
                      </Bounce>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
