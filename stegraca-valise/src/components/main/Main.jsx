import React, { useState, useRef } from "react";
import {Fade} from "react-awesome-reveal";
import "./main.css";
import { Splash, Portfolio} from "../index";

export default function MainPage(props) {
  const [scrollToTop, setScrollToTop] = useState();

  return (
  <div className="main-box">
    <div className="splash-main" >
    <Splash scrollToTop={scrollToTop} setScrollToTop={setScrollToTop} />
    </div>
    <div className="heading">
        <h1>THIS IS MY PORTFOLIO OF THINGS</h1>
      </div>
    <Fade className="portfolio-main" fraction={0.4}>
    <Portfolio />
    </Fade>
  </div>
  )
}