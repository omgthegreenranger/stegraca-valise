import React, { useState } from "react";
import "./Project.css";
import { Details } from "../index.js";
import { Tab, Nav } from "react-bootstrap";
import { run as runHolder } from "holderjs/holder";
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
  const [elemY, setElemY] = useState({ offset: 0, height: 0 });

  const handleTab = () => {
    setProjectData("");
    if (portOpen === true) {
      setPortOpen(false);
    }
  };
  const completers = works.filter(function (work) {
    return work.status === "complete";
  });
  const progressives = works.filter(function (work) {
    return work.status === "in-progress";
  });
  return (
    <>
      <div className="overview">
        <Tab.Container
          className="project-status"
          defaultActiveKey="completed"
          onSelect={handleTab}
        >
          <Nav variant="tabs" className="navs navs-status">
            <Nav.Item>
              <Nav.Link eventKey="completed">Completed</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="in-progress">In-Progress</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content className="project-display">
            <Tab.Pane eventKey="completed" title="Completed">
              <ProjectDisplay
                works={completers}
                portOpen={portOpen}
                setPortOpen={setPortOpen}
                handleCards={handleCards}
                handleProjectClick={handleProjectClick}
                projectData={projectData}
                setProjectData={setProjectData}
                section="portfolio"
              />
            </Tab.Pane>
            <Tab.Pane eventKey="in-progress" title="In-Progress">
              <ProjectDisplay
                works={progressives}
                portOpen={portOpen}
                setPortOpen={setPortOpen}
                handleCards={handleCards}
                handleProjectClick={handleProjectClick}
                projectData={projectData}
                setProjectData={setProjectData}
                section="portfolio"
              />
            </Tab.Pane>
            <Tab.Pane
              eventKey="other-stuff"
              title="Other stuff"
              className="overview"
            />
          </Tab.Content>
        </Tab.Container>
        {/* </div> */}
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
    handleProjectClick,
    projectData,
    setProjectData,
    section,
  } = props;
  const [mouseOver, setMouseOver] = useState({ toggle: false, id: "" });
  const [elemY, setElemY] = useState({ offset: 0, height: 0 });

  return (
    <>
      <div className="project-cards">
        {works.map((work) => {
          function handleMouseOver(e) {
            console.log("Hello", e, e.target.offsetTop);
            setElemY({
              offset: e.target.offsetTop,
              height: e.target.offsetHeight,
            });
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
            <div
                className="project-card"
                onMouseEnter={handleMouseOver}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleProjectClick(work)}
              >
                <img
                  className="card-image-details"
                  alt="Project Logo"
                  src={
                    work.logo == ""
                      ? `holder.js/300x200?auto=yes&text=${work.name}&theme=social`
                      : require(`./images/${work.logo}`)
                  }
                />
                <div>{work.name}</div>
              </div>
          );
        })}
      </div>
      <div className="project-details">
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
    </>
  );
}
