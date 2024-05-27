import React, { useState } from "react";
import "./Project.css";
import { Demos, Details } from "../index";
import { Tab, Tabs } from "react-bootstrap";
import projectDB from "../project/projects.json";
import monkey from "./images/typing_monkey.svg";
import { GiSpy } from "react-icons/gi";
import { FaRegCircleCheck } from "react-icons/fa6";
import { PiDotsThreeCircle } from "react-icons/pi";
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
      <div className="projectpanels">
        <ProjectDisplay
          works={works}
          portOpen={portOpen}
          setPortOpen={setPortOpen}
          handleCards={handleCards}
          projectData={projectData}
          setProjectData={setProjectData}
          mouseOver={mouseOver}
          setMouseOver={setMouseOver}
        // section="in-progress"
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
              <ProjectCard mapImg={mapImg} mouseOver={mouseOver} work={work} loadColors={loadColors} />
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


function ProjectCard({ mapImg, mouseOver, work }) {

  let mousedOver = mouseOver.toggle && work.id === mouseOver.id ? true : false
  return (
    <div className="project-card-frame"
      style={
        mousedOver
          ? { boxShadow: "0 0 1rem 0.2rem" }
          : { boxShadow: "0 0 0rem 0rem " }
      }>
      <img
        className="card-image"
        id="img"
        alt="Project Logo"
        src={mapImg}
      />
      <div className="work-info-block">
        <div>{work.name}</div>
        <div>{work.shortDesc}</div>
        <div>
          <span>{work.status === "complete" ? <FaRegCircleCheck />
            : <PiDotsThreeCircle />
          }</span>
          <span>{mousedOver ? work.status : ""}</span>
        </div>
      </div>
    </div>
  )
}