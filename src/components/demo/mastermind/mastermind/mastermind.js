// Import React and necessary components/styles
import React, { useState, useRef, useEffect } from "react";
import { Button } from "react-bootstrap";
import "./styles.css";
import { codeMaker, codeBreaker } from "./mastermind/assets/scripts/board.js";
import { SlArrowLeft } from "react-icons/sl";

// Main Mastermind component
export function Mastermind() {
  // State variables
  const [gameOn, setGameOn] = useState(false);
  const [newGame, setNewGame] = useState(true);
  const [results, setResults] = useState([]);

  // Sort results in reverse order
  const reversedResults = results.sort((a, b) => {
    return b[3] - a[3];
  });

  // Colour options for the game
  const colours = [
    "#EE4266",
    "#FFD23F",
    "#610F7F",
    "#2E5EAA",
    "#86836D",
    "#05A8AA",
  ];

  // Function to start or restart the game
  const startGame = (e) => {
    setGameOn((prevState) => !prevState);
    setNewGame(true);
    localStorage.removeItem("CodeGame");
    console.log("Game On!", gameOn, "New Game?", true);
    setResults([]);
  };

  // JSX structure of the Mastermind component
  return (
    <div>
      <div>
        <SlArrowLeft />
      </div>
      <div>
        <MasterSplash />
      </div>
      <Button onClick={startGame}>
        {gameOn ? "Begin Game" : "Restart Game"}
      </Button>
      <GameBoard
        gameOn={gameOn}
        results={results}
        setResults={setResults}
        reversedResults={reversedResults}
        colours={colours}
        setNewGame={setNewGame}
        newGame={newGame}
      />
    </div>
  );
}

// Gameboard component
function GameBoard({
  // Props
  gameOn,
  results,
  setResults,
  reversedResults,
  colours,
  setNewGame,
  newGame,
}) {
  // determine win state of the round.
  let winState;
  if (!reversedResults[0]) {
    winState = 1;
  } else {
    winState = reversedResults[0][2];
  }

  // JSX structure to display board or win banners
  function BoardDeploy({
    // Props
    results,
    setResults,
    colours,
    reversedResults,
    setNewGame,
    newGame,
  }) {
    // Check win state to render accordingly

    if (winState === 0) {
      console.log("Awww, you lose!");
      return (
        <>
          <div>GAME OVER, YOU LOSE</div>
        </>
      );
    } else if (winState === 1) {
      return (
        <>
          <GameOn
            setResults={setResults}
            colours={colours}
            setNewGame={setNewGame}
            newGame={newGame}
          />
          <GameHistory
            results={results}
            colours={colours}
            reversedResults={reversedResults}
          />
        </>
      );
    } else if (winState === 2) {
      console.log("Congrats, you win!");
      return (
        <>
          <div>CONGRATULATIONS, YOU WON</div>
        </>
      );
    }
  }

  // JSX structure of the game board/banners
  return (
    <>
      {gameOn ? (
        <div>Click the button to start!</div>
      ) : (
        <BoardDeploy
          results={results}
          setResults={setResults}
          colours={colours}
          reversedResults={reversedResults}
          setNewGame={setNewGame}
          newGame={newGame}
        />
      )}
    </>
  );
}

// Splash title component
function MasterSplash() {
  return (
    <>
      <div className="master-splash">MASTERMIND</div>
      <div className="master-slash">MASTERMIND</div>
    </>
  );
}

// Component for running the game
function GameOn({
  // Props
  setResults,
  newGame,
  setNewGame,
  colours,
}) {
  const [choices, setChoices] = useState([null, null, null, null]);
  const [allChosen, setAllChosen] = useState(false);

  // Submit your guess

  function handleSubmit() {
    console.log("Submitting!");
    setNewGame(false);
    let codeResult = codeBreaker(choices);
    setResults(codeResult);
    setChoices([null, null, null, null]);
    setAllChosen(false);
  }

  // If it is a new game, create secret code and change NewGame
  if (newGame === true) {
    console.log("Creating code");
    codeMaker();
    setNewGame(false);
  }

  // JSX structure for the game board
  return (
    <div className="game-board">
      {allChosen === true ? (
        <Button onClick={() => handleSubmit()}>Submit Code</Button>
      ) : (
        <></>
      )}
      <GameChoices
        choices={choices}
        setChoices={setChoices}
        setAllChosen={setAllChosen}
        colours={colours}
      />
    </div>
  );
}

// Show round history and scores

function GameHistory({
  // Props
  reversedResults,
  colours,
}) {
  // JSX structure of round history
  return (
    <>
      {reversedResults.map((hist, i) => {
        return (
          <div className="history-round">
            <div className="round-number">{hist[3]}</div>
            <div className="round-guesses">
              {hist[0].map((guess, i) => {
                return (
                  <div style={{ backgroundColor: colours[guess] }}>
                    {colours[guess]}
                  </div>
                );
              })}
            </div>
            <div className="round-scores">
              {hist[1].map((score, i) => {
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

// Game selection component

function GameChoices({
  // Props
  choices, setChoices, setAllChosen, colours }) {
  const [show, setShow] = useState();


  // How we handle the colour-selection popover
  const handlePopover = (i) => {
    let guessRound = Array.from(choices);
    show.nextSibling.style.display = "none";

    guessRound.map((guess, key) => {
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

  // Confirm all boxes selected; prevent Submit if not
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

  // Handle popover open
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

  // This is the popover JSX.
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

  // JSX for the four-box selection
  return (
    <>
      <div className="colour-selection">
        <div className="colour-selectBox" id="choice0">
          <div
            className="colour-selector"
            id="0"
            onClick={handleClick}
            style={{ backgroundColor: colours[choices[0]] }}
          >
            &nbsp;
          </div>
          <div className="colour-popover" style={{ display: "none" }}>
            {popover}
          </div>
        </div>
        <div className="colour-selectBox" id="choice1">
          <div
            className="colour-selector"
            id="1"
            onClick={handleClick}
            style={{ backgroundColor: colours[choices[1]] }}
          >
            &nbsp;
          </div>
          <div className="colour-popover" style={{ display: "none" }}>
            {popover}
          </div>
        </div>
        <div className="colour-selectBox" id="choice2">
          <div
            className="colour-selector"
            id="2"
            onClick={handleClick}
            style={{ backgroundColor: colours[choices[2]] }}
          >
            &nbsp;
          </div>
          <div className="colour-popover" style={{ display: "none" }}>
            {popover}
          </div>
        </div>
        <div className="colour-selectBox" id="choice3">
          <div
            className="colour-selector"
            id="3"
            onClick={handleClick}
            style={{ backgroundColor: colours[choices[3]] }}
          >
            &nbsp;
          </div>
          <div className="colour-popover" style={{ display: "none" }}>
            {popover}
          </div>
        </div>
      </div>
    </>
  );
}