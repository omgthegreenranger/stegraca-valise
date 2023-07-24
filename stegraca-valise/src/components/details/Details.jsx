import React, { useState, useEffect } from "react";
import { Button, ListGroup, Collapse } from "react-bootstrap";
import "./details.css";
import { IconContext } from "react-icons";
import projectDB from "../project/projects.json";
import { RxExternalLink, RxGithubLogo, RxCross1 } from "react-icons/rx";
import { run as runHolder } from "holderjs/holder";

export default function Details(props) {
  const {
    projectData,
    setProjectData,
    portOpen,
    setPortOpen,
    mouseOver,
    setMouseOver,
    works,
    section
  } = props;
  const [open, setOpen] = useState(false);
  let work = projectData;
  const clearProjects = () => {
    setProjectData();
    setPortOpen(true);
  };

  useEffect(() => {
    runHolder("image-class-name");
  });
  return (
    <>

    {/* If there is a mouseOver and *no* work, HoverDetails.
    If there is a mouseOver and work, ProjectDetails.
    If there is no mouseOver and work, ProjectDetails.
    If there is no mouseOver and no work, NoDetails */}
      {work ? (
        <ProjectDetails work={work} setOpen={setOpen} open={open} clearProjects={clearProjects} setPortOpen={setPortOpen} portOpen={portOpen} />
      ) : (
        mouseOver.toggle ? (
          <HoverDetails work={mouseOver} setMouseOver={setMouseOver}/>
        ) : (
          <NoDetails works={works} section={section} />
        )
      )}
      ;
    </>
  );
}

// display full details of project.

function ProjectDetails(props) {
  const { work, clearProjects, open, setOpen, setPortOpen, portOpen} = props;
  return (
    <>
      <div className="details-view">
        <div className="project-title">
          {/* Project Headline */}
          <span className="name-title">{work.name}</span>
          {/* These are the GitHub, direct link, etc as required */}
          <div className="link-pics">
            <IconContext.Provider
              value={{ size: "3rem", className: "link-icons" }}
            >
              <a href={work.gitLink} target="_blank" rel="noreferrer">
                <RxGithubLogo />
              </a>
              <a href={work.appLink} target="_blank" rel="noreferrer">
                <RxExternalLink />
              </a>
            </IconContext.Provider>
          </div>
          {/* This is the close icon */}
          <div className="icon-box">
            <IconContext.Provider
              value={{ size: "3rem", className: "link-icons" }}
            >
              <span onClick={clearProjects}>
                <RxCross1 />
              </span>
            </IconContext.Provider>
          </div>
        </div>
        {/* Project Logo and screenshots column */}
        <div className="details-photo-column">
          <img
            className="card-image-details"
            alt="Project Logo"
            src={
              work.logo == ""
                ? `holder.js/300x200?auto=yes&text=${work.name}&theme=social`
                : require(`../project/images/${work.logo}`)
            }
          />
          {work.screenshots == ""
            ? ""
            : work.screenshots.map((screenshot) => {
                return (
                  <img
                    className="card-screenshots"
                    alt="Project Screenshot"
                    src={require(`../project/images/${screenshot}`)}
                  />
                );
              })}
        </div>
        <div className="project-meat">
          <div>{work.midDesc}</div>
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
        </div>
        <div className="tech-stack">
          <span>Tech Stack</span>
          <ListGroup>
            {work.techTags.map((tag) => {
              return <ListGroup.Item>{tag}</ListGroup.Item>;
            })}
          </ListGroup>
          <span>Contributing team</span>
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
        </div>
      </div>
    </>
  );
}

// The following is for when you hover over a project - show short details of the project (and possibly slideshow background of screenshots)
// Click tab for extended info

function HoverDetails(props) {
  const {work, setMouseOver} = props;
  return(
    <>
    <div className="hover-details"
    onMouseOver={() => setMouseOver({ toggle: true, id: work.id, name: work.name, shortDesc: work.shortDesc })}>
      <span>{work.name}</span>          <div className="link-pics">
            <IconContext.Provider
              value={{ size: "3rem", className: "link-icons" }}
            >
              <a href={work.gitLink} target="_blank" rel="noreferrer">
                <RxGithubLogo />
              </a>
              <a href={work.appLink} target="_blank" rel="noreferrer">
                <RxExternalLink />
              </a>
            </IconContext.Provider>
          </div>
      <div className="card-text">
        <div className="card-text">{work.shortDesc}</div>
        <div className="card-text">placeholder</div>
      </div>
    </div>
    </>)
}

// The following is default screen with no selection.

function NoDetails(props) {
  const {works, section} = props;
  console.log(works);
    return (
    <div className="no-details">
      {works.map((work) => {
        console.log(work)
        let screenshots = work.screenshots
        console.log(screenshots)
        return(
          <>
          {screenshots ? screenshots.map((shot) => {
            return(
              <>
                <p>{shot}</p>
                <p>{work.id}</p>
              </>
            )}) : (" ")           }
          </>
            )}
      )}
      <p>No Details placeholder!</p>
    </div>
  );
}
