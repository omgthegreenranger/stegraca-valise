import React, { useState } from "react";
import "./techblock.css";
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
import {
  // animated,
  // useSprings,
  // useSpring,
  // useTrail,
  // easings,
  // useChain,
  // useSpringRef,
  // useTransition,
  // easeInBounce,
} from "@react-spring/web";

export default function Techblock(props) {
  const { isLoaded, hoverWork } = props;

  // const attributes = { fill: "red", stroke: "black" };
  // const options = {
  //   x: 0,
  //   y: 0,
  //   fontSize: 72,
  //   anchor: "top",
  //   attributes: attributes,
  // };

  return <TechLine hoverWork={hoverWork} />;
}

function TechLine(props) {
  const { hoverWork } = props;
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

  return (
    <div className="tech-block">
      {techList.map((techs, key) => {
        let usedIcon = "tech-icons";
        if (hoverWork) {
          for (let i = 0; i < hoverWork.length; i++) {
            if (hoverWork[i] === techs.tech) {
              usedIcon = "tech-icons tech-used";

            }
          }
        }
        return (
            <div className={usedIcon} key={key}>
              {techs.icon}
            </div>
        );
      })}
    </div>
  );
}
