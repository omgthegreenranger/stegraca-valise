
import './logo.css';
import { MdMail, MdSimCardDownload } from 'react-icons/md';
import { SiMastodon, SiLinkedin, SiGithub } from 'react-icons/si';
import {IconContext} from 'react-icons';



export function Logo() {
    return (
<svg
  width="800"
  height="500"
  viewBox="00 00 800 500"
  xmlns="http://www.w3.org/2000/svg">
    <defs>
        <radialGradient id="Gradient1" x1="0" x2="0" y1="0.1" y2="1">
            <stop offset="0%" stop-color="purple" />
            <stop offset="50%" stop-color="lightblue" stop-opacity="1" />
            <stop offset="100%" stop-color="green" />
        </radialGradient>
        <linearGradient id="Gradient2" x1="0" x2="0" y1="0.1" y2="1">
            <stop offset="0%" stop-color="lightblue" />
            <stop offset="50%" stop-color="purple" stop-opacity="1" />
            <stop offset="100%" stop-color="plum" />
        </linearGradient>
        <linearGradient id="Gradient3" x1="0" x2="0" y1="0" y2="1">
            <stop offset="35%" stop-color="green" />
            <stop offset="50%" stop-color="aliceblue" stop-opacity="1" />
            <stop offset="80%" stop-color="purple" />
        </linearGradient>
        <linearGradient id="Gradient4" x1="0" x2="0" y1="0" y2="1">
            <stop offset="35%" stop-color="black" />
            <stop offset="50%" stop-color="grey" stop-opacity="1" />
            <stop offset="80%" stop-color="black" />
        </linearGradient>
    </defs>
        <svg id="shield"
            width="620"
            height="466"
            x="90"
            viewBox="00 00 620 466">
                <polygon points="310 466, 0 31, 180 31, 233 0, 388 0, 440 31, 620 31" stroke="lightgreen" stroke-width="1px" fill="url(#Gradient1)" />
                <polygon className="shield" points="310 456, 10 35, 185 35, 235 7, 385 7, 435 35, 610 35" stroke="darkgreen" stroke-width="1px" fill="url(#Gradient2)" />
                <polygon points= "235 70, 195 50, 195 34, 235 12, 385 12, 425 34, 425 50, 385 70" stroke="black" stroke-width="2px" fill="url(#Gradient4)" />
                <text x="220" y="50" className="stegra" textLength="190">STEGRACA.CA</text>
        </svg>
    <g className="name-build">
        <g className="text-line">
            <text x="00" y="190" stroke="black" textLength="63%">STEPHEN</text> 
            <text x="320" y="275" stroke="black" textLength="60%">CARDIE</text>
        </g>
    </g>
    
    <svg id="title-block"
        width="500"
        height="500"
        x="315"
        y="300"
        viewBox="00 00 500 500"
    >
        <text x="-35" y="150" className="title">Fullstack Developer</text>
    </svg>
    <svg
    id="left-icons"
    width="250"
    height="80"
    x="100"
    y="400"
    viewBox="00 00 250 80">
        <IconContext.Provider value={{size: '65', color: 'white'}}>
            <SiGithub x="0"/>
        </IconContext.Provider>
        <IconContext.Provider value={{size: '65', color: 'white'}}>
            <SiLinkedin x="75"/>
        </IconContext.Provider>
        <IconContext.Provider value={{size: '65', color: 'white'}}>
            <SiMastodon x="150" />
        </IconContext.Provider>    
    </svg>
    <svg id="right-icons"
    width="250"
    height="80"
    x="500"
    y="400"
    viewBox="00 00 250 80">
        <IconContext.Provider value={{size: '65', color: 'white'}}>
            <MdMail x="0"/>
        </IconContext.Provider>
        <IconContext.Provider value={{size: '65', color: 'white'}}>
            <MdSimCardDownload x="75" />
        </IconContext.Provider>        <IconContext.Provider value={{size: '65', color: 'white'}}>
            <MdSimCardDownload x="150" />
        </IconContext.Provider> 

    </svg>
</svg>
    )
}