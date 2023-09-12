import React, { useState } from "react";
import "./App.css";
import { Projects, Splash, NavBar, Linkblock } from "./components";

const App = () => {
  // Let's set some global states for this app
  const [display, setDisplay] = useState(false);
  const [navi, setNavi] = useState();
  const [tags, setTags] = useState([]);
  const [portOpen, setPortOpen] = useState(false);
 
  return (
    <>
      <div className="main">
        <Splash
          display={display}
          setDisplay={setDisplay}
          tags={tags}
          setTags={setTags}
          portOpen={portOpen}
          setPortOpen={setPortOpen}
        />
        <Linkblock
          tags={tags}
          setTags={setTags}
          portOpen={portOpen}
        />
        <Projects
          display={display}
          setDisplay={setDisplay}
          tags={tags}
          setTags={setTags}
          portOpen={portOpen}
          setPortOpen={setPortOpen}
        />
        <div className="nav-block-header">
          <NavBar navi={navi} setNavi={setNavi} />
        </div>{" "}
      </div>
    </>
  );
};

export default App;
