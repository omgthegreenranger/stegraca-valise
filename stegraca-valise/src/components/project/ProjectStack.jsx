import React, { useState, useEffect } from "react";
import "./Project.css";
import { Details } from "../index.js";
import { Tab, Nav } from "react-bootstrap";
import { run as runHolder } from "holderjs/holder";
import { extractColors } from 'extract-colors'
// import projectDB from "../project/projects.json";
import { animated, useSpring, useSprings, useTrail, easings } from '@react-spring/web';

export function ProjectStack(props) {
  const {
    works,
    handleCards,
    projectData,
    setProjectData,
    portOpen,
    setPortOpen,
    handleTab,
    section
  } = props;

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
            <Tab.Pane eventKey="completed" title="Completed" className="semper">
              <ProjectDisplay
                works={completers}
                portOpen={portOpen}
                setPortOpen={setPortOpen}
                handleCards={handleCards}
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
    projectData,
    setProjectData,
    section,
  } = props;
  const [mouseOver, setMouseOver] = useState({ toggle: false, id: "" });


  function handleProjectClick(work) {
    setProjectData(work);
    if (portOpen === false) {
      setPortOpen(true);
    }
    let detailCatch = document.getElementsByClassName('details-view')
    console.log(detailCatch);

    console.log("PORT", portOpen);
  }
  
  return (
    <>
      <div className={portOpen ? "project-cards open" : "project-cards closed"}>
      {/* <div className="project-cards closed"> */}
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
          const mapImg = work.logo === ""
          ? `holder.js/300x200?auto=yes&text=${work.name}&theme=social`
          : require(`./images/${work.logo}`);
          
          const extracted = () => {
            var mapImg= work.logo === ""
              ? `holder.js/300x200?auto=yes&text=${work.name}&theme=social`
              : require(`./images/${work.logo}`)
            extractColors(mapImg)
            .then(console.log)}


          return (
            <div
                className={portOpen && projectData.id === work.id ? "project-card card-open card-selected" : "project-card card-open"}
                key={key}
                onMouseEnter={handleMouseOver}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleProjectClick(work)}
              >
                <img
                  className="card-image"
                  alt="Project Logo"
                  src={mapImg}
                />
              </div>
          );
        })}
      </div>
      <animated.div className={portOpen ? "project-details hd-on" : "project-details hd-off"}>
        <Details
          projectData={projectData}
          setProjectData={setProjectData}
          portOpen={portOpen}
          setPortOpen={setPortOpen}
          mouseOver={mouseOver}
          setMouseOver={setMouseOver}
          works={works}
          section={section}
        />
      </animated.div>
    </>
  );
}
