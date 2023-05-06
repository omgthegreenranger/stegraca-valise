import React, {useState, useEffect} from 'react';
import {Container, Col, Row, Button, Modal} from 'react-bootstrap';
import './details.css';
import { IconContext } from 'react-icons';
import { RxExternalLink, RxInfoCircled, RxGithubLogo } from 'react-icons/rx';
import { DiGithub } from 'react-icons/di';

export default function Details(props) {
    let work = props.projectData;
    const clearProjects = () => {
        props.setProjectData()
        props.setPortOpen(true)
    }
    return (
        <>
        <Container className="d-column details-view h-100">
            <Row>
                <Col><h3>{work.name}</h3></Col><Col className="d-flex icon-box"><IconContext.Provider value={{size: '3rem', color: 'white', className: 'link-icons'}}><RxGithubLogo /> <RxExternalLink /> <RxInfoCircled /></IconContext.Provider>
                </Col>
            </Row>
            <Row>
                <Col xs={2}>
                    <div className="picture-stack"></div>
                </Col>
                <Col xs={8}>
                    <Row>
                        {work.description}
                    </Row>
                    <Row>
                        <div><Button type="reset" onClick={clearProjects}>Clear</Button></div>
                    </Row>
                </Col>
                <Col xs={2}>
                    {work.techTags.map((tag) => {
                    return(
                        <Row>{tag}</Row>
                    )})}
                </Col>
            </Row>
        </Container>
        </>
    )
}