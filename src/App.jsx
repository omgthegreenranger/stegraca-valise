import React, { useState } from "react";
import "./App.css";
import { Front, Frames } from "./components";

const App = () => {
  const [frontNav, setFrontNav] = useState(true);
  return (
    <>
      <Frames layout="topbar" frontNav={frontNav} setFrontNav={setFrontNav} />
      <div className="main front">
        <Front frontNav={frontNav} setFrontNav={setFrontNav} />
      </div>
    </>
  )
};

export default App;
