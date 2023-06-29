import React, { useState } from "react";
import "./splash.css";
import {animated, useSpring, useSprings, useInView} from "@react-spring/web";

export default function Splash(props) {
    const { display } = props;
    const splashName = [...'Stephen Cardie'];
    const positionString = "Fullstack Web Developer";
    
    const springs = useSpring({
      from: { opacity: 0 },
      to: { opacity: 1},
    })
    
    return (
      <>
        <div className={`splash`}>
          <div className={`splash-box`}>
            {/* <h1 className={`splash-name`}> */}
            {splashName.map((letter, i) => {
              let delay = 0.5 * i+1;
              delay = delay + "s";
              console.log(delay);
              return(
                // <animated.span className="letters" style={{'--delay': delay}}>{letter}</span>
              <animated.span style={{
                'font-family': 'Righteous',
                'font-size': '8cqw',
                'color': 'white',
                'position': 'relative',
                ...springs,
              
              }}>{letter}</animated.span>
              )
            })}
            {/* </h1> */}
          </div>
          <div className={`splash-position`}>
            <span className="position-string">{positionString}</span>
          </div>
        </div>
      </>
    );
  }