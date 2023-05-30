import "./Valise.css";
import React, { useState } from "react";
import { Projects, NavBar, Bio } from "../index";

export default function Valise(props) {
  // destructure our global states from props
  const [navi, setNavi] = useState("none");
    let splashClass;
    let naviHeight;

    if(navi == "none") {
        splashClass = "splash-closed"
    } else if (navi == "about") {
        splashClass = "splash-open"
    } else if (navi == "portfolio") {
        splashClass = "splash-open"
    }
    console.log(splashClass)

  return (
    <div className="valise-container">
        <div className={`splash ${splashClass}`}>
            <Splash navi={navi} setNavi={setNavi} />
            <NavBar navi={navi} setNavi={setNavi} />
        </div>
      <Panel navi={navi} setNavi={setNavi} />
    </div>
  );
}

function Splash(props) {
    const {navi, setNavi} = props;
  return (
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

  );
}

function Panel(props) {
    const { navi, setNavi } = props;
    const handleBack = () => {
        setNavi("none");
    }
    const Display = () => { 
    switch(navi) {
        case "about":
            return(
                <>
                <div className="display-panel">
                <div onClick={handleBack}>Back</div>
                    <Bio />
                </div>
                </>
            )
        case "portfolio":
            return(
                <>
                <div className="display-panel">
                    <div onClick={handleBack}>Back</div>
                    <Projects /> 
                </div>
                </>
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
