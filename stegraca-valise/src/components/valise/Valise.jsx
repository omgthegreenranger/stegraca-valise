import "./Valise.css";
import React, { useState } from "react";
import { Projects, NavBar, Bio, Panel } from "../index";
export default function Valise(props) {
  // destructure our global states from props
  const [navi, setNavi] = useState("none");
    let splashClass;
    let naviHeight;

    if(navi == "none") {
        splashClass = "closed"
    } else if (navi == "about") {
        splashClass = "open"
    } else if (navi == "portfolio") {
        splashClass = "open"
    }
    console.log(splashClass)

  return (
    <div className={`valise-container-${splashClass}`}>
        <div className={`splash splash-${splashClass}`}>
            <Splash navi={navi} setNavi={setNavi} splashClass={splashClass} />
        </div>
        <div className="panel">
            <Panel navi={navi} setNavi={setNavi} splashClass={splashClass} />
        </div>
    </div>
  );
}

function Splash(props) {
    const {navi, setNavi, splashClass} = props;
  return (
        <>
            <div className={`splash-name-block block-${splashClass}`}>
                <h1 className={`splash-name name-${splashClass}`}>STEPHEN CARDIE</h1>
            </div>
                <div className={`splash-logo-top logo-${splashClass}`}>
                    <div className={`splash-position position-${splashClass}`}>Fullstack Web Developer</div>
                <div><NavBar navi={navi} setNavi={setNavi} splashClass={splashClass} /></div>
                </div>
</>
        // </div>
    
  );
}