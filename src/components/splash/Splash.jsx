import React, {useState} from "react";
import {Button} from "react-bootstrap";
import {
  animated, useTrail, SpringValue, useSpring, useSprings, useChain, useSpringRef, useTransition
} from "@react-spring/web";
import "./splash.css";
import { NavBar, Bio } from "../index";

export default function Splash(props) {
  const { thingsOpen, setThingsOpen, scrollYProgress, setIsLoaded } = props;
  const [sampleState, setSampleState] = useState(true);
const splash1 = useSpringRef();
const splash2 = useSpringRef();

  // const springSplash = useSpring({
  //   ref: splash1,
  //   from: {opacity: 1, textShadow: "red 0px 0px 10px"},
  //   to: async (next, cancel) => {
  //     await next({opacity: 1, textShadow: "blue 0px 0px 10px"})
  //     await next({opacity: 1, textShadow: "red 0px 0px 10px"})
  //   },
  //   loop: true,
  // }
  // )

  const splashBundle = [["splash-hello", "Hello, my name is"],
  ["splash-name-1","Stephen"],
  ["splash-name-2", "Cardie"],
  ["splash-i-am", "I am a"],
  ["splash-position", "Full Stack Developer"]]

  splashBundle.sort(() => Math.random() - 0.5)

  const [splashAppear] = useTrail(splashBundle.length,
    ()=> ({
  from: { opacity: 0, left: "-150px", position: "relative"},
  to: {opacity: 1, left: "0px"},
  delay: 1000,
  onRest: () => setIsLoaded(true)
}), [])

// useChain([splash2, splash1])

console.log(sampleState)

  return (
    <>
      <div
        className=
          "splash-container splash-hide"
      >
        <animated.div className="splash splash-top">

      {splashAppear.map((splash, key) => (
        
        <animated.div className={splashBundle[key][0]} style={splash}>{splashBundle[key][1]}</animated.div>       
      ))}
      </animated.div>
      {/* <animated.div className="splash splash-top" style={splashAppear}>
<animated.div className="splash-hello" style={springSplash}>Hello, my name is</animated.div>
  <animated.div className="splash-name-1" style={springSplash}>Stephen</animated.div>
  <animated.div className="splash-name-2" style={springSplash}>Cardie</animated.div>
  <animated.div className="splash-i-am" style={springSplash}>I am a</animated.div>
  <animated.div className="splash-position" style={springSplash}>Full Stack Developer</animated.div>
        </animated.div> */}
        <div className="splash-contact port-on">
          <div className="splash-nav">
            <NavBar />
          </div>
        </div>
        <block className="splash-linkblock port-on">
          <Bio />
        </block>
      </div>
    </>
  );
}
