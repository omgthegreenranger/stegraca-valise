// Import React and necessary components/styles
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./mastermind.css";
import { codeMaker, codeBreaker } from "./mastermind/scripts/board.js";
import { SlArrowLeft } from "react-icons/sl";
import { FaUserSecret } from "react-icons/fa";
import { IconContext } from "react-icons";
import { motion } from "framer-motion";

// Main Mastermind component
export function Mastermind({ setBioPanel, location, nodeRef, setMindProp, setInProp, launchApp }) {
  // State variables
  const [gameOn, setGameOn] = useState(false);
  const [newGame, setNewGame] = useState(true);
  const [results, setResults] = useState([]);
  const [secretCode, setSecretCode] = useState([]);
  // Colour options for the game
  const colours = [
    "#EE4266",
    "#FFD23F",
    "#610F7F",
    "#2E5EAA",
    "#86836D",
    "#05A8AA",
  ];

  return (
    <>
      <MasterSplash setBioPanel={setBioPanel} location={location} setMindProp={setMindProp} setInProp={setInProp} launchApp={launchApp} />
      <GameControls gameOn={gameOn} location={location} setGameOn={setGameOn} newGame={newGame} setNewGame={setNewGame} results={results} setResults={setResults} secretCode={secretCode} setSecretCode={setSecretCode} />
      <GameBoard
        gameOn={gameOn}
        results={results}
        setResults={setResults}
        colours={colours}
        setNewGame={setNewGame}
        newGame={newGame}
        secretCode={secretCode}
        setSecretCode={setSecretCode}
        location={location} />
    </>
  )
}

export function MasterSplash({ setBioPanel, location, setMindProp, setInProp, launchApp }) {
  return (
    <>
      <div className={location + '-head'}>
        <IconContext.Provider value={{className: "master-logo"}}>
          <FaUserSecret />
        </IconContext.Provider>
        <div className="master-splash">MASTERMIND</div>
        <div className="master-dots"><svg viewBox="0 0 615 100" xmlns="https://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="50" />
          <circle cx="151" cy="50" r="50" />
          <circle cx="252" cy="50" r="50" />
          <circle cx="353" cy="50" r="50" />
          <circle cx="454" cy="50" r="50" />
          <circle cx="555" cy="50" r="50" />
          </svg></div>
      </div>
    </>
  );
}

