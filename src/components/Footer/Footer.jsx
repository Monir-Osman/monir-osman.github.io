import React from "react";
import "./Footer.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fade from "react-reveal/Fade";

function Footer() {
  return (
    <footer>
      {/* <Fade bottom> */}
      <i>
        <a href="#home">
          <KeyboardArrowUpIcon sx={{ fontSize: "50px" }} />
        </a>
      </i>
      {/* </Fade> */}

      <Fade bottom>
        <ul>
          <li>
            <a href="https://github.com/Monir-Osman" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ahmad-monir-osmani-03b148240/"
              target="_blank"
              rel="noreferrer"
            >
              LikedIn
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/Monir1Osmani?t=8-TueLQtTENRJjCKzFtLiA&s=09"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          </li>
        </ul>
      </Fade>

      <Fade bottom>
        <div className="copyright">
          <p>Made by</p>
          <span>Monir</span>
        </div>
      </Fade>
    </footer>
  );
}

export default Footer;
