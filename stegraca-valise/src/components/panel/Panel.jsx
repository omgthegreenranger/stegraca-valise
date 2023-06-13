import React, { useState, useEffect } from "react";
import "./panel.css";
import { Projects, Bio } from "../index";

export default function Panel(props) {
    const { display, setDisplay, navi, setNavi, tags, setTags } = props;
    const Display = () => { 
    switch(navi) {
        case "about":
            return(
                <>
                    <Bio />
                </>
            )
        case "portfolio":
            return(
                <>
                    <Projects tags={tags} setTags={setTags} /> 
                </>
            )
        default:
            return(
                <></>
            )

    }
}


    return (
        <div className="panel">
            <div className={`display-panel ${navi}`}>
                <Display />
            </div> 
        </div>
    )
}
