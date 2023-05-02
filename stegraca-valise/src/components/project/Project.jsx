import React, {Component, useState} from 'react';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import './Project.css';

import {Row, Col, Container, Card, Stack} from 'react-bootstrap';
import { DiCss3, DiHeroku, DiHtml5, DiJsBadge, DiLinux, DiVisualstudio, DiBootstrap, DiGithub, DiReact } from 'react-icons/di';
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx'
import { IconContext } from 'react-icons';
import projectDB from '../project/projects.json';

export default function Project(props) {

  const [tags, setTags] = useState([]);
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const works = projectDB.projects;
  console.log(works)
  const spread = works.length;
  return (
    <>
    <Container className="project-pane">
      <Row className="h-100">
        <Col className="tech-list" xs={2} onClick={() => props.setPortOpen((portOpen) => !portOpen)}>
          <TechLine portOpen={props.portOpen} tagList={tags =='' ? tags : ''} />
        </Col>
        <Col className={`project-stack ${props.portOpen ? "visible" : "invisible"}`}>
        <Stack xs={11}>
          {works.map((work) => {
            const handleCards = (name, id, tagList) => {
              setTags(tagList)
              console.log(tagList)
            }
            return (
              <>
                <Card className="m-1 p-1 project-card" onMouseEnter={() => handleCards(work.name, work.id, work.techTags)}>
                  <Card.Img variant="top" src={require(`./images/${work.image}`)} />
                    <Card.Body key={work.id}>
                      <Card.Title>{work.name}</Card.Title>
                      <Card.Text>{work.description}</Card.Text>
                      <Card.Link href={work.appLink}>Demo</Card.Link>
                      <Card.Link href={work.gitLink}>Git Repo</Card.Link>
                    </Card.Body>
                </Card>
              </>
            )})}
          </Stack>
          </Col>
      </Row>
    </Container>
    </>
        )
    }

function TechLine(props) {
      return(
      <IconContext.Provider value={{size: '4.5em', padding: '3rem', className: 'tech-icons' }}>
      {props.portOpen ? <RxCaretRight /> : <RxCaretLeft />}<DiCss3 /> <DiHeroku /> <DiHtml5 /> <DiJsBadge /> <DiLinux /> <DiVisualstudio /> <DiBootstrap /> <DiGithub /> <DiReact />
    </IconContext.Provider>)
    }