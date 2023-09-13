import React from "react";
import "./splash.css";
import { NavBar } from "../index";

export default function Splash() {
  return (
    <>
      <div className="splash">
        <div className="splash-top-sub-box">
          <div className="splash-hello">Hello, my name is</div>
          <div className="splash-name-1">Stephen</div>
          <div className="splash-name-2">Cardie</div>
        </div>
        <div className="splash-i-am">I am a</div>
        <div className="splash-position">Full Stack Developer</div>
      </div>

      <div className="splash-find">You can find me here</div>
      <div className="splash-nav">
        <NavBar />
      </div>
    </>
  );
}
