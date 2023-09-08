import React from "react";
import "./splash.css";
import { Linkblock } from "../index";
import {animated, useSpring, useSprings, useTrail, easings} from "@react-spring/web";

export default function Splash(props) {
    const { display, tags, setTags, portOpen, setPortOpen } = props;
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
        <div className={portOpen ? "splash shrunk" : "splash grown"}>
          <div className="splash-box">
            <div className="splash-name">
            {springs.map((springs, key) => {
            return(
              <animated.span className="splash-name" key={key} style={{
                ...springs}}>
                {splashName[key]}
              </animated.span>
            )})}
            </div>
          </div>
          <div className="position-string">
            <div>
            <span>{positionString}</span>
            </div>
          </div>
          <Linkblock tags={tags} setTags={setTags} />
        </div>
      </>
    );
  }