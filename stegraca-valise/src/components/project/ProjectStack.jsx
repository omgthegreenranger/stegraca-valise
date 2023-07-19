import React, { useState, useEffect } from "react";
import "./Project.css";
import { Details } from "../index.js";
import projectDB from "../project/projects.json";
import { animated, useSpring } from "@react-spring/web";
import { run as runHolder } from 'holderjs/holder';

export function ProjectStack(props) {
  const { works, handleCards, handleProjectClick, projectData, setProjectData, portOpen, setPortOpen } = props;
  const [mouseOver, setMouseOver] = useState({ toggle: "", id: "" });

  return (
    <>
      <div className={portOpen ? ("overview big-col") : ("overview small-col")}>
        {/* {portOpen ? ( */}
      <div className={portOpen ? ("project-cards big-row") : ("project-cards small-row")}>
        {works.map((work) => {
          let workLogo;
          if (work.logo === "") (
              workLogo = `holder.js/300x200?auto=yes&text=${work.name}&theme=social`
            )
            else (
              workLogo = require(`../project/images/${work.logo}`)
            )
            console.log(workLogo);
          return (
            <div
              className="project-card"
              onMouseEnter={() => {
                handleCards(work.techTags);
                setMouseOver({ toggle: true, id: work.id });
              }}
              onMouseLeave={() => {
                handleCards([]);
                setMouseOver({ toggle: false, id: "" });
              }}
              onClick={() => handleProjectClick(work)}
            >
               <img className="card-image" alt="First slide" src={workLogo} />
                                   {/* <div className="card-text">{work.name}</div> */}
              {mouseOver.toggle === true && mouseOver.id === work.id ? (
                <>
                  {portOpen ? (             <>
                  {/* <div className="test-back"></div> */}
   {/* <div className="card-text"> */}
                    {/* <div className="card-text">{work.name}</div>
                    <div className="card-text">{work.shortDesc}</div> */}
                    {/* </div> */}
                    </>
                  ) : ( "" )}
                  </>
              ) : (
                ''
              )}
            </div>
          );
        })}
        </div>
      <Details
        projectData={projectData}
        setProjectData={setProjectData}
        portOpen={portOpen}
        setPortOpen={setPortOpen}
      /> 
      </div>
    </>
  );
}
