import React, { useState } from "react";
import "./App.css";
import { Main, Frames } from "./components";

const App = () => {
  const [frontNav, setFrontNav] = useState(true);
  return (
    <>
      <Frames layout="topbar" frontNav={frontNav} setFrontNav={setFrontNav} />
      <div className="main front">
        <Main frontNav={frontNav} setFrontNav={setFrontNav} />
      </div>
    </>
  )
};

export default App;
