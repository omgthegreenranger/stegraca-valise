import React, { useState } from "react";
import {NavBar} from "../index.js";
import "./splash.css";

export default function Splash(props) {
    const { display, setDisplay, navi, setNavi } = props;
    let trigger = "grow";
  
    if (display) trigger = "shrink";
    return (
      <>
        <div className={`splash ${trigger}`}>
          <div className={`splash-position`}>
            <span className="position-string">Fullstack Web Developer</span>
          </div>
          <div className={`splash-box`}>
            <h1 className={`splash-name`}>STEPHEN CARDIE</h1>
          </div>
          <div className={`nav-block`}>
            <NavBar navi={navi} setNavi={setNavi} />
          </div>
        </div>
      </>
    );
  }