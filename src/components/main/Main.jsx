import React, { useState } from "react";
import { useScroll } from "@react-spring/web";
import "./main.css";
import { Splash, Portfolio, NavBar, Bio, Mastermind } from "../index";
import { wrapGrid } from "animate-css-grid";
import "../../functions/functions";
import useWindowDimensions from "../../functions/functions";

export default function MainPage(props) {
  const [scrollToTop, setScrollToTop] = useState();
  const [thingsOpen, setThingsOpen] = useState(true);
  const { scrollYProgress } = useScroll();
  const [isLoaded, setIsLoaded] = useState(false);
  const x = window.matchMedia("(max-width: 750px)");
  const [peepingTom, setPeepingTom] = useState(x.matches)


  console.log(useWindowDimensions())

  x.addEventListener("change", () => {
    setPeepingTom(x.matches)
  }
  )

  return (
    <div
      className={
        thingsOpen ? `main-box main-expanded` : `main-box main-welcome`
      }
    >
      <div className="bar-left-splash">
        <Splash
          thingsOpen={thingsOpen}
          scrollYProgress={scrollYProgress}
          setIsLoaded={setIsLoaded}
          peepingTom={peepingTom}
        />
        {thingsOpen}
      </div>
      <div className="bar-left-nav">
        <NavBar peepingTom={peepingTom} />
      </div>
      <div className="bar-left-bio">
        <Bio peepingTom={peepingTom} />
      </div>
      <div className="portfolio-main">
        <Portfolio
          thingsOpen={thingsOpen}
          setThingsOpen={setThingsOpen}
          scrollYProgress={scrollYProgress}
          isLoaded={isLoaded}
          setIsLoaded={setIsLoaded}
          peepingTom={peepingTom}
        />
      </div>
    </div>
  );
}
