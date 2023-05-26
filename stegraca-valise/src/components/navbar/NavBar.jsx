import React, { useState, useEffect } from 'react';
import { Stack, Container, Row, Col, Button, Form, FloatingLabel } from 'react-bootstrap';
import { MdMail, MdSimCardDownload } from 'react-icons/md';
import { SiMastodon, SiLinkedin, SiGithub } from 'react-icons/si';
import './navbar.css';
import anime from 'animejs';
import {IconContext} from 'react-icons';

export default function NavBar() {
  const [isShown, setIsShown] = useState("Contact Me");
  const handleMouseEnter = (event) => {
    let target = setIsShown(event.target.id);

    console.log(target);
  }


  return (
  <>
      <div className="nav-block">
        <div className="nav-bar" id="nav-stack">
          <IconContext.Provider value={{size: '3rem'}}>
            <span className="nav-btn" id="github" onMouseEnter={() => setIsShown("GitHub")} onMouseLeave={() => setIsShown("Contact Me")}><SiGithub /></span>
            <span className="nav-btn" id="linkedin" onMouseEnter={() => setIsShown("LinkedIn")} onMouseLeave={() => setIsShown("Contact Me")}><SiLinkedin /></span>
            <span className="nav-btn" id="mastodon" onMouseEnter={() => setIsShown("Mastodon")} onMouseLeave={() => setIsShown("Contact Me")}><SiMastodon /></span>
            <span className="nav-btn" id="email" onMouseEnter={() => setIsShown("Email")} onMouseLeave={() => setIsShown("Contact Me")}><MdMail /></span>
            <span className="nav-btn" id="resume" onMouseEnter={() => setIsShown("Resume")} onMouseLeave={() => setIsShown("Contact Me")}><MdSimCardDownload /></span>
          </IconContext.Provider>
        </div>
        <div className="nav-bar">
          <span className="nav-title">{isShown}</span>
        </div>
      </div>


  </>
  );
}

function BlockStack(props) {
console.log(props)
var arr = Array(~~(props.boxHeight)).fill(0).map( ()=> <div>test</div>);
  return(
    <>
</>
  )
    }

