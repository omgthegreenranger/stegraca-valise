import React, {Component, useState} from 'react';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import './Project.css';

import {Row, Col, Container, Card, Stack} from 'react-bootstrap';
import { DiCss3, DiHeroku, DiHtml5, DiJsBadge, DiLinux, DiVisualstudio, DiBootstrap, DiGithub, DiReact } from 'react-icons/di';
import { IconContext } from 'react-icons';
import projectDB from '../project/projects.json';

export default function Project() {
  const [portOpen, setPortOpen] = useState({
    isPaneOpen: true,
    isPaneOpenLeft: false,
});

  const [tags, setTags] = useState([]);
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const works = projectDB.projects;
  const spread = works.length;
  return (
    <>
    <div>
    <button onClick={() => setPortOpen({ isPaneOpen: true })}>
        Click me to open right pane!
    </button>
    </div>
    <Container className="project-pane">
      <Row className="g-4 p-4 justify-content-center">
        <Stack className="tech-list d-flex justify-content-center" onClick={() => setPortOpen({ isPaneOpen: true })}>
          <IconContext.Provider value={{size: '4.5em', padding: '5rem'}}>
            <DiCss3 /> <DiHeroku /> <DiHtml5 /> <DiJsBadge /> <DiLinux /> <DiVisualstudio /> <DiBootstrap /> <DiGithub /> <DiReact />
          </IconContext.Provider>
        </Stack>
        {/* <SlidingPane
            className="some-custom-class"
            overlayClassName="some-custom-overlay-class"
            isOpen={portOpen.isPaneOpen}
            title="Hey, it is optional pane title.  I can be React component too."
            subtitle="Optional subtitle."
            width="20%"
            onRequestClose={() => {
            // triggered on "<" on left top click or on outside click
            setPortOpen({ isPaneOpen: false });
            }}
        > */}
          {works.map((work) => {
            const handleCards = (name, id) => {console.log("This is the card for " + name)}
            return (
              <>
                <Card style={{width: '18rem'}} className="m-1 p-1 project-card" onMouseEnter={() => handleCards(work.name, work.id)}>
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
        {/* </SlidingPane> */}
      </Row>
    </Container>
    </>
        )
    }