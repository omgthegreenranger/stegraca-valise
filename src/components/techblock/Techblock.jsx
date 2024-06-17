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
import { useAnimate, stagger, motion} from "framer-motion";

export default function Techblock(props) {
  const { isLoaded, hoverWork } = props;


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

  const list = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.10,
        ease: "backOut"
      },
    },
    hidden: {
      x: 5,
      opacity: 0,
      transition: {
        ease: "circIn"
      },
    },
  }

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 300 },
  }

  return (
    <motion.div className="tech-block"
      initial="hidden"
      animate="visible"
      variants={list}
    >
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
          <motion.div variants={item} className={usedIcon} key={key}>
            {techs.icon}
          </motion.div>
        );
      })}
    </motion.div>
  );
}
