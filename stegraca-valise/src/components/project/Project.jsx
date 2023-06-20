import React, { useState, useEffect } from "react";
import "./Project.css";
import projectDB from "../project/projects.json";
import { Details, Bio } from "../index";
import { Button, Card, Row, Col, Tab, Nav } from "react-bootstrap";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";

export default function Project(props) {
  // set the state as needed
  const { tags, setTags } = props;
  const [portOpen, setPortOpen] = useState(true);
  const [projectData, setProjectData] = useState();
  // const [projOpens, setProjOpens] = useState({"completed": false, "inprogress": false});

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

  const handleTransition = (event) => {
    console.log("This is a transition function!", event)
    
  }

  let completeWorks = <span className="completed">Completed Work</span>;
  let inProgressWorks = <span className="in-progress">In-Progress Work</span>;
  let biography = <span className="biography">About Me</span>;
  return (
    <>
      {portOpen ? (
        <>
          <Tab.Container className="project-tabs" defaultActiveKey="bio" onSelect={() => console.log("Yes yes yes!")}>
            <Row>
              <Col sm={3}>
                <Nav variant="nav" className="flex-column navs" defaultActiveKey="bio">
                  <Nav.Item>
                    <Nav.Link eventKey="bio">Biography</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="completed">Completed Work</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="in-progress">In-Progress Work</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col>
                <Tab.Content>
                  <Tab.Pane
                    eventKey="bio"
                    title="Biography"
                    className="biography"
                  >
                    <Bio />
                  </Tab.Pane>
                  <Tab.Pane
                    eventKey="completed"
                    title="Completed Works"
                    className="completed"
                  >
                    <ProjectStack
                      works={works}
                      portOpen={portOpen}
                      setPortOpen={setPortOpen}
                      handleCards={handleCards}
                      handleProjectClick={handleProjectClick}
                    />
                  </Tab.Pane>
                  <Tab.Pane
                    eventKey="in-progress"
                    title="In-progress Work"
                    className="in-progress"
                  >
                    <ProjectStack
                      works={works}
                      portOpen={portOpen}
                      setPortOpen={setPortOpen}
                      handleCards={handleCards}
                      handleProjectClick={handleProjectClick}
                    />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </>
      ) : (
        <Details
          projectData={projectData}
          setProjectData={setProjectData}
          portOpen={portOpen}
          setPortOpen={setPortOpen}
        />
      )}
    </>
  );
}

function ProjectStack(props) {
  const { works, handleCards, handleProjectClick } = props;
  const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };
  return (
    <>
      {/*<div className="project-pane">
      <div className="project-cards"> */}
      <Row xs={1} sm={4} md={6} className="project-pane">
        {works.map((work) => {
          return (
            <Card
              className="project-card"
              onMouseEnter={() => handleCards(work.techTags)}
              onMouseLeave={() => handleCards([])}
              onClick={() => handleProjectClick(work)}
            >
              <Card.Img
                variant="top"
                className="card-image"
                width="100%"
                src={require(`./images/${work.logo}`)}
                alt="First slide"
              />
              <Card.Body>
                <Card.Title>{work.name}</Card.Title>
                {/* <Card.Text>{work.shortDesc}</Card.Text> */}
              </Card.Body>
            </Card>
          );
        })}
      </Row>
      {/* </div> */}
    </>
  );
}
