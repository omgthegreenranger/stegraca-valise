import React, { useState, useRef, useEffect } from "react";
import { Button, Tabs, Tab } from "react-bootstrap";
import "./main.css";
import { SlArrowLeft } from "react-icons/sl";
import { FaUserSecret } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useAnimate, AnimatePresence, usePresence, motion} from "framer-motion";
import { MainPage, Bio, Projects, Portfolio, Demos } from '../index'

export default function Main({ frontNav, setFrontNav }) {
    const [navOpt, setNavOpt] = useState("none")
    const [hoverOpt, setHoverOpt] = useState("none")
    const [selectedComp, setSelectedComp] = useState();



    const navTo = (e) => {
        e.target.id === navOpt ? setSelectedComp(true) : setSelectedComp(false)
        console.log(navOpt, frontNav)
        setFrontNav(!frontNav)
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
            <div className="front-business">
                <div className="front-bus-left"></div>
                <div className="front-bus-center">
                    {/* Disabled the following until Enter/Leave is figured out properly */}
                    {/* <ul className="front-select" onMouseEnter={() => handleMouseOver(this)} onMouseLeave={handleMouseLeave} onClick={navTo}> */}
                    <ul className="front-select" onClick={navTo}>

                        <li id="about" className="front-option">About</li>
                        <li id="portfolio" className="front-option">Portfolio</li>
                        <li id="blog" className="front-option">Blog</li>
                        <li id="doings" className="front-option">Demos</li>
                        <li id="contact" className="front-option">Contact</li>
                    </ul>
                </div>
                <div className="front-bus-right">
                <SelectedItem key="dialog" navOpt={navOpt} frontNav={frontNav} setFrontNav={setFrontNav} selectedComp={selectedComp} />
                </div>
                
            </div>
        </div>
    )
}

function SelectedItem({navOpt, frontNav, setFrontNav, selectedComp}) {

    console.log(navOpt, selectedComp);
    let middleDiv;
    if(navOpt === 'about') {middleDiv = <Bio />}
    if(navOpt === 'portfolio') {middleDiv = <Portfolio />}
    if(navOpt === 'doings') {middleDiv= <Demos />}

    return (<AnimatePresence>
        {frontNav && selectedComp && <motion.div 
        initial={{x: 100, opacity: 0}}
        animate={{x: 0, opacity: 1}}
        exit={{x: 100, opacity: 0}}
        className="front-right-panel">
            {middleDiv}
    {/* {navOpt === "about" ? <Bio /> : navOpt === 'portfolio' ? <Portfolio /> : navOpt === 'doings' ? <Demos /> : <div></div>} */}
    </motion.div>}
    </AnimatePresence>
    )
}