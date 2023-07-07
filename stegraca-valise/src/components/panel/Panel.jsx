import React, { useState, useEffect } from "react";
import "./panel.css";
import { Projects, Linkblock } from "../index";

export default function Panel(props) {
    const { tags, setTags } = props;

    return (
        <>
            <div className={`panel`}>  
                <Projects tags={tags} setTags={setTags} /> 
            </div> 
</>
    )
}
