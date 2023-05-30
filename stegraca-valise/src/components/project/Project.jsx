import React, { useState, useEffect } from "react";
import "./Project.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Row, Col, Container, Card } from "react-bootstrap";
import {
  DiCss3,
  DiHeroku,
  DiHtml5,
  DiJsBadge,
  DiBootstrap,
  DiMongodb,
  DiMysql,
  DiGithub,
  DiReact,
} from "react-icons/di";
import {
  RxCaretLeft,
  RxCaretRight,
  RxExternalLink,
  RxInfoCircled,
} from "react-icons/rx";
import { IconContext } from "react-icons";
import projectDB from "../project/projects.json";
import { Details } from "../index";

export default function Project(props) {
  // set the state as needed
  const [portOpen, setPortOpen] = useState(true);
  const [projectData, setProjectData] = useState();
  const [tags, setTags] = useState([]);
  const [index, setIndex] = useState(0);

  // define variables
  const works = projectDB.projects;

  // Create functions

  // Function to handle Project Card click
  function handleProjectClick(work) {
    setProjectData(work);
    if (portOpen === true) {
      setPortOpen(false);
    }
  }

  // Function to handle tags on card mouseover
  const handleCards = (tagList) => {
    setTags(tagList);
    console.log(tagList);
  };

  // Function to set the port-open
  async function handlePortOpen() {
    await setPortOpen((portOpen) => !portOpen);
    let body = document.getElementsByClassName("project-card");
    console.log(body.style);
  }

  return (
    <div className="project-pane">
      <TechLine tagList={tags} />
      {portOpen ? (
        <ProjectStack
          works={works}
          portOpen={portOpen}
          setPortOpen={setPortOpen}
          handleCards={handleCards}
          handleProjectClick={handleProjectClick}
        />
      ) : (
        <Details
          projectData={projectData}
          setProjectData={setProjectData}
          portOpen={portOpen}
          setPortOpen={setPortOpen}
        />
      )}
    </div>
  );
}

function TechLine(props) {
  let techList = [
    { tech: "MongoDB", icon: <DiMongodb /> },
    { tech: "MySQL", icon: <DiMysql /> },
    { tech: "CSS", icon: <DiCss3 /> },
    { tech: "HTML", icon: <DiHtml5 /> },
    { tech: "JavaScript", icon: <DiJsBadge /> },
    { tech: "Bootstrap", icon: <DiBootstrap /> },
    { tech: "React", icon: <DiReact /> },
  ];

  console.log(techList);
  return (
    <div className="tech-block">
      {techList.map((tech) => {
        let techClass = "";
        for (let i = 0; props.tagList.length > i; i++) {
          if (props.tagList[i] === tech.tech) {
            techClass = "tech-used";
          }
        }
        console.log(techClass);
        return <span className={`tech-icons ${techClass}`}>{tech.icon}</span>;
      })}
    </div>
  );
}

function ProjectStack(props) {
  const { works, portOpen, setPortOpen, handleCards, handleProjectClick } =
    props;
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
<Carousel
  arrows
  centerMode={true}
  className="carousel"
  containerClass="carousel-container"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite={false}
  itemClass="project-card"
  keyBoardControl
  minimumTouchDrag={80}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 0
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 0
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 0
    }
  }}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={1}
  swipeable
>
        {works.map((work) => {
          return (
            <div
              onMouseEnter={() => handleCards(work.techTags)}
              onMouseLeave={() => handleCards([])}
              onClick={() => handleProjectClick(work)}
            >
              <img
                className="card-image"
                width="100%"
                src={require(`./images/${work.logo}`)}
                alt="First slide"
              />
              <h3>{work.name}</h3>
              <p>{work.shortDesc}</p>
            </div>
          );
        })}
      </Carousel>
  );
}
