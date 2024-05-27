import React, { useState, useRef, useEffect } from "react";
import { Button, Tabs, Tab } from "react-bootstrap";
import "./main.css";
import { SlArrowLeft } from "react-icons/sl";
import { FaUserSecret } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useAnimate, AnimatePresence, usePresence, motion, useMotionValue, stagger, easeIn, easeOut } from "framer-motion";
import { Bio, Portfolio, Demos, Contact } from '../index'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import { gitGetUserEvents } from "../../functions/github";

export default function Main({ frontNav, setFrontNav }) {
    const [navOpt, setNavOpt] = useState('home')
    const [hoverOpt, setHoverOpt] = useState("none")
    const [panelVis, setPanelVis] = useState(true);
    const [currentSel, setCurrentSel] = useState('home');
    const [isPresent, safeToRemove] = usePresence();

    const navTo = (e) => {
        // setCurrentSel(navOpt)
        if (navOpt === e.target.id) {
            console.log("Wait a minute!")
        } else {setNavOpt(e.target.id);
            console.log("Keep it going"
            )
            setPanelVis(false);
        }
        console.log(navOpt)
        console.log("*** Dig it", e.target.id, navOpt)

    }

    console.log("*** Dig it TWO", navOpt, currentSel)

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
            <FrontMenu navTo={navTo} setPanelVis={setPanelVis} setCurrentSel={setCurrentSel} setNavOpt={setNavOpt} />
            <div className="front-bus-right">
                <SelectedItem key="dialog" navOpt={navOpt} panelVis={panelVis} frontNav={frontNav} setFrontNav={setFrontNav} setPanelVis={setPanelVis} currentSel={currentSel} setCurrentSel={setCurrentSel} />
            </div>
            <div style={{ gridColumn: "4/5" }}></div>
            {/* </div> */}
        </div>
    )
}

function FrontMenu({ navTo, setPanelVis, setCurrentSel, setNavOpt }) {
    const [scope, animate] = useAnimate();

    const menuList = {
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
    const menuItem = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 },
    }



    return (
        <div className="front-bus-center">
            {/* Disabled the following until Enter/Leave is figured out properly */}
            {/* <ul className="front-select" onMouseEnter={() => handleMouseOver(this)} onMouseLeave={handleMouseLeave} onClick={navTo}> */}
            <motion.ul
                className="front-select"
                ref={scope}
                onClick={navTo}
                initial="hidden"
                animate="visible"
                variants={menuList}
            >
                <motion.li variants={menuItem} id="home" className="front-option">Home</motion.li>
                <motion.li variants={menuItem} id="about" className="front-option">About</motion.li>
                <motion.li variants={menuItem} id="portfolio" className="front-option">Portfolio</motion.li>
                <motion.li variants={menuItem} id="blog" className="front-option">Blog</motion.li>
                <motion.li variants={menuItem} id="doings" className="front-option">Demos</motion.li>
                <motion.li variants={menuItem} id="contact" className="front-option">Contact</motion.li>
            </motion.ul>
        </div>
    );
}


function SelectedItem({ navOpt, frontNav, setFrontNav, panelVis, setPanelVis, currentSel, setCurrentSel }) {
    const [scope, animate] = useAnimate();
    const [isPresent, safeToRemove] = usePresence();
    let middleDiv;
    let headline = "";

    // useEffect(() => {
    //     if (panelVis === true) {
    //         console.log("Oh yeah!")
    //         if (currentSel === navOpt) {
    //             console.log("It's the same one!", navOpt, currentSel)
    //         }
    //         else if (currentSel !== navOpt) {
    //             // setCurrentSel(navOpt)
    //             setPanelVis(false)
    //             console.log("What", navOpt, currentSel)
    //         }
    //     }
    //     else {console.log("Oh No!")}
    // })

    if (navOpt === 'home') { middleDiv = <Home />; headline = "Stephen Cardie" }
    else if (navOpt === 'about') { middleDiv = <Bio />; headline = "Stephen Cardie"; }
    else if (navOpt === 'portfolio') { middleDiv = <Portfolio />; headline = "Stephen Cardie - Fullstack Web Developer" }
    else if (navOpt === 'doings') { middleDiv = <Demos />; headline = "Try some things" }
    else if (navOpt === 'blog') { middleDiv = <h1>BLOG</h1>; headline = "Cardieblog" }
    else if (navOpt === 'contact') { middleDiv = <Contact position="panel" />; headline = "Contact Stephen" }
    else { middleDiv = <Home />; headline = "Stephen Cardie" }

    const infoPanel = {
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                // when: "beforeChildren",
                ease: "easeInOut",
                duration: 1
            },
        },
        hidden: {
            opacity: 0,
            x: 300,
            transition: {
                // when: "afterChildren",
            },
        },
        exit: {
            opacity: 0,
            x: 300,
            transition: {
                ease: "easeInOut",
                duration: 1
            }
        }
    }

    return (
        <AnimatePresence mode="wait" onExitComplete={() => setPanelVis(true)}>
            {panelVis && (
                <motion.div
                    key={middleDiv}
                    ref={scope}
                    className="front-right-panel"
                    initial="hidden"
                    exit="exit"
                    animate="visible"
                    variants={infoPanel}
                >
                    <div className="portfolio-headline">{headline}</div>
                    {middleDiv}
                </motion.div>)}
        </AnimatePresence>
    )
}

function Home() {
    return (
        <div className="home-panel">
            <div className="home-left-panel">
            </div>
            <div className="home-center-panel">
                <h3>COMING SOON</h3>
            </div>
            <div className="home-right-panel">This is an site update stream, Blogposts, GitHub, etc.</div>
        </div>
    )
}