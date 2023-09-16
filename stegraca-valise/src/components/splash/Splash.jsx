import React, { useRef, useEffect } from "react";
import "./splash.css";
import { NavBar } from "../index";
import { wrapGrid } from "animate-css-grid";

export default function Splash(props) {
  const { thingsOpen, setThingsOpen } = props;

  // const object = useRef(null);
  

  useEffect(() => {
  const object = document.getElementsByClassName("splash")[0]
  const animateGrid = () => {
    if (thingsOpen === true) {
      requestAnimationFrame(() => {
        console.log("true")
        object.classList.remove("splash-welcome");
        object.classList.add("splash-top");
      });
    } else if (thingsOpen === false ) {
      console.log("False!")
      requestAnimationFrame(() => {
        object.classList.remove("splash-top");
        object.classList.add("splash-welcome");
      });
    } else {
      console.log("Nothing!")
      object.classList.add("splash-welcome");
    }
  };
  console.log(object);
  wrapGrid(object, {duration: 400})
  animateGrid();
}, )
  return (
    <>
      <div className="splash-container">
        <div className="splash">
          <div className="splash-hello">Hello, my name is</div>
          <div className="splash-name-1">Stephen</div>
          <div className="splash-name-2">Cardie</div>
          <div className="splash-i-am">I am a</div>
          <div className="splash-position">Full Stack Developer</div>
          {/* <div className="splash-contact"> */}
          <div className="splash-find">You can find me here</div>
          <div className="splash-nav">
            <NavBar />
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
