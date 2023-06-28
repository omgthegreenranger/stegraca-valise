import React, {useState, useEffect} from 'react';
import {Container, Col, Row, Button, ListGroup, ListGroupItem, Collapse, Stack} from 'react-bootstrap';
import './details.css';
import { IconContext } from 'react-icons';
import { RxExternalLink, RxInfoCircled, RxGithubLogo, RxCross1 } from 'react-icons/rx';
import { run as runHolder } from 'holderjs/holder';


export default function Details(props) {
    const {projectData, setProjectData, portOpen, setPortOpen } = props;
    const [open, setOpen] = useState(false);
    let work = projectData;

    const clearProjects = () => {
        setProjectData()
        setPortOpen(true)
    }

    useEffect(() => {
        runHolder('image-class-name'); });
    return (
        <>
                {work ? 
    <Container className="details-view">
            <Row>
                <Col xs={3}>
                    <div>
                        <img className = 'card-image-details' alt="Project Logo" src={work.logo == "" ? `holder.js/300x200?auto=yes&text=${work.name}&theme=social` : require(`../project/images/${work.logo}`)} /></div>
                <Stack gap={1}>
                    {work.screenshots == "" ? "" : work.screenshots.map((screenshot) => {
                        return(
                        <img alt="Project Screenshot" src={require(`../project/images/${screenshot}`)} />
                    )})}

                </Stack>
                </Col>
                <Col>
                    <Row className="project-title">
                        <Col>
                            <span className="name-title">{work.name}</span>
                            <IconContext.Provider value={{size: '3rem', className: 'link-icons'}}>
                                <a href={work.gitLink} target="_blank"><RxGithubLogo /></a>
                                <a href={work.appLink} target="_blank"><RxExternalLink /></a>
                            </IconContext.Provider>
                        </Col>
                        <Col className="d-flex icon-box" xs={1}>
                            <IconContext.Provider value={{size: '3rem', className: 'link-icons'}}>
                                <span onClick={clearProjects}><RxCross1 /></span>
                            </IconContext.Provider>
                        </Col>
                    </Row>
                    <Row className="project-meat h-75">
                        <Col xs={9} className="project-descs">
                            <Row>
                                {work.midDesc}
                            </Row>
                            <Row className="project-desc" >
                                <Collapse in={open}>
                                    <Row id="project-description">
                                        {work.projDesc}
                                    </Row>
                                </Collapse>
                                <div>
                                    <Button onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>Read more</Button>
                                </div>
                            </Row>
                        </Col>
                        <Col xs={3} className="tech-stack">
                            <span>Tech Stack</span>
                            <ListGroup>
                            {work.techTags.map((tag) => {
                            return(
                                <ListGroup.Item>{tag}</ListGroup.Item>
                            )})}
                            </ListGroup>
                            <span>Contributing team</span>
                            <ListGroup>
                                {work.team.map((mem) => {
                                return(
                                    <ListGroup.Item><a href={mem.url} target="_blank">{mem.name}</a></ListGroup.Item>
                                )})}
                            </ListGroup>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
                : ""}
        </>

    )
}