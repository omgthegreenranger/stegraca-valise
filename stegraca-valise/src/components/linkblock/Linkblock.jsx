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
import {
  animated,
  useSpring,
  useSprings,
  useTrail,
  easings,
} from "@react-spring/web";

export default function Linkblock(props) {
  const { display, setDisplay, tags } = props;

  return (
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
    { tech: "React-Native", icon: <TbBrandReactNative /> },
  ];
  const [techs] = useTrail(
    techList.length, () => ({
      from: { opacity: 0, transform: 'rotate3d(0, 1, 0, 0deg)' },
      to: { opacity: 1, transform: 'rotate3d(0, 1, 0, 720deg)'},
      delay: 1000,
      duration: 150,
    }),
    []
  );

  const handleTechClick = (tech) => {
    return <></>;
  };
  return (
    <div className={`tech-block`}>
      {techs.map((tech, key) => {
        let techClass = "";
        for (let i = 0; props.tagList.length > i; i++) {
          if (props.tagList[i] === techList[key].tech) {
            techClass = "tech-used";
          }
        }
        console.log(tech);
        console.log(techList[key].icon);
        console.log(techs);
        return (
          // <div>
          // {/* {techClass === "tech-used" ? <div>{tech.tech}</div> : <></>} */}
          <animated.div
            className={`tech-icons ${techClass}`}
            style={{
              ...tech,
            }}
            onClick={() => {
              setDisplay(true);
              handleTechClick(techList[key].tech);
            }}
          >
            {techList[key].icon}
          </animated.div>
          // {/* </div> */}
        );
      })}
    </div>
  );
}
