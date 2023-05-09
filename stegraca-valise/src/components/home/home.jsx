import React, {useState} from 'react';
import './Home.css';
import { Container, Row, Col} from 'react-bootstrap';
import { NavBar, Projects, Bio } from '../index';


export default function Home() {
    return (
                    <Col>
                        <div><span className="my-name">STEPHEN CARDIE</span>
                        <span className="position">Fullstack Web Developer</span></div>
                    </Col>
    )
}