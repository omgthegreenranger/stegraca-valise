import React from 'react';
import profile from './images/profile-photo.jpg';
import ReactLogo from './images/react.svg';
import CSSlogo from './images/css-3.svg';
import HTMLlogo from './images/html-1.svg';
import MariaDBlogo from './images/mariadb.svg';
import BootstrapLogo from './images/bootstrap.svg';
import JSlogo from './images/javascript.svg';
import MongoLogo from './images/mongodb.svg';
import MysqlLogo from './images/mysql.svg';
import NodejsLogo from './images/nodejs.svg';
import './Home.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home() {
    return (
        <Container fluid>
            <Row md={2} xs={1} className="justify-content-md-left px-2 mx-5">
                <Col lg="4" md="6">
                    <h2>Stephen Cardie, fullstack web developer.</h2>
                    <p>Welcome! Please have a look around. I am currently looking to assist you in application development in, but not only, the following:</p>
                <figure>
                    <img className="profile" src={profile} alt="Profile by Enfys Photography" />
                    <figcaption className="figure-caption">Photo taken by <a href="http://www.enfysphotography.com">Enfys Photography</a></figcaption>
                </figure>
                </Col>
                <Col lg="8" md="6">
                <Container className="py-4">
                        <Row xs={1} sm={2} lg={3} className="align-items-center p-2">
                            <Col className="skill-card">
                                <div className="skill-logo">
                                    <img className="logo" src={HTMLlogo} alt="HTML5 logo" />
                                </div>
                                <div className="skill-name mx-auto">
                                    <span>HTML5</span>
                                </div>
                            </Col>
                            <Col className="skill-card">
                                <div className="skill-logo">
                                    <img className="logo" src={JSlogo} alt="JavaScript logo" />
                                </div>
                                <div className="skill-name">
                                    <span>JavaScript ES6</span>
                                </div>
                            </Col>
                            <Col className="skill-card">
                                <div className="skill-logo">
                                    <img className="logo" src={NodejsLogo} alt="NodeJS logo" />
                                </div>
                                <div className="skill-name">
                                    <span>NodeJS</span>
                                </div>
                            </Col>
                            <Col className="skill-card">
                                <div className="skill-logo">
                                    <img src={MariaDBlogo} className="logo" alt="MariaDB logo" />
                                </div>
                                <div className="skill-name">
                                    <span>MariaDB</span>
                                </div>
                            </Col>
                            <Col className="skill-card">
                                <div className="skill-logo">
                                    <img className="logo" src={MysqlLogo} alt="MySQL logo" />
                                </div>
                                <div className="skill-name">
                                    <span>MySQL</span>
                                </div>
                            </Col>
                            <Col className="skill-card">
                                <div className="skill-logo">
                                    <img className="logo" src={MongoLogo} alt="MongoDB logo" />
                                </div>
                                <div className="skill-name">
                                    <span>MongoDB</span>
                                </div>
                            </Col>
                            <Col className="skill-card">
                                <div className="skill-logo">
                                    <img className="logo" src={BootstrapLogo} alt="Bootstrap logo" />
                                </div>
                                <div className="skill-name">
                                    <span>Bootstrap</span>
                                </div>
                            </Col>
                            <Col className="skill-card">
                                <div className="skill-logo">
                                    <img src={CSSlogo} className="logo" alt="CSS Logo" />
                                </div>
                                <div className="skill-name">
                                    <span>CSS</span>
                                </div>
                            </Col>
                            <Col className="skill-card">
                                <div className="skill-logo">
                                    <img src={ReactLogo} className="logo" alt= "ReactJS Logo" />
                                </div>
                                <div className="skill-name">
                                    <span>ReactJS</span>
                                </div>
                            </Col>
                        </Row>
                </Container>
                </Col>
            </Row>
        </Container>
    )
};