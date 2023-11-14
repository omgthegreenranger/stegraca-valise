import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./styles.css";

export function Mastermind() {
  const [gameOn, setGameOn] = useState(false);
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
          <GameOn />
          <Button onClick={() => setGameOn(false)}>End Game </Button>
        </>
      ) : (
        <Button onClick={() => setGameOn(true)}>BEGIN GAME</Button>
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
    return (
      <div class="game-board">
        <div className="colour-options">
          {colours.map((colour, i) => (
            <div
              className="colour-option"
              style={{ "backgroundColor": colour }}
            >
              &nbsp;
            </div>
          ))}
        </div>
        <div className=""></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
}
