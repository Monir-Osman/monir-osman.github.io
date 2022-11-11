import React from "react";
import "./Link.css";
import LinkIcon from "@mui/icons-material/Link";
function Link({ pageLink, imgSrc, alt, buildWith }) {
  return (
    <div className="__card">
      <a href={pageLink} target="blank">
        <img src={imgSrc} alt={alt} />
        <div className="overlay">
          <h4>{buildWith}</h4>
          <LinkIcon />
        </div>
      </a>
    </div>
  );
}

export default Link;
