import "./Valise.css";
import React, { useState } from "react";
import { NavBar, Panel, Linkblock, Splash, Bio } from "../index";
import { animated, useSpring } from '@react-spring/web';

export default function Valise(props) {
  // destructure our global states from props
  // const [springs, api] = useSpring(() => ({
  //   from: {x : 0 },
  // }))
  const [tags, setTags] = useState([]);
  const { display, setDisplay } = props;
  const [navi, setNavi] = useState("");

  
  return (
    <div className={`valise-container`}>
      <Splash
        display={display}
        setDisplay={setDisplay}
        navi={navi}
        setNavi={setNavi}
        // springs={springs}
        // api={api}
      />
      {/* <Linkblock         
        display={display}
        setDisplay={setDisplay}
        navi={navi}
        setNavi={setNavi}
        tags={tags}
        setTags={setTags}
      /> */}
      <Bio />
      <Panel
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
