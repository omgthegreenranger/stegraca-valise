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
import { wrapGrid } from "animate-css-grid";
import { Linkblock, Projects, Bio } from "../index";

export default function Portfolio(props) {
  const { portOpen, setPortOpen, thingsOpen, setThingsOpen } = props;

  function portfolioExpand() {
    setThingsOpen((current) => !current);
    // var scrollListener = document.getElementsByClassName("splash-container")[0];
    // if (thingsOpen === false) {
    //   scrollListener.style.width = "15vw";
    //   scrollListener.style.justifySelf = "left";
    // } else if (thingsOpen === true) {
    //   scrollListener.style.width = "50vw";
    //   scrollListener.style.justifySelf = "center";
    // }
  //   const mainGrid = document.getElementsByClassName("main-box")[0];
  //   const animateGrid = () => {
  //     if (thingsOpen === false) {
  //       requestAnimationFrame(() => {
  //         console.log("true");
  //         mainGrid.classList.remove("main-welcome");
  //         mainGrid.classList.add("main-expanded");
  //       });
  //     } else if (thingsOpen === true) {
  //       console.log("False!");
  //       requestAnimationFrame(() => {
  //         mainGrid.classList.remove("main-expanded");
  //         mainGrid.classList.add("main-welcome");
  //       });
  //     } else {
  //       console.log("Nothing!");
  //       mainGrid.classList.add("main-welcome");
  //     }
  //   };
  //   console.log(mainGrid);
  //   wrapGrid(mainGrid, { duration: 400 });
  //   animateGrid();
  }

  var thingStyle = "display: none;";
  


  console.log(thingStyle)
  
  return (
    <div className="portfolio">
      <div
        className="heading"
        onClick={()=> portfolioExpand()}
      >
        <h1>THIS IS MY PORTFOLIO OF THINGS</h1>
      </div>
      <div className={thingsOpen ? `portfolio-body port-on` : `portfolio-body port-off`}>
        <div direction={"left"} className="portfolio-block portfolio-bio">
          <div className="title bio-title">
            Things about myself
          </div>
          <div>
            <div>
              <Bio />
            </div>
          </div>
        </div>
        {/* <div direction={"up"} className="portfolio-block portfolio-linkblock"> */}
          {/* <div cascade duration="45" className="title tech-title">
          Things I can do
        </div> */}
          {/* <div>
            <Linkblock />
          </div>
        </div> */}
        <div direction={"right"} className="portfolio-block portfolio-complete">
          <div className="projectpanels">
            <div className="project">
              <Projects section="complete" />
            </div>
            <div className="title complete-title">
              <Slide direction={"left"}>Things I made</Slide>
            </div>
          </div>
        </div>
        <div direction={"right"} className="portfolio-block portfolio-progressive">
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
    </div>
  );
}
