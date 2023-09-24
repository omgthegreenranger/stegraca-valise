import React, { useState } from "react";
import {
  animated,
  useSpring,
  useTransition,
} from "@react-spring/web";
import "./portfolio.css";
import { Linkblock, Projects, Details } from "../index";

export default function Portfolio(props) {
  const { thingsOpen, setThingsOpen, scrollYProgress } = props;
  const [portOpen, setPortOpen] = useState(false);
  const [projectData, setProjectData] = useState();
  const [opacityValue, api] = useSpring(
    ()=> ({
    opacity: 0}));


  if (portOpen) api.start({opacity: 1,});
  // if (!portOpen) api.start({opacity: 0,});

  const portfolioExpand = () => {
    setThingsOpen((current) => !current);

    api.start({
      opacity: 1,
    });
  }
  return (
    <div className="portfolio">
      <div className="heading" 
      >
        <h1>THIS IS MY PORTFOLIO OF THINGS</h1>
      </div>
      <animated.div
        className="portfolio-body"
      >
        <div className="portfolio-block portfolio-linkblock" style={portOpen ? {width: '45%'} : {width: '85%'}}>
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
            setThingsOpen={setThingsOpen}
            thingsOpen={thingsOpen}
          />
        </div>
      </animated.div>
      <animated.div className="project-details" style={opacityValue}>
        <Details
          projectData={projectData}
          setProjectData={setProjectData}
          portOpen={portOpen}
          setPortOpen={setPortOpen}
        />
      </animated.div>
    </div>
  );
}
