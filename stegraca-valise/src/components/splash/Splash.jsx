import React, { useState } from "react";
import "./splash.css";
import {animated, useSpring, useSprings, useTrail, easings} from "@react-spring/web";
import { Linkblock } from "../index";


export default function Splash(props) {
    const { display, tags, setTags } = props;
    const splashName = [...'Stephen Cardie'];
    const positionString = "Fullstack Web Developer";
    const [springs] = useTrail(splashName.length, i => ({
      from: { opacity: 0, bottom: '3em' },
      to: { opacity: 1, bottom: '0em' },
      config: { tension: 400,
        bounce: 2,
        }
      }),[])
    
    return (
      <>
        <div className={`splash`}>
          <div className={`splash-box`}>
            <div className="splash-name">
            {springs.map((springs, key) => {
              console.log(springs, key, splashName[key])
            return(
              <animated.span className="splash-name" style={{
                ...springs}}>
                {splashName[key]}
              </animated.span>
            )})}
            
            
            </div>
          </div>
          <div>
          <div className={`splash-position`}>
            <span className="position-string">{positionString}</span>
          </div>
          <div>
            <Linkblock tags={tags} setTags={setTags} direction="horiz" />
          </div>
          </div>
        </div>
      </>
    );
  }