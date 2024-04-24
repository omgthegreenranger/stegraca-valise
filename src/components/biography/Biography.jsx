import React, { useState, useRef, useEffect } from "react";
import * as ReactDOM from 'react-dom';
import ProfilePic from "./images/profile-photo-small.jpg";
import "./biography.css";
import { Mastermind } from "../index";
import bio_text from './bio.json';
import { Transition, CSSTransition } from 'react-transition-group';
// import {
//    animated, useTrail, SpringValue, useSpring, useSprings, useChain, useSpringRef, useTransition
// } from "@react-spring/web";
// import { motion, useTime, AnimatePresence, useAnimationControls, useAnimate } from "framer-motion";


export default function Bio({ peepingTom }) {
  const [bioPanel, setBioPanel] = useState(false);
  const [inProp, setInProp] = useState(true);
  const [mindProp, setMindProp] = useState(false);
  const nodeRef = useRef(null);
  const mindRef = useRef(null);
  console.log(peepingTom);

  const launchApp = () => {
    console.log(inProp)
    setInProp(!inProp)
    setMindProp(!mindProp)
  }
  return (
    <>
      {!bioPanel ? (
        peepingTom ? (
          <div className="bio-mobile bio-closed">READ ABOUT ME</div>
        ) : (
          <CSSTransition
            nodeRef={nodeRef}
            in={inProp}
            timeout={1000}
            classNames="biopanel"
            appear
            mountOnEnter
            unmountOnExit
            onExited={() => setBioPanel(true)}>
            <BioText setBioPanel={setBioPanel} inProp={inProp} setInProp={setInProp} nodeRef={nodeRef} setMindProp={setMindProp} launchApp={launchApp} />
          </CSSTransition>
        )
      ) : (
        <CSSTransition
          nodeRef={mindRef}
          in={mindProp}
          timeout={1000}
          classNames="masterpanel"
          appear
          mountOnEnter
          unmountOnExit
          onExited={() => setBioPanel(false)}>
          {/* <BioMind setBioPanel={setBioPanel} mindProp={mindProp} setInProp={setInProp} setMindProp={setMindProp} mindRef={mindRef} launchApp={launchApp} /> */}
          <Mastermind setBioPanel={setBioPanel} location="biomind" nodeRef={mindRef} mindProp={mindProp} setMindProp={setMindProp} setInProp={setInProp} launchApp={launchApp} />
        </CSSTransition>

      )}
    </>
  );
}

function BioText({ setBioPanel, nodeRef, inProp, setInProp, setMindProp, launchApp }) {
  let bioText = bio_text["biography"]
  const [dropArray, setDropArray] = useState([]);
  const bioPlace = [];
  // const [inProp, setInProp] = useState(true);
  // const nodeRef = useRef(null);

  bioText.map((para, i) => {
    let bioWords = para.split(" ");
    bioWords.map((word, j) => {
      let wordId = i + "-" + j;
      let wordly = [wordId, word];
      dropArray.push([wordId])
      bioWords[j] = wordly
      return wordly;

    })

    bioPlace[i] = bioWords
    return bioWords
  })
  const dropRandom = dropArray.sort(() => Math.random() - 0.5)

  const duration = 300;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  }

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };
  return (
    <>
      <div className="bio-block" ref={nodeRef}>

        <div className="bio-text">
          {bioPlace.map((para, i) => {
            // console.log(para)
            return (
              <p
                id={i}
                key={i}>
                {para.map((word, j) => {
                  if (word[1].includes(":link:")) {
                    return <span className="mastermind" key={j} id={word[0]} onClick={launchApp}>Mastermind.</span>
                  } else {
                    return (
                      <span className="bio-words bio-visible" key={j} id={word[0]}>{word[1]} </span>

                    )
                  }
                }
                )}

              </p>
            )
          })}
        </div>
        <div className="bio-photos">
          <img
            src={ProfilePic}
            className="imager"
            alt="Taken by enfysphotography"
          />
        </div>
      </div>
    </>
  );
}

function BioMind({ setBioPanel, mindRef, mindProp, setMindProp, setInProp, launchApp }) {
  return (
    <Mastermind setBioPanel={setBioPanel} location="biomind" nodeRef={mindRef} mindProp={mindProp} setMindProp={setMindProp} setInProp={setInProp} launchApp={launchApp} />
  );
}
