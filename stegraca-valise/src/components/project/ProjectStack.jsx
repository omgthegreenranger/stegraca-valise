import React, { useState} from "react";
import "./Project.css";
import { Details } from "../index.js";
// import projectDB from "../project/projects.json";

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
  const [elemY, setElemY] = useState({offset: 0, height: 0});

  return (
    <>
      <div className="overview">
        <div className="project-cards">
          {works.map((work) => {
            function handleMouseOver(e) {
              console.log("Hello", e, e.target.offsetTop);
              setElemY({offset: e.target.offsetTop, height: e.target.offsetHeight});
              console.log(elemY.height);
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
