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

  const [isShown, setIsShown] = useState();

  // const handleMouseEnter = (event) => {
  //   let target = setIsShown(event.target.id);

  //   console.log(target);
  // };

  return (
    <>
      <div className="nav-block">
        <div className="nav-title">{isShown}</div>
            <ul className="nav-bar">
            <IconContext.Provider value={{ size: "2em" }}>
              <a href="http://www.github.com/omgthegreenranger">
              <li
                className="nav-btn"
                id="github"
                onMouseEnter={() => setIsShown("GitHub")}
                onMouseLeave={() => setIsShown("")}
              >
                <SiGithub />
              </li>
              </a>
              <a href="https://www.linkedin.com/in/stephencardie/">
              <li
                className="nav-btn"
                id="linkedin"
                onMouseEnter={() => setIsShown("LinkedIn")}
                onMouseLeave={() => setIsShown("")}
              >
                <SiLinkedin />
              </li>
              </a>
              <a href="https://mastodon.social/@gogreenranger">
              <li
                className="nav-btn"
                id="mastodon"
                onMouseEnter={() => setIsShown("Mastodon")}
                onMouseLeave={() => setIsShown("")}
              >
                <SiMastodon />
              </li>
              </a>
              <a href="mailto:stephen.cardie@gmail.com">
              <li
                className="nav-btn"
                id="email"
                onMouseEnter={() => setIsShown("Email")}
                onMouseLeave={() => setIsShown("")}
              >
                <MdMail />
              </li>
              </a>
              <a href="#">
              <li
                className="nav-btn"
                id="resume"
                onMouseEnter={() => setIsShown("Resume")}
                onMouseLeave={() => setIsShown("")}
              >
                <MdSimCardDownload />
              </li>
              </a>
            </IconContext.Provider>
            </ul>
      </div>
    </>
  );
}