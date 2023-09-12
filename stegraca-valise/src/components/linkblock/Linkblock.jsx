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
  SiExpo,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { IconContext } from "react-icons";

export default function Linkblock(props) {
  const { display, setDisplay, tags, lbRight } = props;

  return (
    <div ref={lbRight}>
      <TechLine tagList={tags} display={display} setDisplay={setDisplay} />
    </div>
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
    { tech: "React-Native", icon: <TbBrandReactNative /> },
  ];

  const handleTechClick = (tech) => {
    return <></>;
  };
  return (
    <div className={`tech-block`}>
      {techList.map((tech, key) => {
        let techClass = "";
        return (
          <div
            className={`tech-icons ${techClass}`}
            key={key}
            onClick={() => {
              setDisplay(true);
              handleTechClick(techList[key].tech);
            }}
            style={{'--i': key}}
          >
            {techList[key].icon}
          </div>
        );
      })}
    </div>
  );
}
