import React, { useState } from "react";
import * as ReactDOM from 'react-dom';
import ProfilePic from "./images/profile-photo-small.jpg";
import "./biography.css";
import { Mastermind } from "../index";
import bio_text from './bio.json';
import {
  animated, useTrail, SpringValue, useSpring, useSprings, useChain, useSpringRef, useTransition
} from "@react-spring/web";

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
  
  const bioLink = <span className="mastermind" onClick={() => launchApp(bioPlace)}>Mastermind</span>

  bioText.map((para, i) => {
    let bioWords = para.split(" ");
    bioWords.map((word, j) => {
      let wordId = i + "-" + j;
      // console.log(wordId)

      let wordly = [wordId, word];
      // setDropArray([...dropArray, wordId])
      dropArray.push([wordId])
      console.log("Here")
      // console.log(wordly);
      bioWords[j] = wordly
      return wordly;

    })
    // console.log(bioWords)

    bioPlace[i] = bioWords
    return bioWords
  })
  console.log(dropArray)
  // console.log(bioPlace)

  function launchApp() {
    console.log("App Launched!")

    setBioPanel(true);
    const dropID = () => {
      let dropTile = Math.floor(Math.random() * dropArray.length)
      console.log(dropArray[dropTile])
    }
    console.log(dropID())
  }

  return (
    <>
      <div className="bio-block">
        <div className="bio-text">
          {bioPlace.map((para, i) => {
            // console.log(para)
            return (<p id="i">
              {para.map(word => {
                if (word[1].includes(":link:")) {
                  return <span className="mastermind" onClick={() => launchApp(bioPlace)}>Mastermind</span>
                } else {
                  return (
                    <span className="bio-visible" id={word[0]}>{word[1]} </span>

                  )
                }
              }
              )}

            </p>)
          })}
          {/* <p>
            STEPHEN CARDIE is a fullstack web developer as a second career, and
            is also a{" "}
            <span className="mastermind" onClick={() => launchApp()}>
              Mastermind
            </span>
            .
          </p>
          <p>
            Spending over a decade on the client-facing, sales-enabling side of
            tech, it became very apparent that his motivation was about creating
            tools to make the job easier than the sales job itself.
          </p>
          <p>Clearly, he should be doing that instead.</p>
          <p>
            He is available for support work, code refactoring, or to help you
            build that feature.
          </p> */}
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
