import React, { useState, useRef, useEffect, useCallback } from "react";
import "./main.css";
import { useAnimate, AnimatePresence, usePresence, motion } from "framer-motion";
import { Bio, Portfolio, Demos, Contact } from '../index'
import { gitGetUserEvents } from "../../functions/github";
import { IoHomeSharp, IoBriefcase, IoPerson, IoPlay, IoChatbox, IoBook, IoArrowRedoCircleOutline, IoAddCircleOutline, IoGitMergeOutline, IoGitBranchOutline, IoGitPullRequestOutline } from "react-icons/io5";
import axios from 'axios';
import projectDB from "../../functions/github.json";
import {format} from "date-fns";


export default function Main({ frontNav, setFrontNav }) {
    const [navOpt, setNavOpt] = useState('home')
    const [hoverOpt, setHoverOpt] = useState("none")
    const [panelVis, setPanelVis] = useState(true);
    const [currentSel, setCurrentSel] = useState('home');

    const navTo = (e) => {
        // setCurrentSel(navOpt)
        if (navOpt === e.target.parentElement.id) {
            console.log("Wait a minute!")
        } else {
            setNavOpt(e.target.parentElement.id);
            console.log("Keep it going"
            )
            setPanelVis(false);
        }
        console.log(navOpt)
        console.log("*** Dig it", e.target.parentElement.id, navOpt)

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
                <div className="front-tag">
                    {/* Imagining a tomorrow of yesterday, today! */}
                    by Stephen Cardie
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
                <motion.li variants={menuItem} id="home" className="front-option"><span><IoHomeSharp /></span><span className="menu-text">Home</span></motion.li>
                <motion.li variants={menuItem} id="about" className="front-option"><span><IoPerson /></span><span>About</span></motion.li>
                <motion.li variants={menuItem} id="portfolio" className="front-option"><span><IoBriefcase /></span><span>Portfolio</span></motion.li>
                <motion.li variants={menuItem} id="blog" className="front-option"><span><IoBook /></span><span>Blog</span></motion.li>
                <motion.li variants={menuItem} id="doings" className="front-option"><span><IoPlay /></span><span>Demos</span></motion.li>
                <motion.li variants={menuItem} id="contact" className="front-option"><span><IoChatbox /></span><span>Contact</span></motion.li>
            </motion.ul>
        </div>
    );
}


function SelectedItem({ navOpt, frontNav, setFrontNav, panelVis, setPanelVis, currentSel, setCurrentSel }) {
    const [scope, animate] = useAnimate();
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
            <div className="home-right-panel">
                <h5>Latest GitHub Activity</h5>
                <GitData /></div>
        </div>
    )
}

function GitData() {
    const [gitData, setGitData] = useState(projectDB);
    // useEffect(() => {
    //Disabling API call for JSON instead
    //     async function gitsen() {
    //         try {
    //             const searchMethod = "users";
    //             const apiRoot = 'https://api.github.com/' + searchMethod + '/omgthegreenranger'
    //             const gitGet = await axios.get(apiRoot + '/events/public')
    //             const data = await gitGet.data;
    //             console.log(data);
    //             setGitData(data);
    //         } catch(error) {
    //             console.log(error)
    //         }
    //     }
    //     if (!gitData) {
    //         gitsen();
    //     }
    // }, [])
    console.log("GitData!", gitData)


    return (
        <div className="feed">
            {gitData.map(git => {
                let gitDeets = []
                if (git.type === "CreateEvent") {
                    if(git.payload.ref_type === "branch") {
                    gitDeets[0] = "New branch: ";
                    gitDeets[1] = git.payload.ref;
                    gitDeets[2] = <IoGitBranchOutline />
                    gitDeets[3] = format(new Date(git.created_at), 'yyyy-MM-dd, hh:mm')
                    gitDeets[4] = ''
                    }
                }
                if (git.type === "PushEvent") {
                    gitDeets[0] = "Pushed to ";
                    gitDeets[1] = git.payload.ref.split("/")[2];
                    gitDeets[2] = <IoArrowRedoCircleOutline />
                    gitDeets[3] = format(new Date(git.created_at), 'yyyy-MM-dd, hh:mm')
                    gitDeets[4] = git.payload.commits[0].message
                }
                if (git.type === "PullRequestEvent") {
                    gitDeets[0] = "Pull request from";
                    gitDeets[1] = git.payload.ref;
                    gitDeets[2] = <IoGitPullRequestOutline />
                    gitDeets[3] = format(new Date(git.created_at), 'yyyy-MM-dd, hh:mm')
                    gitDeets[4] = ''
                }
                console.log(gitDeets);
                return (
            <div className="feed-block">
                <div className="feed-type">{gitDeets[2]}</div>
                <div className="feed-repo"><a href={'https://www.github.com/' + git.repo.name}>{git.repo.name.split("/")[1]}</a></div>
                <div className="feed-title"><span>{gitDeets[0]}</span><span>{gitDeets[1]}</span></div>
                <div className="feed-date">{gitDeets[3]}</div>
                <div className="feed-details">{gitDeets[4]}</div>
            </div>
            )
            })}

        </div>

    )
}