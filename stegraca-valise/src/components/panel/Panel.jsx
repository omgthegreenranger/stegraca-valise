import React, { useState, useEffect } from "react";
import "./panel.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IoLogoJavascript } from "react-icons/io";
import {
  DiCss3,
  DiHeroku,
  DiHtml5,
  DiJsBadge,
  DiBootstrap,
  DiMongodb,
  DiMysql,
  DiGithub,
  DiReact,
} from "react-icons/di";
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
    const { navi, setNavi } = props;
    const handleBack = () => {
        setNavi("none");
    }
    const Display = () => { 
    switch(navi) {
        case "about":
            return(
                <>
                    <Bio />
                    <div onClick={handleBack}>Back</div>
                </>
            )
        case "portfolio":
            return(
                <>
                    <Projects tags={tags} setTags={setTags} /> 
                    <div onClick={handleBack}>Back</div>
                </>
            )
        default:
            return(
                <></>
            )

    }
}


    return (
        <>
            <div className="link-block">
                <div className="link-text" onClick={() => setNavi("about")}>
                    About
                </div>
                <TechLine tagList={tags} />
                <div className="link-text" onClick={() => setNavi("portfolio")}>
                    Portfolio
                </div>
            </div>
            <div className="display-panel">
                <Display />
            </div>
            </>
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
