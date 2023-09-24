import React, { useState } from "react";
import "./Project.css";
import { Details } from "../index.js";
import { Tab, Tabs, TabContainer } from "react-bootstrap";
import { run as runHolder } from "holderjs/holder";
import { extractColors } from "extract-colors";
import projectDB from "../project/projects.json";
import monkey from "./images/typing_monkey.svg";

export default function Project(props) {
  const { section, portOpen, setPortOpen, projectData, setProjectData } = props;
  const works = projectDB.projects;
  // const [projectData, setProjectData] = useState();
  const [mouseOver, setMouseOver] = useState({ toggle: false, id: "" });

  const worksFiltered = works.filter(function (work) {
    return work.status === section;
  });

  const handleCards = () => {};

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
      onClick={()=>handleTransition()}
      fill>
        <Tab
          eventKey="complete"
          title="Things I made"
          className=""
        >
          <div className="projectpanels">
          {/* <div className="project"> */}
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
          {/* </div> */}
          </div>
        </Tab>
        <Tab
          eventKey="in-progress"
          title="Things I am making"
          // className="projectpanels"
        >
          <div className="projectpanels">
          {/* <div className="project"> */}
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
          {/* </div> */}
          </div>
        </Tab>
      </Tabs>
      </>
  )
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
    setThingsOpen
  } = props;
  // const [mouseOver, setMouseOver] = useState({ toggle: false, id: "" });
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
          function handleMouseOver(e) {
            handleCards(work.techTags);
            setMouseOver({
              toggle: true,
              id: work.id,
              name: work.name,
              shortDesc: work.shortDesc,
            });
          }
          function handleMouseLeave(e) {
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
          // const randomColor = Math.floor(Math.random()*16777215).toString(16);
          // console.log(randomColor);
          // const styleColor = { backgroundColor: "#" + randomColor};
          // console.log(styleColor);
          
          return (
            <div
              className={
                portOpen
                  ? // && projectData.id === work.id
                    "project-card card-closed"
                  : "project-card card-open"
              }
              key={key}
              onMouseEnter={handleMouseOver}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleProjectClick(work)}
>
  {section === "in-progress" ?
  <div className="card-name">{work.name}</div> : <></> }
    {mouseOver.toggle && work.id === mouseOver.id ? 
        <div className={portOpen ? "shortDesc shortDesc-shrunk" : "shortDesc shortDesc-big"}>
        <p className="shortDesc-desc">{mouseOver.shortDesc}</p></div>
        :
        <div className={portOpen ? "shortDesc shortDesc-shrunk" : "shortDesc shortDesc-big"}>&nbsp;</div>}
    
              <img className="card-image" alt="Project Logo" src={mapImg} />
            </div>
          );
        })}
      </div>
      {/* {mouseOver.toggle ? 
        <div className={portOpen ? "shortDesc shortDesc-shrunk" : "shortDesc shortDesc-big"}>
        <p className="shortDesc-desc">{mouseOver.shortDesc}</p></div>
        :
        <div className={portOpen ? "shortDesc shortDesc-shrunk" : "shortDesc shortDesc-big"}>&nbsp;</div>} */}
    </>
  );
}
