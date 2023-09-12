import React, { useState } from "react";
import "./Project.css";
import projectDB from "../project/projects.json";
import { Bio, Linkblock } from "../index";
import { ProjectStack } from "./index";
import { Tab, Nav } from "react-bootstrap";
import { animated, useSpring } from "@react-spring/web";

export default function Project(props) {
  // set the state as needed
  const { tags, setTags, portOpen, setPortOpen } = props;
  const [projectData, setProjectData] = useState();

  // define variables
  const works = projectDB.projects;

  // Create functions

  // Function to handle tags on card mouseover
  const handleCards = (tagList) => {
    setTags(tagList);
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

//   let el = document.getElementsBy
// console.log(el)

  return (
    <>
      <div className="main-panel">
        <Tab.Container
          className="project-tabs"
          defaultActiveKey="bio"
          onSelect={handleTab}
        >
          <Nav variant="nav" className="navs navs-menu">
            <Nav.Item>
              <Nav.Link eventKey="bio">Biography</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="portfolio">Portfolio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="other-stuff">Other Stuff</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content className="displays">
            <Tab.Pane eventKey="bio" title="Biography">
              <Bio />
            </Tab.Pane>
            <Tab.Pane eventKey="portfolio" title="Portfolio">
              <ProjectStack
                works={works}
                portOpen={portOpen}
                setPortOpen={setPortOpen}
                handleCards={handleCards}
                projectData={projectData}
                setProjectData={setProjectData}
                handleTab={handleTab}
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
      </div>
    </>
  );
}
