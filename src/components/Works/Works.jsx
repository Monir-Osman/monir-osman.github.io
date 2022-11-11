import React from "react";
import "./work.css";
import Link from "./Link/Link";

function Works() {
  return (
    <section>
      <div className="work__container">
        <div className="h1__work__con">
          <h1>Check out some of my works.</h1>
        </div>
        <div className="link__con">
          <Link
            pageLink={"https://netflix-clone-f8910.web.app/"}
            imgSrc={
              "https://i0.wp.com/www.pagalparrot.com/wp-content/uploads/2020/04/jnbk-gk-1.jpg?fit=910%2C512&ssl=1"
            }
            alt={"Netflix"}
          />
          <Link
            pageLink={"https://spotify-clone-b34a7.web.app/"}
            imgSrc={"https://www.scdn.co/i/_global/open-graph-default.png"}
            alt={"Spotify"}
          />
          <Link
            pageLink={"https://mostafa-noori.web.app/"}
            imgSrc={"/images/mustafa-page.jpg"}
            alt={"Mustafa-page"}
          />
          <Link
            pageLink={"https://slack-clone-66fbd.web.app/"}
            imgSrc={"https://i.ytimg.com/vi/ECl9xKInJ5o/maxresdefault.jpg"}
            alt={"Slack"}
          />
          <Link
            pageLink={"https://monir-osman.github.io/AliBaba-Restaurant/"}
            imgSrc={"/images/alibaba-restaurant.jpg"}
            alt={"Ali baba restuarant"}
          />
        </div>
      </div>
    </section>
  );
}

export default Works;
