import React, { useState, useEffect } from "react";
import "./main.css";
import { useAnimate, AnimatePresence, motion, stagger } from "framer-motion";
import { Bio, Portfolio, Demos, Contact } from '../index'
// import { gitGetUserEvents } from "../../functions/github";
import { IoHomeSharp, IoBriefcase, IoPerson, IoPlay, IoChatbox, IoBook } from "react-icons/io5";
// import projectDB from "../../functions/github.json";
import { Menu } from "../index";

export default function Main({ frontNav, setFrontNav }) {
    const [navOpt, setNavOpt] = useState('home')
    const [panelVis, setPanelVis] = useState(true);
    const [currentSel, setCurrentSel] = useState('home');

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
        <div className="front-layout">
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
            <FrontMenu navTo={navTo} setPanelVis={setPanelVis} setCurrentSel={setCurrentSel} setNavOpt={setNavOpt} />
            <div className="front-bus-right">
                <SelectedItem key="dialog" navOpt={navOpt} panelVis={panelVis} frontNav={frontNav} setFrontNav={setFrontNav} setPanelVis={setPanelVis} currentSel={currentSel} setCurrentSel={setCurrentSel} />
            </div>
            <div style={{ gridColumn: "4/5" }}></div>
            {/* </div> */}
        </div>
    )
}

// Side menu for navigation

function FrontMenu({ navTo, setPanelVis, setCurrentSel, setNavOpt }) {
    const [scope, animate] = useAnimate();
    const [loaded, setLoaded] = useState(false);
    const [secondScope, secondAnimate] = useAnimate();

    // This is set animation for all menu items
    // TODO: animate SVG logos
    // TODO: Create small menu.
    // Should this be a separate component?
    const menuWords = document.getElementsByClassName("menu-text")
    const menuIcon = document.getElementsByClassName("menu-icon")
    const menuFront = document.getElementsByClassName("front-option")
    const staggerItems = stagger(0.15, {startDelay: 0.15})

    const menuSequence = [
        [menuIcon, {x: "-0rem", opacity: 1}, {duration: 0.25, delay: staggerItems }],
        [menuWords, {opacity: 1}, {duration: 1}],
        // [menuFront, { gridTemplateColumns: "1fr auto" }]
    ]


    useEffect(() => {

        if(loaded) {
            const enterAnimation = async () => {
                // await animate(scope, { opacity: 1 })
                // await animate(menuWords, {color: "rgb(0,0,155)"}, {duration: 1})
                // await animate(menuIcon, {color: "rgb(0,155,0)", x: "-1dvh", opacity: 1}, {duration: 0.25, delay: staggerItems })
                animate(menuSequence);
              }
        enterAnimation()
        } else { setLoaded(true)}
    }, [loaded, animate, menuSequence]
    )

    const menuList = {
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                ease: "easeInOut"
            },
        },
        hidden: {
            opacity: 0,
            transition: {
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
                // initial={{opacity: 0}}
                // animate="visible"
                // variants={menuList}
            >
                <li id="home" className="front-option" ref={scope} ><div className="menu-icon"><IoHomeSharp /></div><div className="menu-text">Home</div></li>
                <li id="about" className="front-option" ref={scope}><div className="menu-icon"><IoPerson /></div><div className="menu-text" >About</div></li>
                <li id="portfolio" className="front-option"ref={scope}><div className="menu-icon"><IoBriefcase /></div><div className="menu-text">Portfolio</div></li>
                <li id="blog" className="front-option" ref={scope}><div className="menu-icon"><IoBook /></div><div className="menu-text">Blog</div></li>
                <li id="doings" className="front-option" ref={scope}><div className="menu-icon"><IoPlay /></div><div className="menu-text">Demos</div></li>
                <li id="contact" className="front-option" ref={scope} ><div className="menu-icon"><IoChatbox /></div><div className="menu-text">Contact</div></li>
            </motion.ul>
        </div>
    );
}


function SelectedItem({ navOpt, frontNav, setFrontNav, panelVis, setPanelVis, currentSel, setCurrentSel }) {
    const [scope, animate] = useAnimate();
    let middleDiv;
    let headline = "";

    if (navOpt === 'home') { middleDiv = <Menu />; headline = "Stephen Cardie" }
    else if (navOpt === 'about') { middleDiv = <Bio />; headline = "Stephen Cardie"; }
    else if (navOpt === 'portfolio') { middleDiv = <Portfolio />; headline = "Stephen Cardie - Fullstack Web Developer" }
    else if (navOpt === 'doings') { middleDiv = <Demos />; headline = "Try some things" }
    else if (navOpt === 'blog') { middleDiv = <h1>BLOG</h1>; headline = "Cardieblog" }
    else if (navOpt === 'contact') { middleDiv = <Contact position="panel" />; headline = "Contact Stephen" }
    else { middleDiv = <Menu />; headline = "Stephen Cardie" }

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
