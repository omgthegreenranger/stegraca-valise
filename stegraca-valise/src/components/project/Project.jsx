import React, { useState } from "react";
import "./Project.css";
import { Details } from "../index.js";
import { Tab, Nav } from "react-bootstrap";
import { run as runHolder } from "holderjs/holder";
import { extractColors } from "extract-colors";
import projectDB from "../project/projects.json";  

export default function Project(props) {
      const {
      portOpen,
      setPortOpen,
      section,
    } = props;
    const works = projectDB.projects
    const completers = works.filter(function (work) {
      return work.status === "complete";
    });
    const progressives = works.filter(function (work) {
      return work.status === "in-progress";

    
    });
      // Function to handle tags on card mouseover
  const handleCards = () => {
  };

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
        <div className="projectpanels">
          <ProjectDisplay
            works={completers}
            portOpen={portOpen}
            setPortOpen={setPortOpen}
            handleCards={handleCards}
            projectData={projectData}
            setProjectData={setProjectData}
            section="complete"
          />
        </div>
        <div className="projectpanels">
          <ProjectDisplay
            works={progressives}
            portOpen={portOpen}
            setPortOpen={setPortOpen}
            handleCards={handleCards}
            projectData={projectData}
            setProjectData={setProjectData}
            section="complete"
          />
        </div>
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
    } = props;
    const [mouseOver, setMouseOver] = useState({ toggle: false, id: "" });
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
        <div className={portOpen ? "project-cards open" : "project-cards closed"}>
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
                ? `holder.js/300x200?auto=yes&text=${work.name}&theme=social`
                : require(`./images/${work.logo}`);
  
            const extracted = () => {
              var mapImg =
                work.logo === ""
                  ? `holder.js/300x200?auto=yes&text=${work.name}&theme=social`
                  : require(`./images/${work.logo}`);
              extractColors(mapImg).then(console.log);
            };
  
            return (
              <div
                className={
                  portOpen && projectData.id === work.id
                    ? "project-card card-open card-selected"
                    : "project-card card-open"
                }
                key={key}
                onMouseEnter={handleMouseOver}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleProjectClick(work)}
              >
                <img className="card-image" alt="Project Logo" src={mapImg} />
              </div>
            );
          })}
        </div>
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
            mouseOver={mouseOver}
            setMouseOver={setMouseOver}
            works={works}
          />
        </div>
      </>
    );
  }