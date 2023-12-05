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

  const reversedResults = results.sort((a, b) => {return b[3] - a[3]})

  console.log(results, reversedResults);
  const colours = [
    "#EE4266",
    "#FFD23F",
    "#610F7F",
    "#2E5EAA",
    "#86836D",
    "#05A8AA",
  ];
  return (
    <div>
      <MasterSplash />
      {gameOn ? (
        <>
          <Button
            onClick={() => {
              setGameOn(false);
              setNewGame(true);
              setResults([]);
            }}
          >
            Restart Game{" "}
          </Button>
          <GameBoard results={results} setResults={setResults} reversedResults = {reversedResults} colours={colours} setNewGame = {setNewGame} newGame={newGame} />
        </>
      ) : (
        <Button
          onClick={() => {
            localStorage.removeItem("CodeGame");
            setGameOn(true);
            setNewGame(true);
            // setAllChosen(false);
          }}
        >
          BEGIN GAME
        </Button>
      )}
    </div>
  );
}

function GameBoard(props) {
  const {results, setResults, reversedResults, colours, setNewGame, newGame} = props;

  console.log(results.sort((a, b) => { return b[3] - a[3]}))
  return (
    <>
      <GameOn setResults={setResults} colours={colours} setNewGame = {setNewGame} newGame={newGame} />
      <GameHistory results={results} colours ={colours} reversedResults={reversedResults} />
    </>
  )
}

function MasterSplash(props) {
  return (
    <>
      <div className="master-splash">MASTERMIND</div>
      <div className="master-slash">MASTERMIND</div>
    </>
  );
}

function GameOn(props) {
  const { setResults, newGame, setNewGame, colours } = props;
  const [choices, setChoices] = useState([null, null, null, null]);
  const [allChosen, setAllChosen] = useState(false);

  function handleSubmit() {
    console.log("Submitting!");
    setNewGame(false);
    let codeResult = codeBreaker(choices);
    setResults(codeResult);
    setChoices([null, null, null, null]);
    setAllChosen(false);
  }
  if (newGame === true) {
    codeMaker();
  }
  return (
    <div className="game-board">
      {allChosen === true ? (
        <Button onClick={() => handleSubmit()}>Submit Code</Button>
      ) : (
        <></>
      )}
      <div className=""></div>
      <GameChoices
        choices={choices}
        setChoices={setChoices}
        setAllChosen={setAllChosen}
        colours = {colours}
      />
      <div></div>
      {/* <SideBar /> */}
    </div>
  );
}

function GameHistory(props) {
  const { results, reversedResults, colours } = props;
  console.log("Hello!", reversedResults);
  return (
    <>
      {reversedResults.map((hist, i) => {
        console.log(hist);
        return (
          <div className="history-round">
            <div class="round-number">{hist[3]}</div>
            <div className="round-guesses">
              {hist[0].map((guess, i) => {
                console.log(guess);
                return (
                  <div style={{ backgroundColor: colours[guess] }}>
                    {colours[guess]}
                  </div>
                );
              })}
            </div>
            <div className="round-scores">
              {hist[1].map((score, i) => {
                console.log(score);
                let scorePip;
                if (score === 1) scorePip = "white";
                if (score === 2) scorePip = "black";

                return (
                  <div
                    className="score-pip"
                    style={{ backgroundColor: scorePip }}
                  >
                    {" "}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
}

function GameChoices(props) {
  const { choices, setChoices, setAllChosen, colours } = props;
  const [show, setShow] = useState();
  console.log(colours)

  const handlePopover = (i) => {
    let guessRound = Array.from(choices);
    console.log(colours[i], show);

    // show.style.backgroundColor = colours[i];
    show.nextSibling.style.display = "none";

    guessRound.map((guess, key) => {
      console.log(guess, key, parseInt(show.id));
      if (key === parseInt(show.id)) {
        return (guessRound[key] = i);
      } else {
        return guessRound[key];
      }
    });

    setChoices(guessRound);
    console.log("GC - Guess array", guessRound);
    let checkedGuess = submitCheck(guessRound);
    if (checkedGuess === true) {
      console.log("All are true!", checkedGuess);
      setAllChosen(true);
    }
  };

  function submitCheck(guesses) {
    for (let i = 0; i < guesses.length; i++) {
      var chosen = "";
      if (guesses[i] === null) {
        chosen = false;
        break;
      } else {
        chosen = true;
        continue;
      }
    }
    return chosen;
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
        );
      })}
    </div>
  );
console.log(colours[choices[0]])
  return (
    <>
      <div className="colour-selection">
        <div className="colour-selectBox" id="choice0">
          <div className="colour-selector" id="0" onClick={handleClick} style={{backgroundColor: colours[choices[0]]}}>
            &nbsp;
          </div>
          <div className="colour-popover" style={{ display: "none" }}>
            {popover}
          </div>
        </div>
        <div className="colour-selectBox" id="choice1" >
          <div className="colour-selector" id="1" onClick={handleClick} style={{backgroundColor: colours[choices[1]]}}>
            &nbsp;
          </div>
          <div className="colour-popover" style={{ display: "none"}}>
          {popover}
          </div>
        </div>
        <div className="colour-selectBox" id="choice2">
          <div className="colour-selector" id="2" onClick={handleClick} style={{backgroundColor: colours[choices[2]]}}>
            &nbsp;
          </div>
          <div className="colour-popover" style={{ display: "none" }}>
          {popover}
          </div>
        </div>
        <div className="colour-selectBox" id="choice3">
          <div className="colour-selector" id="3" onClick={handleClick} style={{backgroundColor: colours[choices[3]]}}>
            &nbsp;
          </div>
          <div className="colour-popover" style={{ display: "none" }}>
          {popover}
          </div>
        </div>
      </div>
      <div></div>
      {/* <ChoiceDisplay /> */}
    </>
  );
}

// function SideBar(props) {
//     return (
//       <div className="colour-options">
//         {colours.map((colour, i) => (
//           <div className="colour-option" style={{ backgroundColor: colour }}>
//             &nbsp;
//           </div>
//         ))}
//       </div>
//     );
//   }
