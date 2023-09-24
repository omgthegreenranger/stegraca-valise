import React, {useState} from "react";
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
import { animated, useSprings, useTrail, easings } from "@react-spring/web";

export default function Linkblock(props) {
  const { stack } = props;

  const attributes = {fill: 'red', stroke: 'black'};
  const options = {x: 0, y: 0, fontSize: 72, anchor: 'top', attributes: attributes};

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



  const [spinning] = useTrail(techList.length,
    () => ({
    from: { transform: "rotate3d(0,0,0,0deg)", opacity: 0 },
    to: { transform: "rotate3d(0,1,0, 720deg)", opacity: 1 },
  }), []
  )

  const [bouncein] = useSprings(techList.length,
    () => (
      {
      from: { transform: "scale(0.0", opacity: 0 },
      to: { transform: "scale(1.0", opacity: 1 },
      config: {
        easings: easings.easeInBounce(5),
          duration: 200
          }
        })
    )

  const handleTechClick = (tech) => {



  return <></>;
  };

  const [techMouse, setTechMouse] = useState([false, '']);
  console.log(techMouse); 
  return (
    <div style={{
      gridArea: "tech",
      display: "flex",
      flex: '0 0',
      flexDirection: "row",
      justifyContent: "space-evenly",
      containerType: "inline-size",
    }}>
      {/* {techList.map((tech, key) => { */}
      {spinning.map((props, key) => {
        return(
          <animated.div
            className="tech-icons"
            key={key}
            style={props}
            onMouseEnter={() => setTechMouse([true, key])}
            onMouseLeave={() => setTechMouse([false, ''])}
          >
            {techList[key].icon}
            {/* <div className="tech-name">
          {techMouse[0] && techMouse[1] === key ? techList[key].tech : <></>}</div>
           */}
          </animated.div>

      )}
      )
  }
    </div>
  );
}
