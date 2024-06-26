import React, { useState } from "react";
import {
  useSpring,
} from "@react-spring/web";
import "./portfolio.css";
import { Techblock, Projects} from "../index";

export default function Portfolio({ thingsOpen, setThingsOpen, isLoaded, setIsLoaded, setPortOpen, portOpen }) {
  const [projectData, setProjectData] = useState();
  const [hoverWork, setHoverWork] = useState([]);
  const [opacityValue, api] = useSpring(
    () => ({
      opacity: 0
    }));


  if (portOpen) api.start({ opacity: 1, });
  // if (!portOpen) api.start({opacity: 0,});

  // const portfolioExpand = () => {
  //   setThingsOpen((current) => !current);

  //   api.start({
  //     opacity: 1,
  //   });
  // }
  return (
    <div className="portfolio">
      <Techblock isLoaded={isLoaded} setIsLoaded={setIsLoaded} hoverWork={hoverWork} />
      <Projects
        portOpen={portOpen}
        setPortOpen={setPortOpen}
        projectData={projectData}
        setProjectData={setProjectData}
        setThingsOpen={setThingsOpen}
        thingsOpen={thingsOpen}
        hoverWork={hoverWork}
        setHoverWork={setHoverWork}
      />
    </div>
  );
}
