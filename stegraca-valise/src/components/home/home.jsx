import React from 'react';
import './Home.css';
import { Container, Row, Col} from 'react-bootstrap';
import { NavBar } from '../index';
import ProfilePic from './images/profile-photo.jpg';


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
                <Row className="d-flex justify-content-between">
                    <Col xs={1}>
                        <NavBar />
                    </Col>
                    <Col className="offset-md-1">
                        <Row>
                            <Col>
                        <figure>
                        <img src={ProfilePic} className="profile-img" alt="Profile of the developer" />
                        </figure>
                        </Col>
                        <Col>
                        <h1>STEPHEN</h1><br />
                        <h1>CARDIE</h1><br />
                        <h2>Fullstack Web Developer</h2>
                        </Col>
                        </Row>
                    </Col>
                    <Col xs={5}>
                        <div className="mx-2 profile-card">
                        <p>STEPHEN CARDIE is a fullstack web developer as a second career.</p>
                        <p>Spending over a decade on the client-facing side of tech, it became very apparent that his motivation was about creating tools to make the job easier.</p>
                        <p>Eventually, he had to take the plunge and do that full-time.</p>
                        <p>He is available for support work, code refactoring, or to help you build that feature.</p>
                        </div>
                    </Col>
                    <Col xs={1}>
                    </Col>
                </Row>
</>
    )
}