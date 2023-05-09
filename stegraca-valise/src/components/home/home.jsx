import React, {useState} from 'react';
import './Home.css';
import {Col} from 'react-bootstrap';


export default function Home() {
    return (
                    <Col className="offset-md-1">
                        <div><span className="my-name">STEPHEN CARDIE</span>
                        <span className="position">Fullstack Web Developer</span></div>
                    </Col>
    )
}