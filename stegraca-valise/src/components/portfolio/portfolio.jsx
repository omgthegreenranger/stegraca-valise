import React from "react";
import "./portfolio.css";
import {Linkblock, Projects} from "../index";

export default function Portfolio(props) {

  return (
  <div>
    <h1>THIS IS MY PORTFOLIO</h1>
    <Linkblock />
    <div>These are some of the things I can do</div>
    <Projects />

  </div>
  )
}