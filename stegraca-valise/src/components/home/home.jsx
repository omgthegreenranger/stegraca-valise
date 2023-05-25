import React, {useState} from 'react';
import './Home.css';
import {Col, Row, Container} from 'react-bootstrap';
import ProfilePic from './images/profile-photo.png';
import { Logo } from '../svg/logo.jsx';


export default function Home() {
    return (
    <>
    {/* <svg
  width="1000"
  height="500"
  viewBox="00 00 1050 700"
  xmlns="http://www.w3.org/2000/svg">
    <link rel="stylesheet" href="./logo.css" type="text/css" />
    <g>
        <polygon points="500 600,150 70, 350 70, 400 40, 600 40, 650 70,850 70" stroke="purple" stroke-width="15" />
    </g>
    <g>
        <text x="400" y="85" fill="yellow" font-size="30">STEGRACA.CA</text>
    </g>
    <g className="text-line">
        <text className="textlight" x="00" y="275" fill="white" font-size="125">STEPHEN CARDIE</text>
    </g>
    <g>
        <text x="200" y="600" fill="yellow" font-size="50" transform="rotate(-25,250,400)">Fullstack Developer</text>
    </g>
</svg> */}
<div className="logo">
<Logo />
</div>
    </>
                    // <Col className="d-flex align-items-center flex-column mx-auto w-100">
                    //     <Col xs={1} className="m-1">
                    //     <figure>
                    //         <img src={ProfilePic} className="profile-img" alt="Profile of the developer" />
                    //     </figure>
                    //     </Col>
                    //     <Row>

                    //     </Row>
                    //     <Row className="d-flex justify-content-center">
                    //         <div className="stephen">STEPHEN</div>
                    //         <div className="cardie"> CARDIE</div>
                    //         <div className="role">Fullstack Web Developer</div>
                    //     </Row>
                    // </Col>
    )
}