import "./Valise.css";
import React, { useState } from "react";
import { Projects, NavBar, Bio, Panel } from "../index";
export default function Valise(props) {
  // destructure our global states from props
  const {display, setDisplay} = props;
  const [navi, setNavi] = useState('')

  return (
    <div className={`valise-container`}>
            <Splash display={display} setDisplay={setDisplay} navi={navi} setNavi={setNavi} />
            <Panel display={display} setDisplay={setDisplay} navi={navi} setNavi={setNavi}  />
    </div>
  );
}

function Splash(props) {
    const {display, setDisplay, navi, setNavi} = props;
  return (
        <>
            <div className={`splash-position nav-${display}`}>
                <span className="position-string">Fullstack Web Developer</span>
            </div>
            <div className={`splash nav-${display}`}>
                <h1 className={`splash-name nav-${display}`}>STEPHEN CARDIE</h1>
            </div>
            <div className={`nav-block nav-${display}`}><NavBar navi={navi} setNavi={setNavi} /></div>
        </>
    
  );
}