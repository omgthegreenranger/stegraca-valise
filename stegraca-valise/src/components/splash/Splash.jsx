import React, {useRef, useEffect} from "react";
import "./splash.css";
import { Linkblock } from "../index";
import {
  animated,
  useSpring,
  useSprings,
  useTrail,
  easings,
  useChain,
  useSpringRef
} from "@react-spring/web";

export default function Splash(props) {
  const { display, tags, setTags, portOpen, setPortOpen } = props;
  const splashName = [..."Stephen Cardie"];
  const positionString = 'Fullstack Web Developer';
  const [splash] = useTrail(
    splashName.length,
    (i) => ({
      from: { opacity: 0, bottom: "3em" },
      to: { opacity: 1, bottom: "0em"},
      config: { tension: 400, bounce: 2 },
    }),
    []
  );

    const lbRight = useRef(null);
    const slideIn = useSpringRef();
    const slideBack = useSpringRef();
//   const positionOne = useSpring({
//       ref: "slideIn",
//       from: { x: "-100%" },
//       to: { x: "200%" },
//       config: {delay: "700"}
//     })

//   const positionTwo = useSpring({
// ref: "slideBack",
// from: { x : "200%" },
// to: { x: "0%" }
//   })

// useChain([slideIn, slideBack])

const [position, api] = useSprings(
  2,
  ()=> ({
          from: { x: "-100%" },
      to: { x: "200%" },
      config: {delay: "700"}
  })
)


  return (
    <>
      <div className={portOpen ? "splash shrunk" : "splash grown"}>
        <div className="splash-box">
          <div className="splash-name">
            {splash.map((springs, key) => {
              return (
                <animated.span
                  className="splash-name"
                  key={key}
                  style={{
                    ...springs,
                  }}
                >
                  {splashName[key]}
                </animated.span>
              );
            })}
          </div>
        </div>
        <div className="position-string">
                {/* <animated.div
                className="position-string"
                  style={
                    positionOne
                  }
                >
                  <animated.div
                  className="position-string"
                  style={positionTwo}
                  > */}

            {positionString}
            {/* </animated.div>
                </animated.div> */}
        </div>
        <Linkblock tags={tags} setTags={setTags} lbRight={lbRight} />
      </div>
    </>
  );
}
