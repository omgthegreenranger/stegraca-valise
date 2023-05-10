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
        {/* <div>
<div className="blob"></div>
<div className="blob2"></div>
<div className="blog3"></div>
        </div> */}
{/* 
<div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div > */}
        </>
    )
}