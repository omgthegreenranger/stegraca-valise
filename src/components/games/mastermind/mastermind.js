import React, { useState, useRef, useEffect } from "react";
import { Button } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import "./styles.css";
import { codeMaker, codeBreaker } from ".//mastermind/assets/scripts/board.js";

export function Mastermind() {
  const [gameOn, setGameOn] = useState(false);
  const [newGame, setNewGame] = useState(true);
  const [results, setResults] = useState([]);
  const [allChosen, setAllChosen] = useState(false)
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
      {gameOn ? (
        <>
          <Button
            onClick={() => {
              setGameOn(false);
              setNewGame(true);
            }}
          >
            End Game{" "}
          </Button>
          <GameOn />
        </>
      ) : (
        <Button
          onClick={() => {
            localStorage.removeItem("CodeGame");
            setGameOn(true);
            setNewGame(true);
            setChoices([null, null, null, null]);
            setAllChosen(false)
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
    if (newGame === true) {
      codeMaker();
    }
    return (
      <div className="game-board">
        <div className=""></div>
        <GameChoices />
        <div></div>
        {/* <SideBar /> */}
        <GameHistory results = {results} />
      </div>
    );
  }

  function GameHistory(props) {
    const { results } = props;
    console.log("Hello!", results);
    return (
      <>
        {results.map((hist, i) => {
          console.log(hist) 
          return (
          <div className="history-round">
            <div className="round-guesses">
            {hist[0].map((guess, i) => {console.log(guess)
              return (
                <div style={{ backgroundColor: colours[guess] }}>
                  {colours[guess]}
                </div>
              );
            })}
            </div>
            <div className="round-scores">
              {hist[1].map((score, i) => {
                console.log(score)
                let scorePip;
              if (score === 1) scorePip = "white";
              if (score === 2) scorePip = "black";
              
              return(                
                <div className="score-pip" style={{ backgroundColor: scorePip }}> </div>
              )
            }
                
              )}
              </div>
          </div>
        )})}
      </>
    );
  }

  function GameChoices(props) {
    const [show, setShow] = useState();
    // const [choices, setChoices] = useState([null, null, null, null]);
    
    const handlePopover = (i) => {
      let guessRound = Array.from(choices)
      console.log(colours[i], show)

      show.style.backgroundColor = colours[i];
      show.nextSibling.style.display = "none";

      guessRound.map((guess, key) => {
        console.log(guess, key, parseInt(show.id))
        if(key === parseInt(show.id)) {
      return guessRound[key] = i;
      } else {
        return guessRound[key] = guessRound[key]
      }
    } )
    console.log(guessRound)
    setChoices(guessRound)
    console.log(choices)
    submitCheck(guessRound);
    };

    function submitCheck(guesses) {
      let chosen;
      for (let i = 0; i < guesses.length; i++) {
        if (guesses[i] === null ) {
          chosen = false;  
          continue
        } else {
          chosen = true;
          continue
        }
        break;
      }
      setAllChosen(chosen)

    }

    function handleClick(e) {
      setShow(e.target);
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
      console.log("Submitting!");
      setNewGame(false);
      let codeResult = codeBreaker(choices);
      setResults(codeResult);
      setChoices([null, null, null, null])
      setAllChosen(false)
    }

    const popover = (
      <div>
        {colours.map((colour, i) => { 
        return (
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
        )})}
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
          {/* {allChosen === true ?  */}
          <Button onClick={() => handleSubmit()}>Submit Code</Button> 
          {/* : <></>} */}
        </div>
        {/* <ChoiceDisplay /> */}
      </>
    );
  }

  // function ChoiceDisplay() {
  //   <div style={{ border: "0px solid, black" }}>
  //     {useEffect(() => {
  //       choices.map((choice) => <div>{choice}</div>);
  //     }, [])}
  //   </div>;
  // }

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
