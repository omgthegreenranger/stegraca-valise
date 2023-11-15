import React, { useState, useRef } from "react";
import { Button } from "react-bootstrap";
// import OverlayTrigger from "react-bootstrap/OverlayTrigger";
// import Popover from "react-bootstrap/Popover";
import "./styles.css";

export function Mastermind() {
  const [gameOn, setGameOn] = useState(false);
  const [choices, setChoices] = useState(["", "", "", ""]);
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
      <div className="game-board">
        <div className=""></div>
        <GameChoices />
        <div></div>
        <SideBar />
        <div></div>
      </div>
    );
  }

  function GameHistory(props) {
    var history = localStorage.getItem("CodeGame");

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
    const [choiceToggle, setChoiceToggle] = useState(false);
    const hidePopover = (i) => {
      console.log("This worked!");
      let obj = document.getElementById(i);
      console.log(obj.parentElement);
    };
    function Popover(props) {
      <div className="colour-selector">
        <div className="colour-popover">
          {colours.map((colour, i) => (
            <div
              style={{ backgroundColor: colour }}
              id={i}
              key={i}
              onClick={() => hidePopover(i)}
            >
              &nbsp
            </div>
          ))}
        </div>
      </div>;
    }
    return (
      <div className="colour-selection">
        <div>
          <div className="colour-selector" id="0"></div>
          <Popover id="0"/>
        </div>
        <div>
          <div className="colour-selector" id="1"></div>
          <Popover id="1" />
        </div>
        <div>
          <div className="colour-selector" id="2"></div>
          <Popover id="2" />
        </div>
        <div>
          <div className="colour-selector" id="3"></div>
          <Popover id="3" />
        </div>
      </div>
    );
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
