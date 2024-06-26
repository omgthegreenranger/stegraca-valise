import React, { useState, useEffect } from "react";
import "./main.css";
import { useAnimate, AnimatePresence, usePresence, motion, stagger } from "framer-motion";
import { Bio, Portfolio, Demos, Contact } from '../index'
// import { gitGetUserEvents } from "../../functions/github";
import { IoHomeSharp, IoBriefcase, IoPerson, IoPlay, IoChatbox, IoBook, IoArrowRedoCircleOutline, IoGitBranchOutline, IoGitPullRequestOutline, IoTicketOutline } from "react-icons/io5";
import axios from 'axios';
// import projectDB from "../../functions/github.json";
import { format } from "date-fns";
import { IconContext } from "react-icons";

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
    }, [loaded]
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

// Consider making this a full component on its own.
function Home() {
    return (
        <div className="home-panel">
            <div className="home-left-panel">
            </div>
            <div className="home-center-panel">
                <h3>NEWS</h3>
            </div>
            <div className="home-right-panel">
                <h5>Latest GitHub Activity</h5>
                <GitData /></div>
        </div>
    )
}

// Grabbing GitHub general data

function GitData() {
    const [gitData, setGitData] = useState([]);
    const [gitGot, setGitGot] = useState(false);
    // useEffect(() => {
    async function gitsen() {
        try {
            const searchMethod = "users";
            const apiRoot = 'https://api.github.com/' + searchMethod + '/omgthegreenranger'
            const gitGet = await axios.get(apiRoot + '/events/public')
            const data = await gitGet.data;
            console.log(data);
            setGitData(data);
            setGitGot(true);
        } catch (error) {
            console.log(error)
        }
    }
    if (!gitGot) {
        gitsen();
    }
    // }, [gitGot])

    console.log("GitData!", gitData)

    return (
        <div className="feed">
            {gitData.map((git, i) => {
                if (i < 5) {
                    let gitDeets = []
                    if (git.type === "CreateEvent") {
                        if (git.payload.ref_type === "branch") {
                            gitDeets[0] = "New branch";
                            gitDeets[1] = git.payload.ref;
                            gitDeets[2] = <IoGitBranchOutline />
                            gitDeets[3] = format(new Date(git.created_at), 'yyyy-MM-dd, hh:mm')
                            gitDeets[4] = ''
                        }
                    }
                    if (git.type === "PushEvent") {
                        gitDeets[0] = "Pushed to branch";
                        gitDeets[1] = git.payload.ref.split("/")[2];
                        gitDeets[2] = <IoArrowRedoCircleOutline />
                        gitDeets[3] = format(new Date(git.created_at), 'yyyy-MM-dd, hh:mm')
                        gitDeets[4] = git.payload.commits[0].message
                    }
                    if (git.type === "PullRequestEvent") {
                        gitDeets[0] = "Pull request";
                        gitDeets[1] = git.payload.ref;
                        gitDeets[2] = <IoGitPullRequestOutline />
                        gitDeets[3] = format(new Date(git.created_at), 'yyyy-MM-dd, hh:mm')
                        gitDeets[4] = ''
                    }
                    if (git.type === "IssuesEvent") {
                        gitDeets[0] = "Created issue";
                        gitDeets[1] = git.payload.action + ": " + git.payload.issue.title;
                        gitDeets[2] = <IoTicketOutline />
                        gitDeets[3] = format(new Date(git.created_at), 'yyyy-MM-dd, hh:mm')
                        gitDeets[4] = git.payload.issue.title;
                    }
                    console.log(gitDeets);
                    return (
                        <div className="feed-block">
                            <div className="feed-date">{gitDeets[3]}</div>
                            <div className="feed-type">
                                <IconContext.Provider value={{ className: "feed-icon" }}>
                                    {gitDeets[2]}
                                </IconContext.Provider>
                                <span className="feed-tooltiptext">
                                    <div>{gitDeets[0]}</div>
                                    <div>{gitDeets[4]}</div>
                                </span>
                            </div>
                            <div className="feed-repo">
                                <a href={'https://www.github.com/' + git.repo.name}>
                                    {git.repo.name.split("/")[1]}
                                </a>
                            </div>
                            <div className="feed-title"><span>{gitDeets[1]}</span></div>
                            {/* <div className="feed-details">{gitDeets[4]}</div> */}
                        </div>
                    )
                }
            })}
        </div>

    )
}