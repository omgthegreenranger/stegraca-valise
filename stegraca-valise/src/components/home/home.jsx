import React from 'react';
import './Home.css';
import { Stack, Container, Button, Col, Row, Image } from 'react-bootstrap';
import { DiCss3, DiHeroku, DiHtml5, DiJsBadge, DiLinux, DiVisualstudio, DiBootstrap, DiGithub, DiReact } from 'react-icons/di';
import { IconContext } from 'react-icons';
import { Projects } from '../index';

export default function Home() {

    return (
<>
        <Container fluid>
            <Row id="homeContainer" >
                <Col xs={7}>
                <Row>
                <Col className="tech-list">
                <DiCss3 /> <DiHeroku /> <DiHtml5 /> <DiJsBadge /> <DiLinux /> <DiVisualstudio /> <DiBootstrap /> <DiGithub /> <DiReact />
                </Col>
                </Row>
                <Row>
                    <Projects />
                </Row>
                </Col>
                <Col xs={5}><p>STEPHEN CARDIE is a fullstack web developer as a second career.</p>
                <p>Spending over a decade on the client-facing side of tech, it became very apparent that his motivation was about creating tools to make the job easier.</p>
                <p>Eventually, he had to take the plunge and do that full-time.</p>
                <p>He is available for support work, code refactoring, or to help you build that feature.</p>
                </Col>
            </Row>
        </Container>
</>
    )
};