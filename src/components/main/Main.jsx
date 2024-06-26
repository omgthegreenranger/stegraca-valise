import React, { useState, useEffect } from "react";
import "./main.css";
import { useAnimate, AnimatePresence, motion, stagger } from "framer-motion";
import { Bio, Portfolio, Demos, Contact, Home, Menu } from '../index'
// import { gitGetUserEvents } from "../../functions/github";
// import projectDB from "../../functions/github.json";

export default function Main({ frontNav, setFrontNav }) {
    const [navOpt, setNavOpt] = useState('home')
    const [panelVis, setPanelVis] = useState(true);
    const [currentSel, setCurrentSel] = useState('home');
    const [portOpen, setPortOpen] = useState(false);

    const navTo = (e) => {
        console.log("Now see here", navOpt)
        // setCurrentSel(navOpt)
        if (navOpt === e.target.parentElement.id) {
            console.log("Wait a minute!")
        } else {
            setNavOpt(e.target.parentElement.id);
            console.log("Keep it going"
            )
            setPanelVis(false);
        }
        console.log("Look again", navOpt)
    }

    return (
        <div className={"front-layout-" + portOpen}>
            <div className="front-splash">
                <div className="front-title">
                    <div className="front-craft craft">Cardie</div><div className="front-craft craft">Craft</div>
                </div>
                <div className="front-tag">
                    {/* Imagining a tomorrow of yesterday, today! */}
                    <div className="front-tag-line">by Stephen Cardie</div>
                </div>
            </div>
            <div className="front-bus-left"></div>
            <Menu navTo={navTo} setPanelVis={setPanelVis} setCurrentSel={setCurrentSel} setNavOpt={setNavOpt} portOpen={portOpen}/>
            <div className="front-bus-right">
                <SelectedItem key="dialog" navOpt={navOpt} panelVis={panelVis} frontNav={frontNav} setFrontNav={setFrontNav} setPanelVis={setPanelVis} currentSel={currentSel} setCurrentSel={setCurrentSel} portOpen={portOpen} setPortOpen={setPortOpen}/>
            </div>
            <div style={{ gridColumn: "4/5" }}></div>
            {/* </div> */}
        </div>
    )
}

// Side menu for navigation

function SelectedItem({ navOpt, frontNav, setFrontNav, panelVis, setPanelVis, currentSel, setCurrentSel, portOpen, setPortOpen }) {
    const [scope, animate] = useAnimate();
    let middleDiv;
    let headline = "";

    if (navOpt === 'home') { middleDiv = <Home />; headline = "Stephen Cardie" }
    else if (navOpt === 'about') { middleDiv = <Bio />; headline = "Stephen Cardie"; }
    else if (navOpt === 'portfolio') { middleDiv = <Portfolio portOpen={portOpen} setPortOpen={setPortOpen}/>; headline = "Stephen Cardie - Fullstack Web Developer" }
    else if (navOpt === 'doings') { middleDiv = <Demos />; headline = "Try some things" }
    else if (navOpt === 'blog') { middleDiv = <h1>BLOG</h1>; headline = "Cardieblog" }
    else if (navOpt === 'contact') { middleDiv = <Contact position="panel" />; headline = "Contact Stephen" }
    else { middleDiv = <Home setPortOpen={setPortOpen} portOpen={setPortOpen} />; headline = "Stephen Cardie" }

    const infoPanel = {
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                ease: "easeInOut",
                duration: 0.25
            },
        },
        hidden: {
            opacity: 0,
            x: 300,
            transition: {
            },
        },
        exit: {
            opacity: 0,
            x: 300,
            transition: {
                ease: "easeInOut",
                duration: 0.25
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
