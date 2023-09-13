import React from "react";
import "./main.css";
import { Splash, Portfolio} from "../index";

export default function MainPage(props) {

  return (
  <div className="main-box">
    <div className="splash-main">
    <Splash />
    </div>
    <div className="portfolio-main">
    <Portfolio />
    </div>
  </div>
  )
}