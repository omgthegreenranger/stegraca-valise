import React from "react";
import "./portfolio.css";
import { Linkblock, Projects } from "../index";

export default function Portfolio(props) {
  return (
    <div className="portfolio">
      <div className="heading">
        <h1>THIS IS MY PORTFOLIO</h1>
      </div>
      <div className="portfolio-linkblock">
        <Linkblock />
        <div className="title tech-title">These are some of the things I can do</div>
      </div>
      <div className="projectpanels complete">
        <div className="title complete-title">Here are some things I made</div>
        <div className="project">
        <Projects section="complete" />
        </div>
      </div>
      <div className="projectpanels progressive">
        <div className="project">
        <Projects section="in-progress" />
        </div>
        <div className="title progressive-title">Here are some things I am making</div>
      </div>
    </div>
  );
}
