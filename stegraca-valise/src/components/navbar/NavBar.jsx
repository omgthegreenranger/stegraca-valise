import React from "react";
import { MdMail, MdSimCardDownload } from "react-icons/md";
import { SiMastodon, SiLinkedin, SiGithub } from "react-icons/si";
import "./navbar.css";
import { IconContext } from "react-icons";

export default function NavBar(props) {

  return (
    <>
            <ul className="nav-bar">
            <IconContext.Provider value={{ size: "2em" }}>

              <li
                id="github"
              >
                <a className="nav-btn" href="http://www.github.com/omgthegreenranger">
                <div>
                <SiGithub />
                </div>
                {/* <span className="nav-title">GitHub</span> */}
                </a>
              </li>
              <a href="https://www.linkedin.com/in/stephencardie/">
              <li
                className="nav-btn"
                id="linkedin"
              >
                <SiLinkedin />
                {/* <span className="nav-title">LinkedIn</span> */}
              </li>
              </a>
              <a href="https://mastodon.social/@gogreenranger">
              <li
                className="nav-btn"
                id="mastodon"
              >
                <SiMastodon />
                {/* <span className="nav-title">Mastodon</span> */}
              </li>
              </a>
              <a href="mailto:stephen.cardie@gmail.com">
              <li
                className="nav-btn"
                id="email"
              >
                <MdMail />
                {/* <span className="nav-title">Email</span> */}
              </li>
              </a>
              <a href="#">
              <li
                className="nav-btn"
                id="resume"
              >
                <MdSimCardDownload />
                {/* <span className="nav-title">Download resume</span> */}
              </li>

              </a>
            </IconContext.Provider>
            </ul>
      {/* </div> */}
    </>
  );
}