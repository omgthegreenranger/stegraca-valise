import React, { useState, useRef, useEffect } from "react";
import { Button } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import "./styles.css";
import { codeMaker, codeBreaker } from "./board.js";

export function Mastermind() {
  const [gameOn, setGameOn] = useState([false, true]);
  const [choices, setChoices] = useState([null, null, null, null]);
  const colours = [
    "#EE4266",
    "#FFD23F",
    "#610F7F",
    "#2E5EAA",
    "#86836D",
    "#05A8AA",
  ];
  //   function gameBoard() {}
  return (
    <div>
      <MasterSplash />
      {gameOn[0] ? (
        <>
          <Button onClick={() => setGameOn([false, true])}>End Game </Button>
          <GameOn />
        </>
      ) : (
        <Button
          onClick={() => {
            setGameOn([true, true]);
            setChoices([null, null, null, null]);
          }}
        >
          BEGIN GAME
        </Button>
      )}
    </div>
  );

  function MasterSplash(props) {
    return (
      <>
        <div className="master-splash">MASTERMIND</div>
        <div className="master-slash">MASTERMIND</div>
      </>
    );
  }

  function GameOn(props) {
    if(gameOn[1] === true) {
    codeMaker();
    }
    console.log(gameOn)
    return (
      <div className="game-board">
        {gameOn[1] === false ? 
        <GameHistory /> : <div></div>
  }
        <div className=""></div>
        <GameChoices />
        <div></div>
        {/* <SideBar /> */}
        <div></div>
      </div>
    );
  }

  function GameHistory(props) {
    var history = JSON.parse(localStorage.getItem("CodeGame"));
    console.log("Hello!", history)
    return (
      <>
        {history.map((hist, i) => (
          <div>
            <div style={{ backgroundColor: hist[i][1] }}></div>
            <div></div>
          </div>
        ))}
      </>
    );
  }

  function GameChoices(props) {
    const [show0, setShow0] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [popped, setPopped] = useState("");
    const [show, setShow] = useState();

    const handlePopover = (i) => {
      show.style.backgroundColor = colours[i];
      show.nextSibling.style.display = "none";
      choices[show.id] = i;
      console.log(choices)
      submitCheck();
    };

    function submitCheck() {
      for(let i = 0; i < choices.length; i++) {
        if(choices[i]) {
          console.log("Yes!")
          break;
        } else {
          console.log("No!")
        }
        break;
      }

    };

    function handleClick(e) {
      setShow(e.target);
      setPopped(e.target.id);
      let elementArray = Array.from(
        document.getElementsByClassName("colour-popover")
      );

      const closePop = (obj) => {
        obj.style.display = "none";
      };

      elementArray.forEach((element, key) => {
        if (parseInt(e.target.id) === key) {
          element.style.display = "block";
        } else {
          closePop(element);
        }
      });
    }

    function handleSubmit() {
      console.log("Submitting!")
      gameOn[1] = false;
      let codeResult = codeBreaker(choices)
      console.log(codeResult, gameOn)

    }

    const popover = (
      <div>
        {colours.map((colour, i) => (
          <div
            style={{ backgroundColor: colour }}
            id={show}
            key={i}
            onClick={() => {
              handlePopover(i);
            }}
          >
            {" "}
            &nbsp;
          </div>
        ))}
      </div>
    );

    return (
      <>
        <div className="colour-selection">
          <div className="colour-selectBox" id="choice0">
            <div className="colour-selector" id="0" onClick={handleClick}>
              &nbsp;
            </div>
            <div className="colour-popover" style={{ display: "none" }}>
              {popover}
            </div>
          </div>
          <div className="colour-selectBox" id="choice1">
            <div className="colour-selector" id="1" onClick={handleClick}></div>
            <div className="colour-popover" style={{ display: "none" }}>
              {popover}
            </div>
          </div>
          <div className="colour-selectBox" id="choice2">
            <div className="colour-selector" id="2" onClick={handleClick}></div>
            <div className="colour-popover" style={{ display: "none" }}>
              {popover}
            </div>
          </div>
          <div className="colour-selectBox" id="choice3">
            <div className="colour-selector" id="3" onClick={handleClick}></div>
            <div className="colour-popover" style={{ display: "none" }}>
              {popover}
            </div>
          </div>
        </div>
        <div>
        <Button
          onClick={() => handleSubmit()
          }
        >Submit Code</Button>
        </div>
        <ChoiceDisplay />
      </>
    );
  }

  function ChoiceDisplay() {
    <div style={{ border: "0px solid, black" }}>
      {useEffect(() => {
        choices.map((choice) => <div>{choice}</div>);
      }, [])}
    </div>;
  }

  function SideBar(props) {
    return (
      <div className="colour-options">
        {colours.map((colour, i) => (
          <div className="colour-option" style={{ backgroundColor: colour }}>
            &nbsp;
          </div>
        ))}
      </div>
    );
  }
}
