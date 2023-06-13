import React, { useState, useEffect } from "react";
import "./panel.css";
import { Projects, Bio } from "../index";

export default function Panel(props) {
    const { display, setDisplay, navi, setNavi, tags, setTags } = props;
    var openPane = false;
    const Display = () => { 

    switch(navi) {
        case "about":
            openPane = true;
            return(
                <>
                    <Bio />
                </>
            )
        case "portfolio":
            openPane = true;
            return(
                <>
                    <Projects tags={tags} setTags={setTags} /> 
                </>
            )
        default:
            openPane = false;
            return(
                <><div></div></>
            )
    }
}


    return (
        <div className={`panel `}>
            <div className={`panel-${openPane} navi-${navi}`}>
                <Display />
            </div> 
        </div>
    )
}
