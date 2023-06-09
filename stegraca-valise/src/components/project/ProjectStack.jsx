import React, { useState, useEffect } from "react";
import "./Project.css";
import { Details } from "../index.js";
import projectDB from "../project/projects.json";
import {
  Button,
  Card,
  Row,
  Col,
  Tab,
  Nav,
  CardGroup,
  CardImgOverlay,
} from "react-bootstrap";
import { animated, useSpring } from "@react-spring/web";

export function ProjectStack(props) {
  const { works, handleCards, handleProjectClick, projectData, setProjectData, portOpen, setPortOpen } = props;
  const [mouseOver, setMouseOver] = useState({ toggle: "", id: "" });

  return (
    <>
      <div className="overview">
      <Row xs={1} sm={3} md={5} lg={8} className="project-cards">
        {works.map((work) => {
          return (
            <Card
              className="project-card"
              onMouseEnter={() => {
                handleCards(work.techTags);
                setMouseOver({ toggle: true, id: work.id });
              }}
              onMouseLeave={() => {
                handleCards([]);
                setMouseOver({ toggle: false, id: "" });
              }}
              onClick={() => handleProjectClick(work)}
            >
              <Card.Img
                className="card-image"
                width="100%"
                src={
                  work.logo == ""
                    ? `holder.js/300x200?auto=yes&text=${work.name}&theme=social`
                    : require(`./images/${work.logo}`)
                }
                alt="First slide"
              />
              {mouseOver.toggle === true && mouseOver.id === work.id ? (
                <Card.ImgOverlay className="image-overlay">
                  <Card.Title>{work.name}</Card.Title>
                  <Card.Text>{work.shortDesc}</Card.Text>
                </Card.ImgOverlay>
              ) : (
                console.log("No this is not!", mouseOver)
              )}
            </Card>
          );
        })}
      </Row>
      {/* <Row className="detailpane"> */}
      <Details
        projectData={projectData}
        setProjectData={setProjectData}
        portOpen={portOpen}
        setPortOpen={setPortOpen}
      />
      {/* </Row> */}
      </div>
    </>
  );
}
