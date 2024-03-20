import React, {useState} from "react";
import ProfilePic from "./images/profile-photo-small.jpg";
import "./biography.css";
import {Mastermind} from "../index";
import { SlArrowLeft } from "react-icons/sl";

export default function Bio({peepingTom}) {
  const [bioPanel, setBioPanel] = useState(false);
  // const { peepingTom } = props;
  console.log(peepingTom)
  return (
    <>
    {!bioPanel ? 
      peepingTom ? 
        <div className="bio-mobile bio-closed">
          READ ABOUT ME
        </div>
      :
        <BioText setBioPanel={setBioPanel} />
   : <BioMind setBioPanel={setBioPanel} />}
    </>
  );
}

function BioText({setBioPanel}) {
  return (
    <>
        <div className="bio-block">
          <div className="bio-text">
          <p>STEPHEN CARDIE is a fullstack web developer as a second career, and is also a <span className="mastermind" onClick={() => setBioPanel(true)}>Mastermind</span>.</p>
          <p>
            Spending over a decade on the client-facing, sales-enabling side of
            tech, it became very apparent that his motivation was about creating
            tools to make the job easier than the sales job itself.
          </p>
          <p>Clearly, he should be doing that instead.</p>
          <p>
            He is available for support work, code refactoring, or to help you
            build that feature.
          </p>
          </div>
          <div className="bio-photos">
            <img src={ProfilePic} className="imager" alt="Taken by enfysphotography" />
          </div>
        </div>
    </>
  );
}

function BioMind({setBioPanel}) {
  return(
  <>
  <div><span onClick={() => setBioPanel(false)}><SlArrowLeft /></span></div>
  <Mastermind />
  </>)
}