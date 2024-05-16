import React, { useState, useRef, useEffect } from "react";
import { Button, Tabs, Tab } from "react-bootstrap";
import "./main.css";
import { SlArrowLeft } from "react-icons/sl";
import { FaUserSecret } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useAnimate, AnimatePresence, usePresence, motion, useMotionValue, stagger, easeIn, easeOut } from "framer-motion";
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
                <div className="front-title">
                    <div className="front-craft craft">Cardie</div><div className="front-craft craft">Craft</div>
                </div>
                <div className="front-tag">Imagining a tomorrow of yesterday, today!</div>
            </div>
            <div className="front-bus-left"></div>
            <FrontMenu navTo={navTo} />
            <div className="front-bus-right">
                <SelectedItem key="dialog" navOpt={navOpt} frontNav={frontNav} setFrontNav={setFrontNav} selectedComp={selectedComp} setSelectedComp={setSelectedComp} />
            </div>
            <div style={{ gridColumn: "4/5" }}></div>
            {/* </div> */}
        </div>
    )
}

function FrontMenu({ navTo }) {
    const [scope, animate] = useAnimate();

    const list = {
        visible: {
            opacity: 1,
            transition: {
                // when: "beforeChildren",
                staggerChildren: 0.1,
                ease: "easeInOut"
            },
        },
        hidden: {
            opacity: 0,
            transition: {
                // when: "afterChildren",
            },
        },
    }
    

    const item = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 },
    }



    return (
        <div className="front-bus-center">
            {/* Disabled the following until Enter/Leave is figured out properly */}
            {/* <ul className="front-select" onMouseEnter={() => handleMouseOver(this)} onMouseLeave={handleMouseLeave} onClick={navTo}> */}
            <motion.ul className="front-select" ref={scope} onClick={navTo}
                initial="hidden"
                animate="visible"
                variants={list}
            >
                <motion.li variants={item} id="home" className="front-option">Home</motion.li>
                <motion.li variants={item} id="about" className="front-option">About</motion.li>
                <motion.li variants={item} id="portfolio" className="front-option">Portfolio</motion.li>
                <motion.li variants={item} id="blog" className="front-option">Blog</motion.li>
                <motion.li variants={item} id="doings" className="front-option">Demos</motion.li>
                <motion.li variants={item} id="contact" className="front-option">Contact</motion.li>
            </motion.ul>
        </div>
    );
}


function SelectedItem({ navOpt, frontNav, setFrontNav, selectedComp, setSelectedComp }) {
    console.log(navOpt, selectedComp);
    let middleDiv;
    let headline;
    if (navOpt === 'home') { middleDiv = <h1>HOME</h1>; headline = "" }
    if (navOpt === 'about') { middleDiv = <Bio />; headline = "Stephen Cardie" }
    if (navOpt === 'portfolio') { middleDiv = <Portfolio />; headline = "Stephen Cardie - Fullstack Web Developer" }
    if (navOpt === 'doings') { middleDiv = <Demos />; headline = "Try some things" }
    if (navOpt === 'blog') { middleDiv = <h1>BLOG</h1>; headline = "Cardieblog" }
    if (navOpt === 'contact') { middleDiv = <Contact position="panel" />; headline = "Contact Stephen" }
    const noRef = useRef(null)

    const nodeRef = noRef
    console.log(nodeRef)
    return (
        <SwitchTransition>
            <CSSTransition
                key={selectedComp}
                nodeRef={nodeRef}
                addEndListener={(done) => { nodeRef.current.addEventListener("transitionend", done, false) }}
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