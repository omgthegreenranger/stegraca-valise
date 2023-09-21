import React, { Component, createRef, useState } from "react";
import {
  animated,
  useSpring,
  useTrail,
  useChain,
  Controller,
  useScroll,
  useSpringRef,
  useSpringValue,
} from "@react-spring/web";
import "./portfolio.css";
import { wrapGrid } from "animate-css-grid";
import { Linkblock, Projects, Bio, Details } from "../index";

export default function Portfolio(props) {
  const { thingsOpen, setThingsOpen, scrollYProgress } = props;
  // const springref = useSpringRef({})
  const [portOpen, setPortOpen] = useState(false);
  const [projectData, setProjectData] = useState();
  const opacityValue = useSpringValue(0);

  function portfolioExpand() {
    setThingsOpen((current) => !current);

    opacityValue.start(1);
  }
  // const springs = useSpring({
  // ref: springref,
  //  opacity: 1
  // })

  return (
    <div className="portfolio">
      {/* {thingsOpen ? `portfolio open` : `portfolio closed`}> */}
      <div className="heading" onClick={() => portfolioExpand()}>
        {/* <div className="heading"> */}
        <h1>THIS IS MY PORTFOLIO OF THINGS</h1>
      </div>
      {/* <PortfolioShow /> */}
      <animated.div
        className="portfolio-body"
        // thingsOpen ? `portfolio-body port-on` : `portfolio-body port-off`
        // }
      >
        <div className="portfolio-block portfolio-linkblock">
          <animated.div className="title" style={{ opacityValue }}>
            Things I can do
          </animated.div>
          <div className="project linkblock">
            <Linkblock />
          </div>
        </div>
        <div direction={"right"} className="portfolio-block portfolio-complete">
          <Projects
            portOpen={portOpen}
            setPortOpen={setPortOpen}
            projectData={projectData}
            setProjectData={setProjectData}
          />
        </div>
      </animated.div>
      <div
        className={
          portOpen ? "project-details hd-on" : "project-details hd-off"
        }
      >
        <Details
          projectData={projectData}
          setProjectData={setProjectData}
          portOpen={portOpen}
          setPortOpen={setPortOpen}
        />
      </div>
    </div>
  );
}
