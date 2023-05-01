import React, {useState} from 'react';
import anime from 'animejs';
import './background.css';
import { Row, Col, Container } from 'react-bootstrap';

export default function Background() {
    const [fraction, setFraction] = useState();

// Get max number of rows in viewport
// get max number of columns at given width range
// divide up by height/angle at -45 degrees
// Create algorithm to fill only certain div elements on container.
const rowList = []

for (let i = 1; i < 100; i++) {

const rando = () => Math.floor(
    
    
    Math.random() * 10);
rowList.push(rando);
}

console.log(rowList);


return (
<>
<div height="50%">
</div>
<div>
<div className="back-tile-1 animate"></div>
<div className="back-tile-1 animate"></div>
<div className="back-tile-1 animate"></div>
</div>
<div>
<div className="back-tile-2 animate"></div>
<div className="back-tile-2 animate"></div>
<div className="back-tile-2 animate"></div>
</div>
<div>
<div className="back-tile-3 animate"></div>
<div className="back-tile-3 animate"></div>
<div className="back-tile-3 animate"></div>
</div>
</>
)

}