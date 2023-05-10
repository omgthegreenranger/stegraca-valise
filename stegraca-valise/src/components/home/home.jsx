import React, {useState} from 'react';
import './Home.css';
import {Col, Container} from 'react-bootstrap';
import ProfilePic from './images/profile-photo.png';


export default function Home() {
    return (
                    <Col className="d-inline-flex align-items-end offset-1">
                        <Col xs={1} className="m-1">
                        <figure>
                            <img src={ProfilePic} className="profile-img" alt="Profile of the developer" />
                        </figure>
                        </Col>
                        <Col>
                            <span className="my-name">STEPHEN CARDIE</span>
                            <span className="position">Fullstack Web Developer</span>
                        </Col>
                    </Col>
    )
}