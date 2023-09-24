import React from "react";
import {
  animated, useTrail, SpringValue, useSpring, useSprings
} from "@react-spring/web";
import "./splash.css";
import { NavBar, Bio } from "../index";

export default function Splash(props) {
  const { thingsOpen, setThingsOpen, scrollYProgress } = props;
  
  const [trails] = useSpring(
    () => ({
    from: { opacity: 0},
    to: { opacity: 1},
    duration: 500
    }),[]
  )

  const splashBundle = [<animated.div className="splash-hello" style={props}>Hello, my name is</animated.div>,
  <animated.div className="splash-name-1" style={props}>Stephen</animated.div>,
  <animated.div className="splash-name-2" style={props}>Cardie</animated.div>,
  <animated.div className="splash-i-am" style={props}>I am a</animated.div>,
  <animated.div className="splash-position" style={props}>Full Stack Developer</animated.div>]


  return (
    <>
      <div
        className=
          "splash-container splash-hide"
      >        
      <animated.div className="splash splash-top" style={trails}>
<animated.div className="splash-hello" style={trails}>Hello, my name is</animated.div>
  <animated.div className="splash-name-1" style={trails}>Stephen</animated.div>
  <animated.div className="splash-name-2" style={trails}>Cardie</animated.div>
  <animated.div className="splash-i-am" style={trails}>I am a</animated.div>
  <animated.div className="splash-position" style={trails}>Full Stack Developer</animated.div>
          {/* <div className="splash-hello">Hello, my name is</div>
          <div className="splash-name-1">Stephen</div>
          <div className="splash-name-2">Cardie</div>
          <div className="splash-i-am">I am a</div>
          <div className="splash-position">Full Stack Developer</div> */}
        </animated.div>
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
