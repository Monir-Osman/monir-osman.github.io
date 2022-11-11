import React from "react";
import "./Link.css";
function Link({ pageLink, imgSrc, alt }) {
  return (
    <div className="__card">
      <a href={pageLink} target="blank">
        <img src={imgSrc} alt={alt} />
      </a>
    </div>
  );
}

export default Link;
