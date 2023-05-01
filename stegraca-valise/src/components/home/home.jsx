import React from 'react';
import './Home.css';
import { Stack, Container, Button, Col, Row, Image } from 'react-bootstrap';
import { DiCss3, DiHeroku, DiHtml5, DiJsBadge, DiLinux, DiVisualstudio, DiBootstrap, DiGithub, DiReact } from 'react-icons/di';
import { IconContext } from 'react-icons';
import { Projects, NavBar } from '../index';
import work from '../project/projects.json';
import ProfilePic from './images/profile-photo.jpg';
import anime from 'animejs';


export default function Home() {

    anime({
        targets: '.css-prop-demo .el',
        left: '240px',
        backgroundColor: '#FFF',
        borderRadius: ['0%', '50%'],
        easing: 'easeInOutQuad'
      });

    return (
<>
        <Container fluid>
            {/* <Row id="homeContainer" fluid> */}
                <Row>
                    <Col xs={2}>
                    </Col>
                    <Col xs={8} className="d-flex">
                        <figure>
                        <img src={ProfilePic} className="profile-img" alt="Profile of the developer" />
                        </figure>
                        <div className="mx-2">
                        <p>STEPHEN CARDIE is a fullstack web developer as a second career.</p>
                        <p>Spending over a decade on the client-facing side of tech, it became very apparent that his motivation was about creating tools to make the job easier.</p>
                        <p>Eventually, he had to take the plunge and do that full-time.</p>
                        <p>He is available for support work, code refactoring, or to help you build that feature.</p>
                        </div>
                        {/* <div className="css-prop-demo">
                            <div className="large square el">
                           </div>
                        </div> */}
                    </Col>
                    <Col xs={2}>
                    </Col>
                </Row>
                <Row>
                    <Col className="tech-list d-flex justify-content-center">
                        <IconContext.Provider
                        value={{size: '4.5em', padding: '5rem'}}
                        >
                            <DiCss3 /> <DiHeroku /> <DiHtml5 /> <DiJsBadge /> <DiLinux /> <DiVisualstudio /> <DiBootstrap /> <DiGithub /> <DiReact />
                        </IconContext.Provider>
                    </Col>
                </Row>
                <Row className="justify-items-center"> 
                    <Col xs={9} className="justify-items-center">
                    <Projects work={work.projects}/>
                    </Col>
                </Row>
        </Container>
</>
    )
};