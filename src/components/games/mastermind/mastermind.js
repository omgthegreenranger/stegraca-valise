import React, { useState, useRef, useEffect } from "react";
import { Button } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import "./styles.css";

export function Mastermind() {
  const [gameOn, setGameOn] = useState(false);
  const [choices, setChoices] = useState([]);
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
        {/* <SideBar /> */}
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
    const [show0, setShow0] = useState(false)
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const [popped, setPopped] = useState('');

    const handlePopover = (close, i) => {
      console.log(i, close, popped)
      console.log(colours[i])
      if(close === true) {
        let chosen = "choice" + popped;
        let choice = document.getElementById(chosen);
        choice.style.backgroundColor = colours[i];
        console.log("Choice", choice)
      } else if(close === false) {
        console.log(popped)
      }
      switch (popped) {
        case 0: 
          setShow0((prev) => !prev);
          break;
        case 1:
          setShow1((prev) => !prev);
          break;
        case 2:
          setShow2((prev) => !prev);
          break;
        case 3:
          setShow3((prev) => !prev);
          break;
      }
  }
    const popover = (
      <Popover id="popover-basic">
        <Popover.Header as="h3">Popover right</Popover.Header>
        <Popover.Body>
          {colours.map((colour, i) => (
            <div
              style={{ backgroundColor: colour }}
              id={`chosen${i}`}
              key={i}
              onClick={() => {handlePopover(i, true);}}
            >
              {" "}
              &nbsp;
            </div>
          ))}
        </Popover.Body>
      </Popover>
    );
    return (
      <div className="colour-selection">
        <OverlayTrigger trigger="click" placement="bottom" overlay={popover} show={show0} id="0" 
        onToggle={
          () => 
          {setPopped(0); handlePopover(false, '')}
          }>
          <div className="colour-selector" id="choice0"></div>
        </OverlayTrigger>
        <OverlayTrigger trigger="click" placement="bottom" overlay={popover} show={show1} id="1" onToggle={() => {setPopped(1); handlePopover(1, false);}}>
          <div className="colour-selector" id="choice1"></div>
        </OverlayTrigger>
        <OverlayTrigger trigger="click" placement="bottom" overlay={popover} show={show2} id="2" onToggle={() => {setPopped(2); handlePopover(2, false);}}>
          <div className="colour-selector" id="choice2"></div>
        </OverlayTrigger>
        <OverlayTrigger trigger="click" placement="bottom" overlay={popover} show={show3} id="3" onToggle={() => {setPopped(3); handlePopover(3, false);}}>
          <div className="colour-selector" id="choice3"></div>
        </OverlayTrigger>
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
