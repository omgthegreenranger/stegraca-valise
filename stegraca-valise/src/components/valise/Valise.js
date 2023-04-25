import './Valise.css';
import Home from '../home/Home';
import NavBar from '../navbar/NavBar';
import Header from '../header/Header';
import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
    
export default function Valise({valisePage}) { 

    return (
        <Container fluid>
            <Row>
                <Header />
            </Row>
            <Row>
                <Col xs={1}>
                    <NavBar />
                </Col>
                <Col xs={11}>
                    <Home />
                </Col>
            </Row>
        </Container>
      );
};