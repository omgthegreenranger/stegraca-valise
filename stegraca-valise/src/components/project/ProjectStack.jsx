import React, { useState, useEffect } from "react";
import "./Project.css";
import { Details } from "../index.js";
// import projectDB from "../project/projects.json";
import { animated, useSpring } from "@react-spring/web";
import { run as runHolder } from "holderjs/holder";

export function ProjectStack(props) {
  const {
    works,
    handleCards,
    handleProjectClick,
    projectData,
    setProjectData,
    portOpen,
    setPortOpen,
    section,
  } = props;
  const [mouseOver, setMouseOver] = useState({ toggle: false, id: "" });
  const [elemY, setElemY] = useState();

  return (
    <>
      <div className="overview">
        <div className="project-cards">
          {works.map((work) => {
            function handleMouseOver(e) {
              console.log("Hello", e, e.target.offsetTop);
              setElemY(e.target.offsetTop);
              console.log(elemY);
              handleCards(work.techTags);
              setMouseOver({
                toggle: true,
                id: work.id,
                name: work.name,
                shortDesc: work.shortDesc,
              });
            }
            function handleMouseLeave(e) {
              console.log(work);
              console.log("Goodbye", e, mouseOver);
              handleCards([]);
              setMouseOver({ toggle: false });
            }
            return (
              <div className="project-card">
                <div
                  className="project-text"
                  // onMouseMove={() => {
                  //     handleCards(work.techTags);
                  //     ;}}
                  onMouseEnter={handleMouseOver}
                  // () => {
                  //   handleCards(work.techTags);
                  //   setMouseOver({ toggle: true, id: work.id, name: work.name, shortDesc: work.shortDesc });
                  // }}
                  onMouseLeave={handleMouseLeave}
                  // {() => {
                  //   handleCards([]);
                  // }}
                  onClick={() => handleProjectClick(work)}
                >
                  {/* <div className="card-text"> */}
                  {work.name}
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <Details
            projectData={projectData}
            setProjectData={setProjectData}
            portOpen={portOpen}
            setPortOpen={setPortOpen}
            mouseOver={mouseOver}
            setMouseOver={setMouseOver}
            works={works}
            section={section}
            elemY={elemY}
          />
        </div>
      </div>
    </>
  );
}
