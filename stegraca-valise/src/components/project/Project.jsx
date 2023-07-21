import React, { useState, useEffect } from "react";
import "./Project.css";
import projectDB from "../project/projects.json";
import { Details, Bio, Linkblock } from "../index";
import { ProjectStack } from "./index";
import { Tab, Nav } from "react-bootstrap";
import {animated, useSpring } from '@react-spring/web';


export default function Project(props) {
  // set the state as needed
  const { tags, setTags } = props;
  const [ completed, setCompleted ] = useState([]);
  const [ inProgress, setInProgress ] = useState([]);
  const [portOpen, setPortOpen] = useState(true);
  const [projectData, setProjectData] = useState();
  const [slideShows, setSlideShows] = useState([])

  // define variables
  const works = projectDB.projects;

  // create variables of screenshots and logos for Details module;

  // const slideArray = 
  // setSlideShows(() => 
  //   works.map((work) => {
  //     return{
  //       ...slideShows,
  //       id: work.id,
  //       status: work.status,
  //       logo: work.logo,
  //       screenshots: work.screenshots
  //     }}))


console.log(slideShows)

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

  const handleTransition = (event) => {
    console.log("This is a transition function!", event);
  };

// generate arrays for project categories
function handleWorks(type) {
  works.filter(function (work) {
    return work.status === type;
  })
}

const handleTab = () => {
  setProjectData('');
  if (portOpen === false) {
    setPortOpen(true);
  }
}

const AnimatedBio = animated(Bio)

const styles = useSpring({
  from: {
    width: '0%'},
    to: {width: '100%'}
  })

const completers = works.filter(function (work) {
    return work.status === "complete";
  })


const progressives = works.filter(function (work) {
  return work.status === "in-progress";
})
console.log(portOpen);
  return (
    <>
      <div className="project-pane">
          <Tab.Container
            className="project-tabs"
            // defaultActiveKey="bio"
            // onSelect={() => setProjectData('')}
            onSelect={handleTab}
          >
                <Nav
                  variant="nav"
                  className="navs"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="bio">Biography</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="completed">Completed Work</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="in-progress">In-Progress Work</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="other-stuff">Other Stuff</Nav.Link>
                  </Nav.Item>
                </Nav>
                {/* <Linkblock tags={tags} setTags={setTags} /> */}
                <Tab.Content className="displays">
                  <Tab.Pane
                    eventKey="bio"
                    title="Biography"
                    // className="biography"
                  >
                    <Bio />
                  </Tab.Pane>
                  <Tab.Pane
                    eventKey="completed"
                    title="Completed Works"
                    // className="overview"
                  >
                    <ProjectStack
                      works={completers}
                      portOpen={portOpen}
                      setPortOpen={setPortOpen}
                      handleCards={handleCards}
                      handleProjectClick={handleProjectClick}
                      projectData={projectData}
                      setProjectData={setProjectData}
                    />
                  </Tab.Pane>
                  <Tab.Pane
                    eventKey="in-progress"
                    title="In-progress Work"
                    // className="overview"
                  >
                    <ProjectStack
                      works = {progressives}
                      portOpen={portOpen}
                      setPortOpen={setPortOpen}
                      handleCards={handleCards}
                      handleProjectClick={handleProjectClick}
                      projectData={projectData}
                      setProjectData={setProjectData}
                    />
                  </Tab.Pane>
                  <Tab.Pane
                    eventKey="other-stuff"
                    title="Other stuff"
                    className="overview"
                  />
                </Tab.Content>
          </Tab.Container>
        </div>
    </>
  );
}
