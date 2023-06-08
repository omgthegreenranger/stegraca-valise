import React from "react";
import "./header.css";
import {NavBar } from '../index.js';

export default function Head(props) {
  const {navi, setNavi} = props;
  return (
  <header>
    <div className={`splash-position-header`}>
        <span className="position-string-header">Fullstack Web Developer</span>
    </div>
    <div className={`splash-header`}>
        <h1 className={`splash-name-header`}>STEPHEN CARDIE</h1>
    </div>
    <div className="nav-block-header"><NavBar navi={navi} setNavi={setNavi}/></div>
  </header>
  )
}
