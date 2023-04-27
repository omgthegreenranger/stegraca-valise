import React, { useState, useEffect } from 'react';
import { Stack, Container, Row, Col, Button, Form, FloatingLabel } from 'react-bootstrap';
import { MdMail, MdSimCardDownload } from 'react-icons/md';
import { SiMastodon, SiLinkedin, SiGithub } from 'react-icons/si';
import './navbar.css';
import anime from 'animejs';

export default function NavBar() {
  const [boxHeight, setBoxHeight] = useState();

  useEffect(() => {
    return setBoxHeight(document.getElementById('nav-stack').clientHeight);
  });

  return (
  <>
  <Stack className="nav-block" direction="horizontal">
    <Stack className="nav-bar side-block" xs={6}>
      <span className="nav-title">CONTACT ME</span>
    </Stack>
    <Stack className="nav-bar nav" id="nav-stack" xs={6}>
      <span className="nav-btn" id="github"><SiGithub /></span>
      <span className="nav-btn" id="linkedin"><SiLinkedin /></span>
      <span className="nav-btn" id="mastodon"><SiMastodon /></span>
      <span className="nav-btn" id="email"><MdMail /></span>
      <span className="nav-btn" id="resume"><MdSimCardDownload /></span>
    </Stack>
  </Stack>
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

