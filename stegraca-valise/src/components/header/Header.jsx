import React from "react";
import "./header.css";
import {NavBar } from '../index.js';

export default function Head(props) {
  const {display, setDisplay, navi, setNavi} = props;
  

  return (
  <header>
    <div className="nav-block-header"><NavBar navi={navi} setNavi={setNavi}/></div>
  </header>
  )
}
