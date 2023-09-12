import React, { useRef, useEffect } from "react";
import "./splash.css";
import { Linkblock } from "../index";
import {
  animated,
  useSpring,
  useSprings,
  useTrail,
  easings,
  useChain,
  useSpringRef,
} from "@react-spring/web";

export default function Splash(props) {
  const { display, tags, setTags, portOpen, setPortOpen } = props;
  const splashName = "Stephen Cardie";
  const positionString = "Fullstack Web Developer";

  return (
    <>
      {/* <div className="splash shrunk"> */}
        <div className={portOpen ? "splash shrunk" : "splash grown"}>
        <div className="splash-box">
          <div className="splash-name">
            {splashName}
          </div>
        </div>
        <div className="position-string">{positionString}</div>
      </div>
    </>
  );
}
