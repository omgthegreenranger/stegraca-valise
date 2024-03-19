import React, { useState } from "react";
import ReactDOM from 'react-dom';
import { Tab, Tabs } from "react-bootstrap";
import { GiSpy } from "react-icons/gi";
import { Mastermind, MasterSplash } from "./mastermind/mastermind";
import { SlArrowLeft } from "react-icons/sl";
import './styles.css';

export default function Demos() {
    // enableDemo can take the key of the selected demo to enable the new component.
    const [enablePortal, setEnablePortal] = useState(false);
    const [enableGame, setEnableGame] = useState("none");


    return (
        <div className="demo-block">
            {/* This should be the main portal */}
            {!enablePortal && enableGame === "none" ? <DemoList enablePortal = {enablePortal} setEnablePortal = {setEnablePortal} setEnableGame={setEnableGame} enableGame={enableGame} /> : <DemoPortal enablePortal = {enablePortal} setEnablePortal = {setEnablePortal} setEnableGame={setEnableGame} enableGame={enableGame} />}
        </div>
        )

}


function DemoList({enablePortal, setEnablePortal, enableGame, setEnableGame}) {
return (
    <div className="demo-list">
    {/* This is the list of demos available to us */}
<div onClick={() => {setEnablePortal(!enablePortal); setEnableGame("mastermind")}}>
<MasterSplash />
</div>
</div>
)
}

function DemoPortal({enablePortal, setEnablePortal, enableGame, setEnableGame}) {

    return (
        <>
        <div onClick={
            () => {setEnablePortal(!enablePortal); setEnableGame("none")}}><SlArrowLeft /></div>
        <div className="demo-portal">
        {/* This will be the portal in to which the selected game will load. */}
    </div>
    </>
    )
}