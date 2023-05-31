import React, { useState, useEffect } from "react";
import {
  Stack,
  Container,
  Row,
  Col,
  Button,
  Form,
  FloatingLabel,
} from "react-bootstrap";
import { MdMail, MdSimCardDownload } from "react-icons/md";
import { SiMastodon, SiLinkedin, SiGithub } from "react-icons/si";
import "./navbar.css";
import anime from "animejs";
import { IconContext } from "react-icons";

export default function NavBar(props) {
  const {navi, setNavi} = props;

  const [isShown, setIsShown] = useState("Contact Me");

  // const handleMouseEnter = (event) => {
  //   let target = setIsShown(event.target.id);

  //   console.log(target);
  // };

  return (
    <>
      <div className="nav-block">
        {/* <div className="link-block">
            <div className="link-text" onClick={() => setNavi("about")}>
              About
            </div>
        </div> */}
        <div>
        <div className="nav-title">{isShown}</div>
          <div className="nav-bar">
            <IconContext.Provider value={{ size: "2em" }}>
              <a href="http://www.github.com/omgthegreenranger">
              <span
                className="nav-btn"
                id="github"
                onMouseEnter={() => setIsShown("GitHub")}
                onMouseLeave={() => setIsShown("")}
              >
                <SiGithub />
              </span>
              </a>
              <a href="https://www.linkedin.com/in/stephencardie/">
              <span
                className="nav-btn"
                id="linkedin"
                onMouseEnter={() => setIsShown("LinkedIn")}
                onMouseLeave={() => setIsShown("")}
              >
                <SiLinkedin />
              </span>
              </a>
              <a href="https://mastodon.social/@gogreenranger">
              <span
                className="nav-btn"
                id="mastodon"
                onMouseEnter={() => setIsShown("Mastodon")}
                onMouseLeave={() => setIsShown("")}
              >
                <SiMastodon />
              </span>
              </a>
              <a href="mailto:stephen.cardie@gmail.com">
              <span
                className="nav-btn"
                id="email"
                onMouseEnter={() => setIsShown("Email")}
                onMouseLeave={() => setIsShown("")}
              >
                <MdMail />
              </span>
              </a>
              <a href="#">
              <span
                className="nav-btn"
                id="resume"
                onMouseEnter={() => setIsShown("Resume")}
                onMouseLeave={() => setIsShown("")}
              >
                <MdSimCardDownload />
              </span>
              </a>
            </IconContext.Provider>
          </div>
        </div>
        {/* <div className="link-block">
          <div className="link-text" onClick={() => setNavi("portfolio")}>
            Portfolio
          </div>
        </div> */}
      </div>
    </>
  );
}