import React from "react";
import "./Footer.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function Footer() {
  return (
    <footer>
      <i>
        <a href="#home">
          <KeyboardArrowUpIcon sx={{ fontSize: "50px" }} />
        </a>
      </i>
      <ul>
        <li>
          <a href="https://github.com/Monir-Osman">GitHub</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/ahmad-monir-osmani-03b148240/">LikedIn</a>
        </li>
        <li>
          <a href="https://twitter.com/Monir1Osmani?t=8-TueLQtTENRJjCKzFtLiA&s=09">Twitter</a>
        </li>
      </ul>
      <p>&copy;Monir Osmani</p>
    </footer>
  );
}

export default Footer;
