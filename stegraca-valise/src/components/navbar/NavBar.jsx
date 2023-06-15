import React, { useState, useEffect } from "react";
import { MdMail, MdSimCardDownload } from "react-icons/md";
import { SiMastodon, SiLinkedin, SiGithub } from "react-icons/si";
import "./navbar.css";
import { IconContext } from "react-icons";

export default function NavBar(props) {
  const [isShown, setIsShown] = useState(<br />);

  // const handleMouseEnter = (event) => {
  //   let target = setIsShown(event.target.id);

  //   console.log(target);
  // };

  return (
    <>
      {/* <div className={`nav-${splashClass}`}> */}
        <div className="nav-title">{isShown}</div>
            <ul className="nav-bar">
            <IconContext.Provider value={{ size: "2em" }}>
              <a href="http://www.github.com/omgthegreenranger">
              <li
                className="nav-btn"
                id="github"
                onMouseEnter={() => setIsShown("GitHub")}
                onMouseLeave={() => setIsShown(<br />)}
              >
                <SiGithub />
              </li>
              </a>
              <a href="https://www.linkedin.com/in/stephencardie/">
              <li
                className="nav-btn"
                id="linkedin"
                onMouseEnter={() => setIsShown("LinkedIn")}
                onMouseLeave={() => setIsShown(<br />)}
              >
                <SiLinkedin />
              </li>
              </a>
              <a href="https://mastodon.social/@gogreenranger">
              <li
                className="nav-btn"
                id="mastodon"
                onMouseEnter={() => setIsShown("Mastodon")}
                onMouseLeave={() => setIsShown(<br />)}
              >
                <SiMastodon />
              </li>
              </a>
              <a href="mailto:stephen.cardie@gmail.com">
              <li
                className="nav-btn"
                id="email"
                onMouseEnter={() => setIsShown("Email")}
                onMouseLeave={() => setIsShown(<br />)}
              >
                <MdMail />
              </li>
              </a>
              <a href="#">
              <li
                className="nav-btn"
                id="resume"
                onMouseEnter={() => setIsShown("Resume")}
                onMouseLeave={() => setIsShown(<br />)}
              >
                <MdSimCardDownload />
              </li>
              </a>
            </IconContext.Provider>
            </ul>
      {/* </div> */}
    </>
  );
}