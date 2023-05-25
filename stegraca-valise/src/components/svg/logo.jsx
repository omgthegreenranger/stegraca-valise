
import './logo.css';


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
    </defs>
        <svg id="shield"
            width="620"
            height="466"
            x="90"
            viewBox="00 00 620 466">
                <polygon points="310 466, 0 31, 180 31, 233 0, 388 0, 440 31, 620 31" fill="url(#Gradient1)" />
                <polygon className="shield" points="310 456, 10 35, 185 35, 235 7, 385 7, 435 35, 610 35" fill="url(#Gradient2)" />
                <polygon points= "235 70, 195 50, 195 34, 235 12, 385 12, 425 34, 425 50, 385 70" fill="black" />
                <text x="220" y="50" className="stegra" textLength="190">STEGRACA.CA</text>
        </svg>
    <g className="name-build">
        <ellipse cx="250" cy="150" rx="250" ry="75" fill="transparent" stroke="black" stroke-width="3px" />
        <g className="text-line">
            <text x="00" y="190" stroke="black" fill="url(#Gradient3)" textLength="63%">STEPHEN</text> 
            <text x="320" y="275" stroke="black" fill="url(#Gradient3)" textLength="60%">CARDIE</text>
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
    {/* <g>
        <rect width="800" height="100%" stroke="black" fill="transparent" stroke-width="1px" />
        <rect width="50%" height="100%" stroke="black" fill="transparent" stroke-width="1px" />
        <rect width="800" height="50%" stroke="black" fill="transparent" stroke-width="1px" />
    </g> */}
</svg>
    )
}