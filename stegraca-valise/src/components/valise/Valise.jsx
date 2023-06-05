import "./Valise.css";
import React, { useState } from "react";
import { Projects, NavBar, Bio, Panel } from "../index";
export default function Valise(props) {
  // destructure our global states from props
  const [navi, setNavi] = useState("none");
    let splashClass;
    let naviHeight;

    if(navi == "none") {
        splashClass = "closed"
    } else if (navi == "about") {
        splashClass = "open"
    } else if (navi == "portfolio") {
        splashClass = "open"
    }
    console.log(splashClass)

  return (
    <div className={`valise-container`}>
            <Splash navi={navi} setNavi={setNavi} splashClass={splashClass} />
        <div className="panel">
            <Panel navi={navi} setNavi={setNavi} splashClass={splashClass} />
        </div>
    </div>
  );
}

function Splash(props) {
    const {navi, setNavi, splashClass} = props;
  return (
        <>
            <div className={`splash-position position-${splashClass}`}>
                <span className="position-string">Fullstack Web Developer</span>
            </div>
            <div className={`splash splash-${splashClass}`}>
                <h1 className={`splash-name name-${splashClass}`}>STEPHEN CARDIE</h1>
            </div>
            <div className="nav-block"><NavBar navi={navi} setNavi={setNavi} splashClass={splashClass} /></div>
        </>
    
  );
}