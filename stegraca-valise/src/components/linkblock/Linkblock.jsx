import React from "react";
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
    SiReact,
    SiPython,
    SiExpo
 } from "react-icons/si";
 import { TbBrandReactNative } from "react-icons/tb";
 import { IconContext } from "react-icons";

export default function Linkblock(props) {
    const { display, setDisplay, tags } = props;

    return(

            <>            
                <TechLine tagList={tags} display={display} setDisplay={setDisplay} />
            </>
    );

}

function TechLine(props) {
  const { display, setDisplay } = props;
    let techList = [
        { tech: "Bootstrap", icon: <SiBootstrap /> },
        { tech: "CSS", icon: <SiCss3 /> },
        { tech: "Expo", icon: <SiExpo /> },
        { tech: "HTML", icon: <SiHtml5 /> },
        { tech: "JavaScript", icon: <SiJavascript /> },
        { tech: "MongoDB", icon: <SiMongodb /> },
        { tech: "MySQL", icon: <SiMariadb /> },
        { tech: "Python", icon: <SiPython /> },
        { tech: "React", icon: <SiReact /> },
        { tech: "React-Native", icon: <TbBrandReactNative />},
    ];
  
  const handleTechClick = (tech) => {
    return (
      <>
      </>
    )
  }
    return (
      <div className={`tech-block`}>
        {techList.map((tech) => {
          let techClass = "";
          for (let i = 0; props.tagList.length > i; i++) {
            if (props.tagList[i] === tech.tech) {
              techClass = "tech-used";
            }
          }
          return <span className={`tech-icons ${techClass}`} onClick={() => {setDisplay(true); handleTechClick(tech.tech)}}>{tech.icon}</span>;
        })}
      </div>
    );
  }