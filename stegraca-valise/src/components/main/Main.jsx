import React, {
  Component,
  createRef,
  useState,
  useRef,
  useEffect
} from "react";
import {
  animated,
  useSpring,
  useTrail,
  useChain,
  Controller,
  useScroll
} from "@react-spring/web";
import "./main.css";
import { Splash, Portfolio } from "../index";
import { wrapGrid } from "animate-css-grid";

export default function MainPage(props) {
  const [scrollToTop, setScrollToTop] = useState();
  const [thingsOpen, setThingsOpen] = useState(true);
  const { scrollYProgress } = useScroll();

  return (
    <div
      className={
        thingsOpen ? `main-box main-expanded` : `main-box main-welcome`
      }
    >
      <div className="splash-main">
        {/* {thingsOpen ? `splash-main splash-show` : `splash-main splash-hide`}> */}
        <Splash thingsOpen={thingsOpen} scrollYProgress={scrollYProgress}/>
        {thingsOpen}
      </div>
      {/* <div className="heading"
      onClick={()=> portfolioExpand()} >
        <h1>THIS IS MY PORTFOLIO OF THINGS</h1>
      </div> */}
      <div className="portfolio-main">
        <Portfolio thingsOpen={thingsOpen} setThingsOpen={setThingsOpen} scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
}
