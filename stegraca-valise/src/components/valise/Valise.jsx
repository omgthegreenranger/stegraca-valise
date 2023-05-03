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
        <div className='d-flex valise-container'>
            <div className='profile-container'>
                <Container fluid>
                    <Row>
                        <Col xs={1}>
                            <NavBar />
                        </Col>
                        <Col xs={11}>
                            <Home />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='d-flex portfolio-container w-100'>
                <Projects setPortOpen={setPortOpen} portOpen={portOpen} />
            </div>
        </div>
</>
    )}