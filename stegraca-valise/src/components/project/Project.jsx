import React, { useState, useEffect } from "react";
import "./Project.css";
import projectDB from "../project/projects.json";
import { Details } from "../index";

export default function Project(props) {
  // set the state as needed
  const {tags, setTags} = props;
  const [portOpen, setPortOpen] = useState(true);
  const [projectData, setProjectData] = useState();

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


  return (
    <>
 {/* <div className="project-pane"> */}
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
      
    {/* </div> */}
    </>
  );
}

function ProjectStack(props) {
  const { works, handleCards, handleProjectClick } =
    props;
  const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };
  return (
    <>
      <div style={{'grid-area': "project-head"}}><h3>Completed works</h3></div>
      <div className="project-pane">
        {works.map((work) => {
          return (
            <project
              className="project-card"
              onMouseEnter={() => handleCards(work.techTags)}
              onMouseLeave={() => handleCards([])}
              onClick={() => handleProjectClick(work)}
            >
              <img
                className="card-image"
                width="50%"
                src={require(`./images/${work.logo}`)}
                alt="First slide"
              />
              <h3>{work.name}</h3>
              <p>{work.shortDesc}</p>
            </project>
          );
        })}
        </div>
</>
  );
}
