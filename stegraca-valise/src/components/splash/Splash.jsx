import React, { useState } from "react";
import "./splash.css";

export default function Splash(props) {
    const { display, setDisplay, navi, setNavi } = props;
    let trigger = "grow";
  
    if (display) trigger = "shrink";
    return (
      <>
        <div className={`splash ${trigger}`}>
          <div className={`splash-box`}>
            <h1 className={`splash-name`}>Stephen Cardie</h1>
          </div>
          <div className={`splash-position`}>
            <span className="position-string">Fullstack Web Developer</span>
          </div>
        </div>
      </>
    );
  }