import React, { useState } from "react";
import "./Project.css";
import { Details } from "../index";
import projectDB from "../project/projects.json";
import monkey from "./images/typing_monkey.svg";
import { FaRegCircleCheck } from "react-icons/fa6";
import { PiDotsThreeCircle } from "react-icons/pi";
import { motion } from "framer-motion";

export default function Project({ portOpen, setPortOpen, projectData, setProjectData, setHoverWork }) {

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
        <ProjectDisplay
          works={works}
          portOpen={portOpen}
          setPortOpen={setPortOpen}
          handleCards={handleCards}
          projectData={projectData}
          setProjectData={setProjectData}
          mouseOver={mouseOver}
          setMouseOver={setMouseOver}
        />
    </>
  );
}

function ProjectDisplay({ works,
  portOpen,
  setPortOpen,
  handleCards,
  setProjectData,
  projectData,
  section,
  mouseOver,
  setMouseOver }) {

  const [selectedType, setSelectedType] = useState();
  const [mousedOver, setMousedOver] = useState([false, 0]);

  const projectCardList = {
    cardVisible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
        ease: "backOut",
      },
    },
    cardHidden: {
      y: 500,
      opacity: 0,
      transition: {
        ease: "circIn",
      },
    },
  }

  const cardItem = {
    cardVisible: { opacity: 1, y: 0 },
    cardHidden: { opacity: 0, y: 300 },
  }

  function handleProjectClick(work, e, shadowBox) {
    setProjectData(work);
    setSelectedType(section);
    if (portOpen === false) {
      console.log("Yes, this is true")
      setPortOpen(true);
    }
  }

  return (
    <>
      <motion.div className={"project-cards " + (portOpen ? "project-cards cards-closed" : "project-cards cards-open")}
        initial="cardHidden"
        animate="cardVisible"
        variants={projectCardList}
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
            <motion.div
              className={"project-card " +
                (portOpen
                  ? "card-closed"
                  : "card-open")
              }
              key={key}
              onMouseEnter={(e) => {
                handleMouseOver(e);
              }}
              onMouseLeave={(e) => {
                handleMouseLeave(e);
              }}
              onClick={(e) => handleProjectClick(work)}
              variants={cardItem}
            >
              <ProjectCard mapImg={mapImg} mouseOver={mouseOver} work={work} portOpen={portOpen} />
            </motion.div>
          );
        })}

      </motion.div>

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


function ProjectCard({ mapImg, mouseOver, work, portOpen }) {

  let mousedOver = mouseOver.toggle && work.id === mouseOver.id ? true : false
  return (
    <div className="project-card-frame"
      style={
        mousedOver
          ? { boxShadow: "0 0 1rem 0.2rem" }
          : { boxShadow: "0 0 0rem 0rem " }
      }>
      <div className={work.status === "complete" ? "work-status complete" : "work-status in-progress"}>
        <span>{work.status === "complete" ? <FaRegCircleCheck />
          : <PiDotsThreeCircle />
        } {mousedOver ? work.status : ""}</span>
      </div>
      <img
        className="card-image"
        id="img"
        alt="Project Logo"
        src={mapImg}
      />
      <div className="work-info-block">
        <div>{work.name}</div>
        {portOpen ? '' : <div>{work.shortDesc}</div>}
        {/* <div>
          <span>{work.status === "complete" ? <FaRegCircleCheck />
            : <PiDotsThreeCircle />
          }</span>
          <span>{mousedOver ? work.status : ""}</span>
        </div> */}
      </div>
    </div>
  )
}