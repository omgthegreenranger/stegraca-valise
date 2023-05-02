import './Valise.css';
import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Home, NavBar, Header } from '../index';

export default function Valise({valisePage}) { 

    return (
        <Container className="valise-container" fluid>
            <Row>
<Header />
            </Row>

            <Row>
                <Col xs={1}>
                </Col>
                <Col xs={10} className="valise-block">
                    <Home />
                </Col>
                <Col xs={1}>
                </Col>
            </Row>

            <Row>
                <div>&nbsp;</div>
            </Row>
        </Container>
      );
};