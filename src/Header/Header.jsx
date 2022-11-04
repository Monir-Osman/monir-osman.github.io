import React, { useRef, useEffect } from "react";
import "./header.css";
import Typewriter from "typewriter-effect/dist/core";

function Header() {
  const myH1 = useRef();

  useEffect(() => {
    let typewriter = new Typewriter(myH1.current, {
      loop: false,
      autoStart: true,
      delay: 100,
      cursor: ">",
    });

    typewriter.typeString("<I'm Monir Osmani/").pauseFor(1000).start();
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
                      <ul>
                        <li>About</li>
                        <li>Skills</li>
                        <li>Works</li>
                      </ul>
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
