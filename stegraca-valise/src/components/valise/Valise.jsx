import "./Valise.css";
import React, { useState } from "react";
import { Splash, Projects } from "../index";
import { animated, useSpring } from '@react-spring/web';

export default function Valise(props) {
  // destructure our global states from props
  // const [tags, setTags] = useState([]);
  const { display, setDisplay, tags, setTags } = props;
  const [navi, setNavi] = useState("");

  
  return (
    <div className={`valise-container`}>
      <Splash
        display={display}
        tags={tags} setTags={setTags} 
      />
      <Projects
        display={display}
        setDisplay={setDisplay}
        navi={navi}
        setNavi={setNavi}
        tags={tags}
        setTags={setTags}
      />
    </div>
  );
}
