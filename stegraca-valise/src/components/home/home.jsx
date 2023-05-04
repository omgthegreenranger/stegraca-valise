import React from 'react';
import './Home.css';
import { Stack, Container, Button, Col, Row, Image } from 'react-bootstrap';
import { DiCss3, DiHeroku, DiHtml5, DiJsBadge, DiLinux, DiVisualstudio, DiBootstrap, DiGithub, DiReact } from 'react-icons/di';
import { IconContext } from 'react-icons';
import { Projects, NavBar, Header } from '../index';
import work from '../project/projects.json';
import ProfilePic from './images/profile-photo.jpg';
import anime from 'animejs';


export default function Home() {

    return (
<>
        <Container fluid>
            <Profile />
        </Container>
</>
    )
};

function Profile() {
    return (
        <>
                <Row>
                    <Col xs={1}>
                    </Col>
                    <Col className="d-flex">
                        <figure>
                        <img src={ProfilePic} className="profile-img" alt="Profile of the developer" />
                        </figure>
                        <div className="mx-2 profile-card">
                        <p>STEPHEN CARDIE is a fullstack web developer as a second career.</p>
                        <p>Spending over a decade on the client-facing side of tech, it became very apparent that his motivation was about creating tools to make the job easier.</p>
                        <p>Eventually, he had to take the plunge and do that full-time.</p>
                        <p>He is available for support work, code refactoring, or to help you build that feature.</p>
                        </div>
                        </Col>
                </Row>
</>
    )
}