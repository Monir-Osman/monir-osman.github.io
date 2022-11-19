import React from "react";
import "./work.css";
import Link from "./Link/Link";
import Fade from "react-reveal/Fade";

function Works() {
  return (
    <section id="works">
      <div className="work__container">
        <Fade bottom>
          <div className="h1__work__con">
            <h1>Check out some of my works.</h1>
          </div>
        </Fade>

        <div className="link__con">
          <Fade bottom>
            <Link
              pageLink={"https://netflix-clone-f8910.web.app/"}
              imgSrc={
                "https://i0.wp.com/www.pagalparrot.com/wp-content/uploads/2020/04/jnbk-gk-1.jpg?fit=910%2C512&ssl=1"
              }
              alt={"Netflix"}
              buildWith="Netflix-clone (ReactJS)"
            />
          </Fade>
          <Fade bottom>
            <Link
              pageLink={"https://spotify-clone-b34a7.web.app/"}
              imgSrc={"https://www.scdn.co/i/_global/open-graph-default.png"}
              alt={"Spotify"}
              buildWith="Spotity-clone (ReactJS)"
            />
          </Fade>
          <Fade bottom>
            <Link
              pageLink={"https://mostafa-noori.web.app/"}
              imgSrc={"/images/mustafa-page.jpg"}
              alt={"Mustafa-page"}
              buildWith="Personal Website (Html, Css, JS)"
            />
          </Fade>
          <Fade bottom>
            <Link
              pageLink={"https://slack-clone-66fbd.web.app/"}
              imgSrc={"https://i.ytimg.com/vi/ECl9xKInJ5o/maxresdefault.jpg"}
              alt={"Slack"}
              buildWith="Slack-clone (ReactJS)"
            />
          </Fade>

          <Fade bottom>
            <Link
              pageLink={"https://monir-osman.github.io/profile/"}
              imgSrc={"/images/portfolio.jpg"}
              alt={"Portfolio"}
              buildWith={"Personal Website (Html, Css, JS)"}
            />
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default Works;
