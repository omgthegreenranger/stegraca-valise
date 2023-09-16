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
  return (
    <div className="portfolio">
      <div className="portfolio-block portfolio-bio">
        <Bounce cascade duration="45" className="title tech-title">
          Things about myself
        </Bounce>
        <Bounce>
          <div></div>
          {/* <Bio /> */}
        </Bounce>
      </div>
      <div className="portfolio-block portfolio-linkblock">
        <Bounce>
          <Linkblock />
        </Bounce>
        <Roll cascade duration="45" className="title tech-title">
          Things I can do
        </Roll>
      </div>
      <div className="projectpanels complete">
        <div className="title complete-title">
          <Slide cascade direction="left">
            <div>Things</div>
            <div>I</div>
            <div>made</div>
          </Slide>
        </div>
        <Bounce
          fraction={0.5}
          className="portfolio-block project"
        >
          <Projects section="complete" />
        </Bounce>
      </div>
      <div className="projectpanels progressive">
        <Bounce
          fraction={0.5}
          className="portfolio-block project"
        >
          <Projects section="in-progress" />
        </Bounce>
        <div className="title progressive-title">
          <Slide cascade direction="right">
            <div>Things</div>
            <div>I am</div>
            <div> making</div>
          </Slide>
        </div>
      </div>
    </div>
  );
}
