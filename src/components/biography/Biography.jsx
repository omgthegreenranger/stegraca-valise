import React, { useState, useRef, useEffect, useTransition } from "react";
import * as ReactDOM from 'react-dom';
import ProfilePic from "./images/profile-photo-small.jpg";
import "./biography.css";
import { Mastermind } from "../index";
import bio_text from './bio.json';
// import {
//   animated, useTrail, SpringValue, useSpring, useSprings, useChain, useSpringRef, useTransition
// } from "@react-spring/web";
import { motion, useTime, AnimatePresence, useAnimationControls, useAnimate } from "framer-motion";


export default function Bio({ peepingTom }) {
  const [bioPanel, setBioPanel] = useState(false);
  console.log(peepingTom);
  return (
    <>
      {!bioPanel ? (
        peepingTom ? (
          <div className="bio-mobile bio-closed">READ ABOUT ME</div>
        ) : (
          <BioText setBioPanel={setBioPanel} />
        )
      ) : (
        <BioMind setBioPanel={setBioPanel} />
      )}
    </>
  );
}

function BioText({ setBioPanel }) {
  let bioText = bio_text["biography"]
  const [dropArray, setDropArray] = useState([]);
  const bioPlace = [];

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
  // console.log(dropArray)

  // console.log(bioPlace)
  const dropRandom = dropArray.sort(() => Math.random() - 0.5)
  const [isPending, startTransition] = useTransition();

  function launchApp() {
    startTransition(() => {
      dropRandom.map((drop, i) => {
        let delay = (i + 1) / 100;
        console.log(delay)
        document.getElementById(drop[0]).style.transitionDelay = delay + "s"
        document.getElementById(drop[0]).classList.replace("bio-visible", "bio-invisible");
      console.log("Done!")
      console.log(isPending, "In function")
    })
    }
    )
    console.log("We're done!")
    setBioPanel(true)
    
  }

  return (
    <>
      <div className="bio-block">
        <div className="bio-text">
          {bioPlace.map((para, i) => {
            // console.log(para)
            return (
                <p 
                  // variants={container}
                  // initial="show"
                  // animate="hidden"
                  id={i}>
                  {para.map((word, j) => {
                    if (word[1].includes(":link:")) {
                      return <span className="mastermind" id={word[0]} onClick={() => launchApp(bioPlace)}>Mastermind.</span>
                    } else {
                      return (
                        <span className="bio-words bio-visible" id={word[0]}>{word[1]} </span>

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

function BioMind({ setBioPanel }) {
  return (
    <Mastermind setBioPanel={setBioPanel} location="biomind" />
  );
}
