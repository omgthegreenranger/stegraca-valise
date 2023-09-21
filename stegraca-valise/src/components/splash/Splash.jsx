import React, { useRef, useEffect } from "react";
import {
  animated,
  useSpring,
  useTrail,
  useChain,
  Controller,
  useScroll,
  useSpringRef,
  useSpringValue
} from "@react-spring/web";
import "./splash.css";
import { NavBar, Linkblock, Bio } from "../index";
import { wrapGrid } from "animate-css-grid";

export default function Splash(props) {
  const { thingsOpen, setThingsOpen, scrollYProgress } = props;
  
  // const [splashWidth, api] = useSpring(
  //   () => ({
  //     from: { width: '50vw'},
  //     to: {  height: "0vh",
  //       margin: "0rem",
  //       width: "25vw",
  //       gridGap: "1rem"},
    // }),[])
  // const object = useRef(null);

  // useEffect(() => {
  //   const object = document.getElementsByClassName("splash")[0];
  //   const animateGrid = () => {
  //     if (thingsOpen === true) {
  //       requestAnimationFrame(() => {
  //         console.log("true");
  //         object.classList.remove("splash-welcome");
  //         object.classList.add("splash-top");
  //       });
  //     } else if (thingsOpen === false) {
  //       console.log("False!");
  //       requestAnimationFrame(() => {
  //         object.classList.remove("splash-top");
  //         object.classList.add("splash-welcome");
  //       });
  //     } else {
  //       console.log("Nothing!");
  //       object.classList.add("splash-welcome");
  //     }
  //   };
  //   console.log(object);
  //   wrapGrid(object, { duration: 400 });
  //   animateGrid();
  // });



  return (
    <>
      <animated.div
        className={
          // thingsOpen ? 
          `splash-container splash-hide`
            // : `splash-container splash-show`
        }
        // style={splashWidth}
      >
        <div
          className={
            // thingsOpen ? 
            `splash splash-top`
            // : `splash splash-welcome`
          }
        >
          <div className="splash-hello">Hello, my name is</div>
          <div className="splash-name-1">Stephen</div>
          <div className="splash-name-2">Cardie</div>
          <div className="splash-i-am">I am a</div>
          <div className="splash-position">Full Stack Developer</div>
        </div>
        <div
          className={
            // thingsOpen ? 
            `splash-contact port-on` 
            // : `splash-contact port-off`
          }
        >
          <div className="splash-nav">
            <NavBar />
          </div>
        </div>
        <block className={
            // thingsOpen ? 
            `splash-linkblock port-on`
            //  : `splash-linkblock port-off`
          }>
          <Bio />
        </block>
      </animated.div>
    </>
  );
}
