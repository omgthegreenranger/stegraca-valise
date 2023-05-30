import "./Valise.css";
import React, { useState } from "react";
import { Projects, NavBar, Bio } from "../index";

export default function Valise(props) {
  // destructure our global states from props
  const [navi, setNavi] = useState("none");

  return (
    <div className="valise-container">
      <Splash navi={navi} setNavi={setNavi} />
      <Panel navi={navi} />
    </div>
  );
}

function Splash(props) {
    const {navi, setNavi} = props;
  return (
    <div className="splash">
        <div className="splash-logo">
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
        </div>
        <NavBar navi={navi} setNavi={setNavi} />
    </div>
  );
}

function Panel(props) {
    const { navi } = props;
    const Display = () => { 
    switch(navi) {
        case "about":
            return(
                <div className="display-panel">
                    <Bio />
                </div>
            )
        case "portfolio":
            return(
                <div className="display-panel">
                    <Projects /> 
                </div>
            )
        default:
            return(
                <></>
            )

    }
}
    return (
            <Display />

    )
}
