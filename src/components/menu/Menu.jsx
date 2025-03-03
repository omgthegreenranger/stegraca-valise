import React, { useState, useEffect } from "react";
import { useAnimate, AnimatePresence, motion, stagger } from "motion/react";
import "./menu.css";
import { IoHomeSharp, IoBriefcase, IoPerson, IoPlay, IoChatbox, IoBook } from "react-icons/io5";

export default function Menu({ navTo, setPanelVis, setCurrentSel, setNavOpt, portOpen, setPortOpen }) {
    const [scope, animate] = useAnimate();
    const [loaded, setLoaded] = useState(false);
    const [secondScope, secondAnimate] = useAnimate();

    // This is set animation for all menu items
    // TODO: animate SVG logos
    // TODO: Create small menu.
    const menuWords = document.getElementsByClassName("menu-text")
    const menuIcon = document.getElementsByClassName("menu-icon")
    const menuFront = document.getElementsByClassName("front-option")
    const menuState = document.getElementsByClassName("menu-" + portOpen)
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
                <li id="home" className={"front-option menu-" + portOpen} ref={scope} ><div className="menu-icon"><IoHomeSharp /></div><div className="menu-text">Home</div></li>
                <li id="about" className={"front-option menu-" + portOpen} ref={scope}><div className="menu-icon"><IoPerson /></div><div className="menu-text">About</div></li>
                <li id="portfolio" className={"front-option menu-" + portOpen}ref={scope}><div className="menu-icon"><IoBriefcase /></div><div className="menu-text">Portfolio</div></li>
                <li id="blog" className={"front-option menu-" + portOpen} ref={scope}><div className="menu-icon"><IoBook /></div><div className="menu-text">Blog</div></li>
                <li id="doings" className={"front-option menu-" + portOpen} ref={scope}><div className="menu-icon"><IoPlay /></div><div className="menu-text">Demos</div></li>
                <li id="contact" className={"front-option menu-" + portOpen} ref={scope}><div className="menu-icon"><IoChatbox /></div><div className="menu-text">Contact</div></li>
            </motion.ul>
        </div>
    );
}