function GameControls({ gameOn, setGameOn, location, setSecretCode, secretCode, newGame, setNewGame, results, setResults }) {

  const startGame = (e) => {
    setGameOn(!gameOn);
    setSecretCode(codeMaker());
    setNewGame(!newGame);
    // localStorage.removeItem("CodeGame");
    setResults(JSON.parse(localStorage.getItem("CodeGame")));
    console.log(secretCode);
    console.log("results", results)
  };
  return (
    <>
      {gameOn ? <><p>You have <b>12 rounds</b> to guess the Mastermind's code!</p><Button className={location + '-button-text'} onClick={startGame}>Restart</Button></> : <Button className={location + '-button-text'} onClick={startGame}>Begin</Button>}
    </>
  )
}


function GameBoard({ gameOn, results, setResults, colours, setNewGame, newGame, secretCode, setSecretCode, location }) {
  // This controls the various states of the playing field. GameOn and GameRun.
  return (
    <>
      {gameOn ? <GameOn
        gameOn={gameOn}
        results={results}
        setResults={setResults}
        // reversedResults={reversedResults}
        colours={colours}
        setNewGame={setNewGame}
        newGame={newGame}
        secretCode={secretCode}
        setSecretCode={setSecretCode}
        location={location} /> : <GameRun />}
    </>
  )
}

function GameRun() {
  return (
    <div>
      <h6>CLICK THE BUTTON TO BEGIN</h6>
    </div>

  )
}

function GameOn({ gameOn, results, setResults, colours, setNewGame, newGame, secretCode, setSecretCode, location }) {
  // Playing field!
  const [choices, setChoices] = useState([null, null, null, null]);
  const [allChosen, setAllChosen] = useState(false);

  function handleSubmit() {
    console.log("Submitting!");
    setNewGame(false);
    let codeResult = codeBreaker(choices, secretCode);
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
  return (
    <>
      <GameChoices choices={choices} setChoices={setChoices} setAllChosen={setAllChosen} colours={colours} handleSubmit={handleSubmit}/>
      <GameHistory results={results} colours={colours} location={location} />
    </>
  )
}


function GameHistory({
  // Props
  results,
  colours,
  location
}) {
  // JSX structure of round history

  // Sort results in reverse order
  var reversedResults = []

  try {
    reversedResults = results.sort((a, b) => {
      return b[3] - a[3];
    })
  }
  catch {
    reversedResults = results
  }
  console.log(results)

  return (
    <div className={location + '-history'}>
      {reversedResults.map((hist, i) => {
        return (
          <div className="history-round" key={i}>
            <div className="round-number">{hist[3]}</div>
            <div className="round-guesses">
              {hist[0].map((guess, i) => {
                return (
                  <div className="colour-selector" style={{ backgroundColor: colours[guess], width:"15cqw", height: "15cqw", borderRadius: "18cqw"}}>
                  </div>
                );
              })}
            </div>
            <div className="round-scores">
              {hist[1].map((score, i) => {
                let scorePip;
                if (score === 1) scorePip = "white";
                if (score === 2) scorePip = "black";
                if (score === 0) scorePip = "empty";

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
    </div>
  );
}

// Game selection component

function GameChoices({
  // Props
  choices,
  setChoices,
  setAllChosen,
  colours,
  handleSubmit
}) {
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
        <div className="roundSubmit" onClick={() => handleSubmit()}>SUBMIT</div>
      </div>

    </>
  );
}


// Gameboard component
// function GameBoard({
//   // Props
//   gameOn,
//   results,
//   setResults,
//   // reversedResults,
//   colours,
//   setNewGame,
//   newGame,
//   secretCode,
//   setSecretCode,
//   location
// }) {
//   // Sort results in reverse order
//   const resultsPrep = () => {
//     if (newGame === true) {
//       return results
//     } else if (newGame === false) {
//       results.sort((a, b) => {
//         return b[3] - a[3];
//       })
//     }
//   }

//   const reversedResults = resultsPrep;
//   console.log(reversedResults)
//   // determine win state of the round.
//   let winState;
//   if (!reversedResults[0]) {
//     winState = 1;
//   } else {
//     winState = reversedResults[0][2];
//   }

//   // JSX structure to display board or win banners
//   function BoardDeploy({
//     // Props
//     results,
//     setResults,
//     colours,
//     reversedResults,
//     setNewGame,
//     newGame,
//     secretCode,
//     setSecretCode,
//     location
//   }) {
//     // Check win state to render accordingly

//     if (winState === 0) {
//       console.log("Awww, you lose!");
//       return (
//         <>
//           <div>GAME OVER, YOU LOSE</div>
//         </>
//       );
//     } else if (winState === 1) {
//       return (
//         <>
//           <GameOn
//             setResults={setResults}
//             colours={colours}
//             setNewGame={setNewGame}
//             newGame={newGame}
//             secretCode={secretCode}
//             setSecretCode={setSecretCode}
//           />
//           <GameHistory
//             results={results}
//             colours={colours}
//             reversedResults={reversedResults}
//             location={location}
//           />
//         </>
//       );
//     } else if (winState === 2) {
//       console.log("Congrats, you win!");
//       return (
//         <>
//           <div>CONGRATULATIONS, YOU WON</div>
//         </>
//       );
//     }
//   }

//   // JSX structure of the game board/banners
//   return (
//     <>
//       {!gameOn && newGame ? (
//         <></>
//       ) : (
//         <BoardDeploy
//           results={results}
//           setResults={setResults}
//           colours={colours}
//           reversedResults={reversedResults}
//           setNewGame={setNewGame}
//           newGame={newGame}
//           secretCode={secretCode}
//           setSecretCode={setSecretCode}
//           location={location}
//         />
//       )}
//     </>
//   );
// }

// // Component for running the game
// function GameOn({
//   // Props
//   setResults,
//   newGame,
//   setNewGame,
//   colours,
//   secretCode,
//   setSecretCode,
// }) {
//   const [choices, setChoices] = useState([null, null, null, null]);
//   const [allChosen, setAllChosen] = useState(false);
//   console.log("LOOK HERE!", secretCode);
//   // Submit your guess

//   function handleSubmit() {
//     console.log("Submitting!");
//     setNewGame(false);
//     let codeResult = codeBreaker(choices, secretCode);
//     setResults(codeResult);
//     setChoices([null, null, null, null]);
//     setAllChosen(false);
//   }

//   // If it is a new game, create secret code and change NewGame
//   if (newGame === true) {
//     console.log("Creating code");
//     codeMaker();
//     setNewGame(false);
//   }

//   // JSX structure for the game board
//   return (
//     <div className="game-board">
//       {allChosen === true ? (
//         <Button onClick={() => handleSubmit()}>Submit Code</Button>
//       ) : (
//         <></>
//       )}
//       <GameChoices
//         choices={choices}
//         setChoices={setChoices}
//         setAllChosen={setAllChosen}
//         colours={colours}
//         secretCode={secretCode}
//         setSecretCode={setSecretCode}
//       />
//     </div>
//   );
// }

// Show round history and scores
