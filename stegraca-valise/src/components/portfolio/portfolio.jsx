import React from "react";
import {
  Bounce,
  Flip,
  Hinge,
  JackInTheBox,
  Rotate,
  Zoom,
  Fade,
  Slide,
  Roll,
} from "react-awesome-reveal";
import "./portfolio.css";
import { Linkblock, Projects, Bio } from "../index";

export default function Portfolio(props) {
  const {portOpen, setPortOpen} = props;
  return (
    <div className="portfolio">
      <div className="portfolio-block portfolio-bio">
        <div cascade duration="30" className="title bio-title">
          Things about myself
        </div>
        <div>
          <div>
            <Bio />
          </div>
        </div>
      </div>
      <div className="portfolio-block portfolio-linkblock">
        {/* <div cascade duration="45" className="title tech-title">
          Things I can do
        </div> */}
        <div>
          <Linkblock />
        </div>
      </div>
      <div className="portfolio-block portfolio-complete">
        <div className="projectpanels">
          <div fraction={0.5} className="project">
            <Projects section="complete" />
          </div>
          <div className="title complete-title">
            <Slide direction={"left"}>Things I made</Slide>
          </div>
        </div>
      </div>
      <div className="portfolio-block portfolio-progressive">
        <div className="projectpanels">
          <div fraction={0.5} className="project">
            <Projects section="in-progress" />
          </div>
          <div className="title progressive-title">
            <Slide direction={"left"}>Things I am making</Slide>
          </div>
        </div>
      </div>
    </div>
  );
}
