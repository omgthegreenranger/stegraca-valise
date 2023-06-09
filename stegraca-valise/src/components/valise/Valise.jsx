import "./Valise.css";
import React, { useState } from "react";
import { Projects, NavBar, Bio, Panel } from "../index";
export default function Valise(props) {
  // destructure our global states from props
  const { display, setDisplay } = props;
  const [navi, setNavi] = useState("");

  return (
    <div className={`valise-container`}>
      <Splash
        display={display}
        setDisplay={setDisplay}
        navi={navi}
        setNavi={setNavi}
      />
      <Panel
        display={display}
        setDisplay={setDisplay}
        navi={navi}
        setNavi={setNavi}
      />
    </div>
  );
}

function Splash(props) {
  const { display, setDisplay, navi, setNavi } = props;
  let trigger = "grow";

  if (display) trigger = "shrink";
  return (
    <>
      <div className={`splash ${trigger}`}>
        <div className={`splash-position`}>
          <span className="position-string">Fullstack Web Developer</span>
        </div>
        <div className={`splash-box`}>
          <h1 className={`splash-name`}>STEPHEN CARDIE</h1>
        </div>
        <div className={`nav-block`}>
          <NavBar navi={navi} setNavi={setNavi} />
        </div>
      </div>
    </>
  );
}
