import React, {useState, useEffect} from 'react';
import { Stack, Container, Row, Col, Button, Form, FloatingLabel } from 'react-bootstrap';
import { TiBriefcase, TiHome, TiMessage } from "react-icons/ti";
import './navbar.css';
import anime from 'animejs';

export default function NavBar({valisePage}) {
  const [boxArray, setBoxArray] = useState([])

  return (
  <>
  <Stack direction="horizontal" xs={1}>
    <Stack className="nav-bar nav" id="nav-stack" xs={11}>
      <span className="nav-btn" id="home"><TiHome /></span>
      <span className="nav-btn" id="projects"><TiBriefcase /></span>
      <span className="nav-btn" id="contact"><TiMessage /></span>
    </Stack>
    <Stack className="nav-bar side-block">
      {useEffect(() => {
        let boxHeight = document.getElementById('nav-stack').clientHeight;
        console.log(boxHeight);
        boxHeight = Math.round(boxHeight / 3);
        console.log(boxHeight);
        const boxArray = [...Array(boxHeight).keys()].map(x => ++x)
        boxArray.map((box) => {
          <div>&nbsp;</div>
        }
      )})}
    </Stack>
  </Stack>
  </>
  );
}


