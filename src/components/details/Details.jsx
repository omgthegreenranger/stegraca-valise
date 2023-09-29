import React, { useState, useEffect, createRef } from "react";
import { Button, ListGroup, Collapse } from "react-bootstrap";
import "./details.css";
import { IconContext } from "react-icons";
import { RxExternalLink, RxGithubLogo, RxCross1 } from "react-icons/rx";
import { run as runHolder } from "holderjs/holder";
import {
  animated,
  useSpring,
  useSprings,
  useTrail,
  easings,
  useSpringRef,
  SpringValue
} from "@react-spring/web";

export default function Details(props) {
  const {
    projectData,
    setProjectData,
    portOpen,
    setPortOpen,
    mouseOver,
    setMouseOver,
    works,
    section,
    selectedType,
  } = props;
  const [open, setOpen] = useState(false);
  let work = projectData;

  const screenshots = useSpringRef();

  const springOpacity = new SpringValue(1)

  const toggle = () => {
    this.springOpacity.start(portOpen ? 1 : 0)
  }


  const [clear] = useSpring(
    () => ({
      ref: screenshots,
      from: { opacity: 1 },
      to: { opacity: 0 },
      onRest: () => console.log("this dun finished"),
    }),
    []
  );

  const [brand] = useSpring(
    () => ({
      ref: screenshots,
      from: { opacity: 1 },
      to: { opacity: 0 },
      onRest: () => {setProjectData();
      setPortOpen(false);},
    }),
    []
  );

  const clearProjects = () => {
    // screenshots.start();
    setProjectData();
    setPortOpen(false);
  };

  useEffect(() => {
    runHolder("image-class-name");
  });

  return (
    <>
      <ProjectDetails
        work={work}
        setOpen={setOpen}
        open={open}
        clearProjects={clearProjects}
        setPortOpen={setPortOpen}
        portOpen={portOpen}
        clear={clear}
        brand={brand}
      />
    </>
  );
}

// display full details of project.

function ProjectDetails(props) {
  const { work, clearProjects, open, setOpen, clear, brand } = props;
  return (
    <>
      {work ? (
        <div className="details-view details-open">
          <div className="project-title">
            {/* Project Headline */}
            <span className="name-title">{work.name}</span>
            {/* These are the GitHub, direct link, etc as required */}
            <div className="link-pics">
              <IconContext.Provider
                value={{ className: "link-icons" }}
              >{work.gitLink ? 
                <a href={work.gitLink} target="_blank" rel="noreferrer">
                  <RxGithubLogo />
                </a>
                : <></>}
                {work.appLink ?
                <a href={work.appLink} target="_blank" rel="noreferrer">
                  <RxExternalLink />
                </a>
                : <></>}
              </IconContext.Provider>
            </div>
            {/* This is the close icon */}
            <div className="icon-box">
              <IconContext.Provider
                value={{ className: "link-icons" }}
              >
                <span onClick={clearProjects}>
                  <RxCross1 />
                </span>
              </IconContext.Provider>
            </div>
          </div>
          {/* Project Logo and screenshots column */}
          <animated.div className="details-photo-column" style={clear}>
            <img
              className="card-image-details"
              alt="Project Logo"
              src={
                work.logo == ""
                  ? `holder.js/300x200?auto=yes&text=${work.name}&theme=social`
                  : require(`../project/images/${work.logo}`)
              }
            />
            <div className="sidebar-headers">Screenshots</div>
            <div className="screenshots-flex">
              {work.screenshots == "" ? (
                <div>None taken yet. Check back soon.</div>
              ) : (
                work.screenshots.map((screenshot) => {
                  return (
                    <img
                      className="card-screenshots"
                      alt="Project Screenshot"
                      src={require(`../project/images/${screenshot}`)}
                    />
                  );
                })
              )}
            </div>
          </animated.div>
          <div className="project-meat">
            <div>{work.midDesc}</div>
            {work.projDesc ? 
            <div className="project-desc">
              <Collapse in={open}>
                <div id="project-description">{work.projDesc}</div>
              </Collapse>
              <div>
                <Button
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                >
                  Read more
                </Button>
              </div>
            </div>
            : <></>}
          </div>
          <animated.div className="tech-stack" style={brand}>
            <div className="sidebar-header">Tech Stack</div>
            <ListGroup>
              {work.techTags.map((tag) => {
                return <ListGroup.Item>{tag}</ListGroup.Item>;
              })}
            </ListGroup>
            <div className="sidebar-header">Contributing team</div>
            <ListGroup>
              {work.team.map((mem) => {
                return (
                  <ListGroup.Item>
                    <a href={mem.url} target="_blank" rel="noreferrer">
                      {mem.name}
                    </a>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </animated.div>
        </div>
      ) : (
        <div className="details-view details-closed"></div>
      )}
    </>
  );
}

// The following is for when you hover over a project - show short details of the project (and possibly slideshow background of screenshots)
// Click tab for extended info

function HoverDetails(props) {
  const { work, setMouseOver } = props;

//   return (
//     <>
//       <div className="hover-details">
//         <div className="hover-text">{work.shortDesc}</div>
//     </div>
//     </>
//   );
}
