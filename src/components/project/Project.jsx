import React, { useState } from "react";
import "./Project.css";
import { Demos, Details } from "../index";
import { Tab, Tabs } from "react-bootstrap";
import projectDB from "../project/projects.json";
import monkey from "./images/typing_monkey.svg";
import { GiSpy } from "react-icons/gi";
import ColorDetector from "color-image-detector";

export default function Project(props) {
  const { portOpen, setPortOpen, projectData, setProjectData, setHoverWork } =
    props;
  const works = projectDB.projects;
  const [mouseOver, setMouseOver] = useState({ toggle: false, id: "" });

  function handleCards(techTags) {
    setHoverWork(techTags);
  }

  const handleTransition = (event) => {
    setProjectData('');
    setPortOpen(false);
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
        <Tab eventKey="fun-stuff" title="Things to do">
          <div className="projectpanels">
            <Demos />
          </div>
        </Tab>
      </Tabs>
      <div
        className={
          portOpen ? "shortDesc shortDesc-shrunk" : "shortDesc shortDesc-big"
        }
      >
        <div className="shortDesc-desc">{mouseOver.shortDesc}</div>
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
    setProjectData,
    projectData,
    section,
    mouseOver,
    setMouseOver,
  } = props;
  const [selectedType, setSelectedType] = useState();
  const [mousedOver, setMousedOver] = useState([false, 0]);

  function handleProjectClick(work, e, shadowBox) {
    setProjectData(work);
    setSelectedType(section);
    if (portOpen === false) {
      setPortOpen(true);
    }
  }
  async function loadColors(img) {
    console.log(img)
    let colordetector = new ColorDetector();
    let pallets = await colordetector.detectColorPalete(img);
 }

  return (
    <>
      <div
        className={
          portOpen ? "project-cards cards-closed" : "project-cards cards-open"
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
            work.logo === "" ? monkey : require(`./images/${work.logo}`);

          return (           
              <div
                className={
                  portOpen
                    ? "project-card card-closed"
                    : "project-card card-open"
                }
                key={key}
                onMouseEnter={(e) => {
                  handleMouseOver(e);
                }}
                onMouseLeave={(e) => {
                  handleMouseLeave(e);
                }}
                onClick={(e) => handleProjectClick(work)}
              >
                {section === "in-progress" ? (
                  portOpen ? (
                    <></>
                  ) : (
                    <div className="card-name">
                      <div>{work.name}</div>
                    </div>
                  )
                ) : (
                  <></>
                )}
                <>
                  <img
                    className="card-image"
                    id="img"
                    alt="Project Logo"
                    src={mapImg}
                    style={
                      mouseOver.toggle && work.id === mouseOver.id
                        ? { boxShadow: "0 0 1rem 0.7rem " }
                        : { boxShadow: "0 0 0rem 0rem " }
                    }
                    onLoad={() => loadColors(mapImg)}
                  />
                  {/* <canvas id="canvas"></canvas> */}
                  {/* <div className="card-overlay"></div> */}
                </>
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
        />
      </div>
    </>
  );
}
