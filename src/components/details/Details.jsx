import React, { useState, useEffect, createRef } from "react";
import { Button, ListGroup, Collapse } from "react-bootstrap";
import Lightbox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "./details.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
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
  SpringValue,
} from "@react-spring/web";
import { wrapGrid } from "animate-css-grid";
import "yet-another-react-lightbox/styles.css";

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

  const springOpacity = new SpringValue(1);

  const toggle = () => {
    this.springOpacity.start(portOpen ? 1 : 0);
  };

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
      onRest: () => {
        setProjectData();
        setPortOpen(false);
      },
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
  const [screenshotsOpen, setScreenshotsOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [linkText, setLinkText] = useState();
  function screenshotList(screenshots) {
    screenshots.map(screenshot => {

      return (
        require(
          `../project/images/${screenshot}`
        )
      )
    }
    )
  }
  const linkTexter = (e) => {
    
    console.log(e.target.parentNode)
    setLinkText(e.target.parentNode.id)
  }
  return (
    <>
      {work ? (
        <div
          className="details-view details-open"
        // {screenshotsOpen ? "details-view details-screens" : "details-view details-open"}
        >
          <div className="details-surround-boxes card-logo-box">
            <img
              className="card-logo"
              alt="Project Logo"
              src={
                work.logo == ""
                  ? `holder.js/300x200?auto=yes&text=${work.name}&theme=social`
                  : require(`../project/images/${work.logo}`)
              }
            />
          </div>
          <div className="details-surround-boxes project-title">
            {/* Project Headline */}
            <div className="name-title">{work.name}</div>
          </div>
          {/* These are the GitHub, direct link, etc as required */}
          <div className="navicons">
            <div className="link-pics" onMouseLeave={() => setLinkText()}>
              <IconContext.Provider value={{ className: "link-icons" }}>
                {work.gitLink ? (
                  <a href={work.gitLink} target="_blank" rel="noreferrer" id="Visit GitHub" onMouseEnter={linkTexter}>
                    <RxGithubLogo />
                  </a>
                ) : (
                  <></>
                )}
                {work.appLink ? (
                  <a href={work.appLink} target="_blank" rel="noreferrer" id="See the page!" onMouseEnter={linkTexter} >
                    <RxExternalLink />
                  </a>
                ) : (
                  <></>
                )}
              </IconContext.Provider>
            </div>
            {/* This is the close icon */}
            <div className="icon-box">
              <IconContext.Provider value={{ className: "link-icons" }}>
                <span onClick={clearProjects}>
                  <RxCross1 />
                </span>
              </IconContext.Provider>
            </div>
            <div className="link-text">
                {linkText}
              </div>
          </div>
          {/* Project Logo and screenshots column */}
          <div
            className="details-surround-boxes details-sideboxes details-photo-column"
            style={clear}
          >
            <div className="sidebar-headers">Screenshots</div>
            <div className="screenshots-flex">
              {work.screenshots == "" ? (
                <div>None taken yet. Check back soon.</div>
              ) : (
                <>
                  <Lightbox
                    index={index}
                    slides={work.screenshots.map((item) => ({
                      src: require(`../project/images/${item}`
                      )
                    }))}
                    plugins={[Inline]}
                    on={{
                      view: () => setIndex(index),
                      click: () => setScreenshotsOpen(true),
                    }}
                    carousel={{
                      padding: 0,
                      spacing: 0,
                      imageFit: "cover",
                    }}
                    inline={{
                      style: {
                        width: "100%",
                        maxWidth: "900px",
                        aspectRatio: "3 / 2",
                        margin: "0 auto",
                      },
                    }}
                  />
                  <Lightbox
                    open={screenshotsOpen}
                    close={() => setScreenshotsOpen(false)}
                    index={index}
                    slides={work.screenshots.map((item) => ({
                      src: require(`../project/images/${item}`
                      )
                    }))}
                    styles={{ container: { backgroundColor: "rgba(0,0,0,0.25)", width: "100%", height: "100%" } }}
                    plugins={[Slideshow, Thumbnails]}
                    on={{ view: () => setIndex(index) }}
                    animation={{ fade: 0 }}
                    controller={{
                      closeOnPullDown: true,
                      closeOnBackdropClick: true,
                    }}
                  />
                </>
                // <img
                //   className="card-screenshots"
                //   alt="Project Screenshot"
                //   src={require(`../project/images/${screenshot}`)}
                //   onClick={() => setScreenshotsOpen(true)}
                // />
              )}
            </div>
          </div>
          <div className="project-meat">
            <div>{work.midDesc}</div>
            {work.projDesc ? (
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
            ) : (
              <></>
            )}
          </div>
          <animated.div
            className="details-surround-boxes details-sideboxes tech-stack"
            style={brand}
          >
            <div className="sidebar-headers">Tech Stack</div>
            <ListGroup>
              {work.techTags.map((tag, i) => {
                return <ListGroup.Item key={i}>{tag}</ListGroup.Item>;
              })}
            </ListGroup>
            <div className="sidebar-headers">Contributing team</div>
            <ListGroup>
              {work.team.map((mem, i) => {
                return (
                  <ListGroup.Item key={i}>
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
