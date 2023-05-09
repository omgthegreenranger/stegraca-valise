import './Valise.css';
import React, {useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Home, NavBar, Header, Projects, Details, Bio } from '../index';

export default function Valise(props) { 
    //define our global states
    const { portOpen, setPortOpen } = props;

console.log(portOpen);
    return (
            <Container className="valise-container d-flex flex-column" fluid>
                <Row className='profile-container'>
                    <Home />
                </Row>
                <Row>
                    <Col className='d-flex portfolio-container'>
                            <Projects />
                    </Col>
                    <Col className="profile-card" xs={3}>
                        <Bio />
                    </Col>
                </Row>
            </Container>
    )}