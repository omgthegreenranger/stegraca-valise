import React, { useState, useEffect } from "react";
import "./panel.css";
import "react-multi-carousel/lib/styles.css";
import {
    SiJavascript,
    SiCss3,
    SiBootstrap,
    SiGithub,
    SiHeroku,
    SiHtml5,
    SiMongodb,
    SiMariadb,
    SiReact
 } from "react-icons/si";
import {
  RxCaretLeft,
  RxCaretRight,
  RxExternalLink,
  RxInfoCircled,
} from "react-icons/rx";
import { IconContext } from "react-icons";
import { Projects, Bio } from "../index";

export default function Panel(props) {
    const [tags, setTags] = useState([]);
    const { display, setDisplay, navi, setNavi } = props;
    const handleBack = () => {
        setDisplay(false);
        setNavi(false);
    }
    const Display = () => { 
    switch(navi) {
        case "about":
            return(
                <>
                    <Bio />
                </>
            )
        case "portfolio":
            return(
                <>
                    <Projects tags={tags} setTags={setTags} /> 
                </>
            )
        default:
            return(
                <></>
            )

    }
}


    return (
        <div className="panel">
            {display == false ? <>
                <div className="link-text page-about" onClick={() => {setDisplay(true); setNavi("about")}}>
                    About
                </div>
                <div className="page-tech">
                    <TechLine tagList={tags} />
                </div>
                <div className="link-text page-portfolio" onClick={() => {setDisplay(true); setNavi("portfolio")}}>
                    Portfolio
                </div> </> 
                : <><div className="back" onClick={handleBack}>Back</div>
            <div className={`display-panel ${navi}`}>
                <Display />
            </div> </>}
        </div>
    )
}

function TechLine(props) {
    let techList = [
        { tech: "CSS", icon: <SiCss3 /> },
        { tech: "JavaScript", icon: <SiJavascript /> },
        { tech: "HTML", icon: <SiHtml5 /> },
        { tech: "Bootstrap", icon: <SiBootstrap /> },
        { tech: "React", icon: <SiReact /> },
        { tech: "MongoDB", icon: <SiMongodb /> },
        { tech: "MySQL", icon: <SiMariadb /> }
    ];
  
    console.log(techList);
    return (
      <div className="tech-block">
        {techList.map((tech) => {
          let techClass = "";
          for (let i = 0; props.tagList.length > i; i++) {
            if (props.tagList[i] === tech.tech) {
              techClass = "tech-used";
            }
          }
          console.log(techClass);
          return <span className={`tech-icons ${techClass}`}>{tech.icon}</span>;
        })}
      </div>
    );
  }
