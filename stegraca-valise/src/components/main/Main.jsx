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

  // function portfolioExpand() {
  //   setThingsOpen((current) => !current)
  //   var scrollListener = document.getElementsByClassName('splash-container')[0]
  //   if (thingsOpen === false) {
  //     scrollListener.style.width = "15vw";
  //     scrollListener.style.justifySelf = "left";
  //   } else if (thingsOpen === true) {
  //     scrollListener.style.width = "50vw";
  //     scrollListener.style.justifySelf = "center";
  //   }
  //   const mainGrid = document.getElementsByClassName("main-box")[0]
  //   const animateGrid = () => {
  //     if (thingsOpen === false) {
  //       requestAnimationFrame(() => {
  //         console.log("true")
  //         mainGrid.classList.remove("main-welcome");
  //         mainGrid.classList.add("main-expanded");
  //       });
  //     } else if (thingsOpen === true ) {
  //       console.log("False!")
  //       requestAnimationFrame(() => {
  //        mainGrid.classList.remove("main-expanded");
  //        mainGrid.classList.add("main-welcome");
  //       });
  //     } else {
  //       console.log("Nothing!")
  //       mainGrid.classList.add("main-welcome");
  //     }
  //   };
  //   console.log(mainGrid);
  //   wrapGrid(mainGrid, {duration: 400})
  //   animateGrid();
  // }

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
