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
  } = props;
  const [mouseOver, setMouseOver] = useState({ toggle: "", id: "" });

  return (
    <>
      <div className={portOpen ? "overview big-col" : "overview small-col"}>
        <div
          className={
            portOpen ? "project-cards big-row" : "project-cards small-row"
          }
        >
          {works.map((work) => {
            return(
              <div
                className="project-card"
                onMouseEnter={() => {
                  handleCards(work.techTags);
                  setMouseOver({ toggle: true, id: work.id, name: work.name, shortDesc: work.shortDesc });
                }}
                onMouseLeave={() => {
                  handleCards([]);
                }}
                onClick={() => handleProjectClick(work)}
              >
                <div className="card-text">{work.name}</div>
                {mouseOver.toggle === true && mouseOver.id === work.id ? (
                  <>{portOpen ? <></> : ""}</>
                ) : (
                  ""
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
          mouseOver={mouseOver}
          setMouseOver={setMouseOver}
        />
      </div>
    </>
  );
}
