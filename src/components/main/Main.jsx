import React, { useState, useRef, useEffect } from "react";
import { Button, Tabs, Tab } from "react-bootstrap";
import "./main.css";
import { SlArrowLeft } from "react-icons/sl";
import { FaUserSecret } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useAnimate, AnimatePresence, usePresence, motion, useMotionValue } from "framer-motion";
import { Bio, Portfolio, Demos, Contact } from '../index'
import { SwitchTransition, CSSTransition } from 'react-transition-group'

export default function Main({ frontNav, setFrontNav }) {
    const [navOpt, setNavOpt] = useState("none")
    const [hoverOpt, setHoverOpt] = useState("none")
    const [selectedComp, setSelectedComp] = useState();


    const navTo = (e) => {
        // e.target.id === navOpt ? setSelectedComp(true) : setSelectedComp(false)
        setSelectedComp(!selectedComp)
        console.log(navOpt, frontNav)
        setNavOpt(e.target.id);
        console.log(navOpt, frontNav)
    }

    function handleMouseOver(option) {
        console.log(option)
        setHoverOpt(this);
        console.log(frontNav, navOpt, hoverOpt)
    }

    const handleMouseLeave = (e) => {
        setHoverOpt(e.target.id)
        console.log(frontNav, navOpt, hoverOpt)


    }

    return (
        <div className="front-layout">
            <div className="front-splash">
                {/* <div className="front-welcome">Welcome to</div> */}
                <div className="front-title">
                    <div className="front-craft craft">Cardie</div><div className="front-craft craft">Craft</div>
                </div>
                <div className="front-tag">Imagining a tomorrow of today, yesterday!</div>
            </div>
            {/* <div className="front-business"> */}
                <div className="front-bus-left"></div>
                <div className="front-bus-center">
                    {/* Disabled the following until Enter/Leave is figured out properly */}
                    {/* <ul className="front-select" onMouseEnter={() => handleMouseOver(this)} onMouseLeave={handleMouseLeave} onClick={navTo}> */}
                    <ul className="front-select" onClick={navTo}>
                        <li id="home" className="front-option">Home</li>
                        <li id="about" className="front-option">About</li>
                        <li id="portfolio" className="front-option">Portfolio</li>
                        <li id="blog" className="front-option">Blog</li>
                        <li id="doings" className="front-option">Demos</li>
                        <li id="contact" className="front-option">Contact</li>
                    </ul>
                </div>
                <div className="front-bus-right">
                    <SelectedItem key="dialog" navOpt={navOpt} frontNav={frontNav} setFrontNav={setFrontNav} selectedComp={selectedComp} setSelectedComp={setSelectedComp} />
                </div>
                <div style={{gridColumn: "4/5"}}></div>
            {/* </div> */}
        </div>
    )
}

function SelectedItem({ navOpt, frontNav, setFrontNav, selectedComp, setSelectedComp }) {
    console.log(navOpt, selectedComp);
    let middleDiv;
    let headline;
    if (navOpt === 'home') { middleDiv = <h1>HOME</h1>; headline = ""}
    if (navOpt === 'about') { middleDiv = <Bio />; headline="Stephen Cardie"}
    if (navOpt === 'portfolio') { middleDiv = <Portfolio />; headline="Stephen Cardie - Fullstack Web Developer"}
    if (navOpt === 'doings') { middleDiv = <Demos />; headline="Try some things"}
    if (navOpt === 'blog') { middleDiv = <h1>BLOG</h1>; headline="Cardieblog"}
    if (navOpt === 'contact') { middleDiv = <Contact position="panel" />; headline="Contact Stephen"}
    const noRef = useRef(null)

    const nodeRef = noRef
    console.log(nodeRef)
    return (
        <SwitchTransition>
            <CSSTransition
                key={selectedComp}
                nodeRef={nodeRef}
                addEndListener={(done) => {nodeRef.current.addEventListener("transitionend", done, false)}}
                classNames='slide-fade'>
                <div ref={nodeRef} className="front-right-panel">
                <div className="portfolio-headline">{headline}</div>
                    {middleDiv}
                </div>
            </CSSTransition>
        </SwitchTransition>
    )
}


// If frontNav is true, default to Home;
// If frontNav is false, compare middleDivto selectedComp