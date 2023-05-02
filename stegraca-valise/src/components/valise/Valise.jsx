import './Valise.css';
import React, {Component, useState} from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import { Home, NavBar, Header, Projects } from '../index';

export default function Valise({valisePage}) { 
    const [portOpen, setPortOpen] = useState({
        port: true
    });
console.log(portOpen);
    return (
<>
        <Container className='valise-container' fluid>
            <Row>
                <Col xs={1}>
                    <NavBar />
                </Col>
                <Col xs={portOpen ? 7 : 10}>
                    <Home />
                </Col>
                <Col className="h-100" xs={portOpen ? 4 : 1}>
                   <Projects setPortOpen={setPortOpen} portOpen={portOpen} />
                </Col>
            </Row>
        </Container>
</>
    )}