import './Valise.css';
import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Home, NavBar } from '../index';

export default function Valise({valisePage}) { 

    return (
        <Container fluid>
            <Row>
                &nbsp;
            </Row>
            <Row>
                <Col xs={1}>&nbsp;
                </Col>
                <Col xs={11} className="valise-top">&nbsp;
                </Col>
            </Row>
            <Row>
                <Col xs={1}>
                    <NavBar />
                </Col>
                <Col xs={11} className="valise-block">
                    <Home />
                </Col>
            </Row>
        </Container>
      );
};