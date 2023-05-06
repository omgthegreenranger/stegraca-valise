import React, {useState, useEffect} from 'react';
import {Container, Col, Row, Button, ListGroup, ListGroupItem} from 'react-bootstrap';
import './details.css';
import { IconContext } from 'react-icons';
import { RxExternalLink, RxInfoCircled, RxGithubLogo, RxCross1 } from 'react-icons/rx';
import { run as runHolder } from 'holderjs/holder';

export default function Details(props) {
    let work = props.projectData;
    const clearProjects = () => {
        props.setProjectData()
        props.setPortOpen(true)
    }
    useEffect(() => {
        runHolder('image-class-name'); });

    return (
        <>
        <Container className="d-column details-view w-75">
            <Row className="project-title">
                <Col><h3>{work.name}</h3></Col>
                <Col className="d-flex icon-box"><IconContext.Provider value={{size: '3rem', color: 'white', className: 'link-icons'}}><a href={work.gitLink}><RxGithubLogo /></a> <a href={work.appLink}><RxExternalLink /></a><span onClick={clearProjects}><RxCross1 /></span></IconContext.Provider>
                </Col>
            </Row>
            <Row className="project-meat">
                <Col xs={3}>
                    <div className="picture-stack">
                        <img className = 'card-image' src={require(`../project/images/${work.logo}`)} />
                        <img src="holder.js/100px150p" />
                    </div>
                </Col>
                <Col xs={7}>
                    <Row>
                        {work.midDesc}
                    </Row>
                    <Row>
                        <div><Button type="reset" onClick={clearProjects}>Clear</Button></div>
                    </Row>
                </Col>
                <Col xs={2} className="tech-stack">
                    <span>Tech Stack</span>
                    <ListGroup>
                    {work.techTags.map((tag) => {
                    return(
                        <ListGroup.Item>{tag}</ListGroup.Item>
                    )})}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
        </>
    )
}