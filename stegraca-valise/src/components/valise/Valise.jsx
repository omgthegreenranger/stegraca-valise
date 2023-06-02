import "./Valise.css";
import React, { useState } from "react";
import { Projects, NavBar, Bio, Panel } from "../index";
export default function Valise(props) {
  // destructure our global states from props
  const [navi, setNavi] = useState("none");
    let splashClass;
    let naviHeight;

    if(navi == "none") {
        splashClass = "splash-closed"
    } else if (navi == "about") {
        splashClass = "splash-open"
    } else if (navi == "portfolio") {
        splashClass = "splash-open"
    }
    console.log(splashClass)

  return (
    <div className="valise-container">
        <div className={`splash ${splashClass}`}>
            {/* <NavBar navi={navi} setNavi={setNavi} /> */}
            <Splash navi={navi} setNavi={setNavi} />
        </div>
        <div className="panel">
            <Panel navi={navi} setNavi={setNavi} />
        </div>
    </div>
  );
}

function Splash(props) {
    const {navi, setNavi} = props;
  return (
        // <div className="splash-logo">
        //     <div className="splash-logo-top">
        //         <div className="splash-position">Fullstack Web Developer</div>
        //         <div><NavBar navi={navi} setNavi={setNavi} /></div>
        //     </div>
        //     <div>
        //         <h1 className="splash-name">STEPHEN CARDIE</h1>
        //     </div>
        // </div>
        // <div className="splash-logo">
        <>
            <div className="splash-name-block">
                <h1 className="splash-name">STEPHEN CARDIE</h1>
            </div>
                <div className="splash-logo-top">
                    <div className="splash-position">Fullstack Web Developer</div>
                <div><NavBar navi={navi} setNavi={setNavi} /></div>
                </div>
</>
        // </div>
    
  );
}