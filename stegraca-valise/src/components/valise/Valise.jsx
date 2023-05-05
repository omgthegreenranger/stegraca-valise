import './Valise.css';
import React, {Component, useState} from 'react';
import { Container, Col, Row, Button, } from 'react-bootstrap';
import { Home, NavBar, Header, Projects } from '../index';

export default function Valise({valisePage}) { 
    const [portOpen, setPortOpen] = useState(true);
console.log(portOpen);
    return (
        <>
            <Container className="valise-container d-flex flex-column justify-content-between" fluid>
                <Row className='my-4 profile-container'>
                    <Home />
                </Row>
                <Row>
                    <div className='d-flex px-0 portfolio-container' fluid>
                        <Projects setPortOpen={setPortOpen} portOpen={portOpen} />
                    </div>
                </Row>
            </Container>
</>
    )}