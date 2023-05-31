import React, { useState, useEffect } from "react";
import "./Project.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import projectDB from "../project/projects.json";
import { Details } from "../index";

export default function Project(props) {
  // set the state as needed
  const {tags, setTags} = props;
  const [portOpen, setPortOpen] = useState(true);
  const [projectData, setProjectData] = useState();
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
