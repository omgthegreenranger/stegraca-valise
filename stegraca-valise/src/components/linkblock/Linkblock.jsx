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
  const { stack, isLoaded, setIsLoaded } = props;

  const attributes = { fill: "red", stroke: "black" };
  const options = {
    x: 0,
    y: 0,
    fontSize: 72,
    anchor: "top",
    attributes: attributes,
  };

  return <TechLine isLoaded={isLoaded}/>;
}

function TechLine(props) {
  const { isLoaded } = props;
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

  const [iconTrans, iconAPI] = useTransition(
    techList,
    () => ({
      ref: spinout,
      initial: {
        transformer: "scale(1.0)",
        transform: "rotate3d(0,1,0, 0deg)",
        opacity: 1,
      },
      from: {
        transformer: "scale(1.0)",
        transform: "rotate3d(0,1,0, 0deg)",
        opacity: 1,
      },
      enter: {
        transform: "scale(1.0)",
        transform: "rotate3d(0,1,0, 720deg)",
        opacity: 1,
      },
      update: { transform: "scale(1.0)", transform: "rotate3d(0,1,0, 720deg)", opacity: 1, },
      onStart: () => console.log("starting!"),
      // delay: key => 50 * key,
    }),
    techList
  );

  const [bounce] = useTrail(techList.length, () => ({
    // ref: bouncein,
    from: { transform: "scale(0.5)", opacity: 0 },
    to: { transform: "scale(1.0)", opacity: 1},
    // leave: { transform: "scale(1)", opacity: 1 },
    // config: { duration: 150, easing: {bounce: 3, precision: 2}},
    onRest: () => {spinout.start()}
  }), []);

  // console.log(bounce);
  // useChain([bouncein, spinout], [0,1], 1)

  const handleTechClick = (tech) => {
    return <></>;
  };

  // if(isLoaded) {bouncein.start(); console.log(isLoaded)}

  const [techMouse, setTechMouse] = useState([false, ""]);
  // iconAPI.start();
  console.log(techMouse);
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
      {bounce.map((props, item) => {
        const techItem = techList[item];
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
           
            {techItem.icon}
           
          </animated.div>
      // </animated.div>
        )})}
    </div>
)}

