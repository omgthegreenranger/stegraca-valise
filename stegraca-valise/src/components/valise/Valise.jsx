import './Valise.css';
import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Home } from '../index';

export default function Valise({valisePage}) { 

    return (
        <Container fluid>
            <Row>
                <Col>
                    <Home />
                </Col>
            </Row>
        </Container>
      );
};