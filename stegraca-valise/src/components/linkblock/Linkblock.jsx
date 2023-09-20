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
import {Zoom, AttentionSeeker } from "react-awesome-reveal";

export default function Linkblock(props) {
  
  return (
      <TechLine />
  );
}


function TechLine(props) {
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
    <div className="tech-block">
      {/* <Zoom cascade stagger={2} triggerOnce={true}>
        <AttentionSeeker effect="headShake"> */}
      {techList.map((tech, key) => {

        return (
          <div
            className="tech-icons"
            key={key}
          >
            {tech.icon}
          </div>
        );
      })}
      {/* </AttentionSeeker>
    </Zoom> */}
    </div>
  );
}
