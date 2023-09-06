import React, { useState } from "react";
import "./App.css";
import { Projects, Splash, NavBar } from "./components";

const App = () => {
  // Let's set some global states for this app
  const [display, setDisplay] = useState(false);
  const [navi, setNavi] = useState();
  const [tags, setTags] = useState([]);
 
  return (
    <>
      <div className="main">
        <Splash
          display={display}
          setDisplay={setDisplay}
          tags={tags}
          setTags={setTags}
        />
        <Projects
          display={display}
          setDisplay={setDisplay}
          tags={tags}
          setTags={setTags}
        />
        <div className="nav-block-header">
          <NavBar navi={navi} setNavi={setNavi} />
        </div>{" "}
      </div>
    </>
  );
};

export default App;
