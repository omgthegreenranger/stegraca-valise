import React, { useState, useEffect } from "react";
import "./Project.css";
import { Details } from "../index.js";
import projectDB from "../project/projects.json";
import { animated, useSpring } from "@react-spring/web";

export function ProjectStack(props) {
  const { works, handleCards, handleProjectClick, projectData, setProjectData, portOpen, setPortOpen } = props;
  const [mouseOver, setMouseOver] = useState({ toggle: "", id: "" });

  return (
    <>
      <div className="overview">
      <div className="project-cards">
        {works.map((work) => {
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
              <img
                className="card-image"
                width="100%"
                src={
                  work.logo == ""
                    ? `holder.js/300x200?auto=yes&text=${work.name}&theme=social`
                    : require(`./images/${work.logo}`)
                }
                alt="First slide"
              />
              {mouseOver.toggle === true && mouseOver.id === work.id ? (
                  <div className="card-text"><h3>{work.name}</h3>
                  <p>{work.shortDesc}</p></div>
              ) : (
                console.log("No this is not!", mouseOver)
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
      {/* </Row> */}
      </div>
    </>
  );
}
