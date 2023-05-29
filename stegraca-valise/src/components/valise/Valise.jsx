import "./Valise.css";
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Projects, NavBar, Bio } from "../index";

export default function Valise(props) {
  // destructure our global states from props
  const [navi, setNavi] = useState("none");

  return (
    <>
      <Splash navi={navi} setNavi={setNavi} />
    </>
  );
}

function Splash(props) {
    const {navi, setNavi} = props;
  return (
    <div className="valise-container" fluid>
        <div className="splash">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 948 135"
            xmlns="http //www.w3.org/2000/svg"
          >
            <text x="50" y="0" class="splash-position">
              Fullstack Web Developer
            </text>
            <text x="0" y="25" font-width="900px" class="valise-name">
              STEPHEN CARDIE
            </text>
            <line x1="50" y1="130" x2="900" y2="130" stroke="white" />
          </svg>
            <NavBar navi={navi} setNavi={setNavi} />
        </div>
    </div>
  );
}
