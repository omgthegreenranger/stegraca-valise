import './Valise.css';
import React, {Component, useState} from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import { Home, NavBar, Header, Projects } from '../index';

export default function Valise({valisePage}) { 
    const [portOpen, setPortOpen] = useState({
        isPaneOpen: false,
        isPaneOpenLeft: false,
    });

    return (
<>
        <Container className='valise-container' fluid>
            <Row>
                <Col xs={1}>
                    <NavBar />
                </Col>
                <Col xs={9}>
                    <Home />
                    <Button type="button" value="portfolio">Portfolio</Button>
                </Col>
                <Col xs={2}>
                   <Projects />
                </Col>
            </Row>
        </Container>
</>
    )}