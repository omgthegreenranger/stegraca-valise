import React, { useState } from "react";
import "./Project.css";
import { Tab, Tabs } from "react-bootstrap";
import { extractColors } from "extract-colors";
import projectDB from "../project/projects.json";
import monkey from "./images/typing_monkey.svg";
import {Palette, usePalette } from "react-palette";

export default function Project(props) {
  const {
    section,
    portOpen,
    setPortOpen,
    projectData,
    setProjectData,
    hoverWork,
    setHoverWork,
  } = props;
  const works = projectDB.projects;
  // const [projectData, setProjectData] = useState();
  const [mouseOver, setMouseOver] = useState({ toggle: false, id: "" });

  const worksFiltered = works.filter(function (work) {
    return work.status === section;
  });

  function handleCards(techTags) {
    setHoverWork(techTags);
  }

  const handleTransition = (event) => {
    console.log("This is a transition function!", event);
  };

  // generate arrays for project categories
  function handleWorks(type) {
    works.filter(function (work) {
      return work.status === type;
    });
  }

  const handleTab = () => {
    setProjectData("");
    if (portOpen === true) {
      setPortOpen(false);
    }
  };
  return (
    <>
      <Tabs
        defaultActiveKey="complete"
        className="tab-block navs"
        onClick={() => handleTransition()}
        fill
      >
        <Tab eventKey="complete" title="Things I made" className="">
          <div className="projectpanels">
            <ProjectDisplay
              works={works.filter(function (work) {
                return work.status === "complete";
              })}
              portOpen={portOpen}
              setPortOpen={setPortOpen}
              handleCards={handleCards}
              projectData={projectData}
              setProjectData={setProjectData}
              mouseOver={mouseOver}
              setMouseOver={setMouseOver}
              section="complete"
            />
          </div>
        </Tab>
        <Tab eventKey="in-progress" title="Things I am making">
          <div className="projectpanels">
            <ProjectDisplay
              works={works.filter(function (work) {
                return work.status === "in-progress";
              })}
              portOpen={portOpen}
              setPortOpen={setPortOpen}
              handleCards={handleCards}
              projectData={projectData}
              setProjectData={setProjectData}
              mouseOver={mouseOver}
              setMouseOver={setMouseOver}
              section="in-progress"
            />
          </div>
        </Tab>
      </Tabs>
      {/* <div> */}
      {/* {mouseOver.toggle ?  */}
      <div
        className={
          portOpen ? "shortDesc shortDesc-shrunk" : "shortDesc shortDesc-big"
        }
      >
        <div className="shortDesc-desc">{mouseOver.shortDesc}</div>
      </div>
      {/* : */}
      {/* <div className={portOpen ? "shortDesc shortDesc-shrunk" : "shortDesc shortDesc-big"}>&nbsp;</div>} */}
      {/* </div> */}
    </>
  );
}

function ProjectDisplay(props) {
  const {
    works,
    portOpen,
    setPortOpen,
    handleCards,
    projectData,
    setProjectData,
    section,
    mouseOver,
    setMouseOver,
    thingsOpen,
    setThingsOpen,
  } = props;
  const [selectedType, setSelectedType] = useState();
  
  function handleProjectClick(work) {
    setProjectData(work);
    setSelectedType(section);
    console.log(section);
    if (portOpen === false) {
      setPortOpen(true);
    }
    let detailCatch = document.getElementsByClassName("details-view");
    console.log(detailCatch);
    console.log("PORT", portOpen);
  }

  return (
    <>
      <div
        className={
          portOpen
            ? // && projectData.id === work.id
              "project-cards cards-closed"
            : "project-cards cards-open"
        }
      >
        {works.map((work, key) => {
          function handleMouseOver(e, shadowBox) {
 console.log(e.target.children[0])
            e.target.children[0].style.boxShadow = shadowBox;
                        handleCards(work.techTags);
            setMouseOver({
              toggle: true,
              id: work.id,
              name: work.name,
              shortDesc: work.shortDesc,
            });
          }
          function handleMouseLeave(e) {
            e.target.children[0].style.boxShadow = "";
            handleCards([]);
            setMouseOver({ toggle: false });
          }
          const mapImg =
            work.logo === ""
              ? // ? `holder.js/300x200?auto=yes&text=${work.name}&theme=social`
                monkey
              : require(`./images/${work.logo}`);

          const extracted = () => {
            var mapImg =
              work.logo === ""
                ? // ? `holder.js/300x200?auto=yes&text=${work.name}&theme=social`
                  { monkey }
                : require(`./images/${work.logo}`);
            extractColors(mapImg).then(console.log);
          };
          console.log(mapImg);

          return (
            <>
              <Palette src={mapImg}>
                {({ data, loading, error }) => {
                  const shadowBox = "0 0 1rem 0.7rem " + data.vibrant;
                  return (
              <div
                className={
                  portOpen
                    ? // && projectData.id === work.id
                      "project-card card-closed"
                    : "project-card card-open"
                }
                key={key}
                onMouseEnter={(e) => {handleMouseOver(e, shadowBox)}}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleProjectClick(work)}
              >
                {section === "in-progress" ? (
                  <div className="card-name">
                    <div>{work.name}</div>
                  </div>
                ) : (
                  <></>
                )}
                <img className="card-image" alt="Project Logo" src={mapImg} />
                <div className="card-overlay"></div>
              </div>
                          )}}</Palette>
            </>
          );
        })}
      </div>
    </>
  );
}
