import './Valise.css';
import React, {useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Home, Projects, Bio } from '../index';

export default function Valise(props) { 
    // destructure our global states from props
    const { portOpen, setPortOpen } = props;

console.log(portOpen);
    return (
            <Container className="valise-container d-flex flex-column" fluid>
                <Row className='profile-container'>
                    <Home />
                </Row>
                <Row>
                    <Col className='d-flex portfolio-container offset-md-1' xs={7}>
                            <Projects portOpen={portOpen} setPortOpen={setPortOpen} />
                    </Col>
                    <Col className="profile-card" xs={3}>
                        <Bio />
                    </Col>
                </Row>
            </Container>
    )}