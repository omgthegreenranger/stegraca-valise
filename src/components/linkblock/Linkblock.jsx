import React, { useState } from "react";
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
import {
  animated,
  useSprings,
  useSpring,
  useTrail,
  easings,
  useChain,
  useSpringRef,
  useTransition,
  easeInBounce,
} from "@react-spring/web";

export default function Linkblock(props) {
  const { stack, isLoaded, setIsLoaded, hoverWork } = props;

  const attributes = { fill: "red", stroke: "black" };
  const options = {
    x: 0,
    y: 0,
    fontSize: 72,
    anchor: "top",
    attributes: attributes,
  };

  return <TechLine isLoaded={isLoaded} hoverWork={hoverWork} />;
}

function TechLine(props) {
  const { isLoaded, hoverWork } = props;
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

  const [iconType, setIconType] = useState(true);

  const spinning = useSpringRef();
  const bouncein = useSpringRef();
  const spinout = useSpringRef();
  const spinin = useSpringRef();

  // const [spin] = useTrail(techList.length,
  //   () => ({
  //     ref: spinning,
  //   from: { transform: "rotate3d(0,0,0,0deg)", opacity: 0 },
  //   to: { transform: "rotate3d(0,1,0, 720deg)", opacity: 1 },
  //   onRest: () => setIconType(current => !current),
  // }), []
  // )

  // const [iconTrans, iconAPI] = useTransition(
  //   techList,
  //   () => ({
  //     ref: spinout,
  //     initial: {
  //       transformer: "scale(1.0)",
  //       transform: "rotate3d(0,1,0, 0deg)",
  //       opacity: 1,
  //     },
  //     from: {
  //       transformer: "scale(1.0)",
  //       transform: "rotate3d(0,1,0, 0deg)",
  //       opacity: 1,
  //     },
  //     enter: {
  //       transform: "scale(1.0)",
  //       transform: "rotate3d(0,1,0, 720deg)",
  //       opacity: 1,
  //     },
  //     update: { transform: "scale(1.0)", transform: "rotate3d(0,1,0, 720deg)", opacity: 1, },
  //     onStart: () => console.log("starting!"),
  //     // delay: key => 50 * key,
  //   }),
  //   techList
  // );

  // const [bounce] = useTrail(techList.length, () => ({
  
  //   from: { transform: "scale(0.5)", opacity: 0 },
  //   to: { transform: "scale(1.0)", opacity: 1},
  //   onRest: () => {spinout.start()}
  // }), []);


  const handleTechClick = (tech) => {
    return <></>;
  };

  const [techMouse, setTechMouse] = useState([false, ""]);
  // iconAPI.start();
  return (
    <div
      style={{
        gridArea: "tech",
        display: "flex",
        flex: "0 0",
        flexDirection: "row",
        justifyContent: "space-evenly",
        containerType: "inline-size",
      }}
    >
           {techList.map((techs, key) => {
            let usedIcon = "tech-icons"; 
            if(hoverWork) {
            for(let i = 0; i < hoverWork.length; i++) {
              if (hoverWork[i] === techs.tech) usedIcon = "tech-icons tech-used"
            }
          }
        return (
            <div
            className={usedIcon}
            // style={props}
            key={key}
          >
           
            {techs.icon}
           
          </div>
        )})}
      {/* {bounce.map((props, item) => {
        const techItem = techList[item];
        // const classNames = hoverWork.map(tech => {
        //   if(tech == techItem.tech) {
        //   return("tech-icons, tech-used")}
        //   else {
        //     "tech-icons"}
        //   })
        console.log(item);
        return (
            <animated.div
            className="tech-icons"
            style={props}
            key={item}
          >
      {/* {iconTrans((spins, item) => {
        console.log(item)
        const techItem = techList[item]; */}
        {/* return ( */}
          {/* <animated.div
            className="tech-icons"
            style={spins}
            onMouseEnter={() => setTechMouse([true, item])}
            onMouseLeave={() => setTechMouse([false, ""])}
          > */}
           
            {/* {techItem.icon} */}
           
          {/* </animated.div> */}
      {/* </animated.div> */}
        {/* )})} */}
    </div>
)}

