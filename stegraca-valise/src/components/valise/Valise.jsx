import "./Valise.css";
import React, { useState } from "react";
import { Projects, NavBar, Bio, Panel } from "../index";
export default function Valise(props) {
  // destructure our global states from props
  const {navi, setNavi} = props;
    let splashClass;
    let naviHeight;

    if(navi == "0") {
        splashClass = "splash"
    } else if (navi == "about") {
        splashClass = "view"
    } else if (navi == "portfolio") {
        splashClass = "view"
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
            <div className={`splash-position nav-${splashClass}`}>
                <span className="position-string">Fullstack Web Developer</span>
            </div>
            <div className={`splash nav-${splashClass}`}>
                <h1 className={`splash-name nav-${splashClass}`}>STEPHEN CARDIE</h1>
            </div>
            <div className={`nav-block nav-${splashClass}`}><NavBar navi={navi} setNavi={setNavi} splashClass={splashClass} /></div>
        </>
    
  );
}