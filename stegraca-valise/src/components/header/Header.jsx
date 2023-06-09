import React from "react";
import "./header.css";
import {NavBar } from '../index.js';

export default function Head(props) {
  const {display, setDisplay, navi, setNavi} = props;
  
  let trigger = "off";
  
  if(display) trigger = "on";
  

  return (
  <header>
    <div className={`name-header ${trigger}`}>
    <div className={`splash-position-header`}>
        <span className="position-string-header">Fullstack Web Developer</span>
    </div>
    <div className={`splash-header`}>
        <h1 className={`splash-name-header`}>STEPHEN CARDIE</h1>
    </div>
    </div>
    {/* <div className="header-buttons">
      <div className="link-text page-about" onClick={() => {setDisplay(true); setNavi("about")}}>
        About
      </div>
      <div className="link-text page-portfolio" onClick={() => {setDisplay(true); setNavi("portfolio")}}>
        Portfolio
      </div>
    </div> */}
    <div className="nav-block-header"><NavBar navi={navi} setNavi={setNavi}/></div>
  </header>
  )
}
