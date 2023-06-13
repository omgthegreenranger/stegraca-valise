import React, { useState, useEffect } from "react";
import "./linkblock.css";
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
 import { IconContext } from "react-icons";

export default function Linkblock(props) {
    const { display, setDisplay, navi, setNavi, tags, setTags } = props;
    const handleBack = () => {
        setDisplay(false);
        setNavi(false);
    }
    return(
        <div className="linkblock">
            {display ? 
            <><div className="back" onClick={handleBack}>Back</div></>
            :
            <>
            <div className="link-text page-about" onClick={() => {setDisplay(true); setNavi("about")}}>
                About
            </div>
                <TechLine tagList={tags} />
            <div className="link-text page-portfolio" onClick={() => {setDisplay(true); setNavi("portfolio")}}>
                Portfolio
            </div></>}
        </div>
    );

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