import './Valise.css';
import React, {useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Home, Projects, Bio, NavBar } from '../index';

export default function Valise(props) { 
    // destructure our global states from props
    const { portOpen, setPortOpen } = props;

console.log(portOpen);
    return (
            <Container className="valise-container d-flex flex-column" fluid>
                <Row className='profile-container'>
                    {/* <div><NavBar /></div> */}
                    <Home />
                </Row>
                <Row className="d-flex justify-content-center">
                    {/* <Col className='d-flex portfolio-container offset-md-1' xs={7}>
                            <Projects portOpen={portOpen} setPortOpen={setPortOpen} />
                    </Col> */}
                    <div className="d-flex w-50">
                        <Bio />
                    </div>
                </Row>
            </Container>
    )}