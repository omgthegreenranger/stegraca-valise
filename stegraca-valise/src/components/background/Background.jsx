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
    return (
        <>
<svg height="400" width="1000">
    <defs>
    <filter id="f1" x="0" y="0">
      <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
    </filter>
    </defs>
  <circle className="background-circle" cx="1000" cy="200" r="75" stroke="black" stroke-width="-3" fill="yellow" filter="url(#f1)" />
</svg>
        </>
    )
}