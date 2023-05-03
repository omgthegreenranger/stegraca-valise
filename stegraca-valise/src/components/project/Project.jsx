import React, {Component, useState} from 'react';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import './Project.css';
import {Row, Col, Container, Card, Stack} from 'react-bootstrap';
import { DiCss3, DiHeroku, DiHtml5, DiJsBadge, DiLinux, DiVisualstudio, DiBootstrap, DiGithub, DiReact } from 'react-icons/di';
import { RxCaretLeft, RxCaretRight, RxExternalLink, RxInfoCircled } from 'react-icons/rx';
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

    <Container className='d-flex project-pane' fluid>
      <div className='d-flex justify-content-center' onClick={() => props.setPortOpen((portOpen) => !portOpen)}>
          <TechLine portOpen={props.portOpen} tagList={() => tags == '' ? [] : tags} />
      </div>
      <div className={`d-flex project-stack ${props.portOpen ? "visible" : "invisible"}`}>
          {works.map((work) => {
            const handleCards = (name, id, tagList) => {
              setTags(tagList)
              console.log(tags)
            }
            return (
                <Card className='m-1 p-1 project-card' onMouseEnter={() => handleCards(work.name, work.id, work.techTags)}>
                  <Card.Img variant="top" src={require(`./images/${work.image}`)} />
                    <Card.Body key={work.id}>
                      <Card.Title>{work.name}</Card.Title>
                      <Card.Text>{work.shortDesc}</Card.Text>
                    </Card.Body>
                    <Card.Footer className="bg-color-blue">
                      <Card.Link href={work.appLink}><span className="footerIcons"><RxExternalLink /></span></Card.Link>
                      <Card.Link href={work.gitLink}><DiGithub /></Card.Link>
                      <Card.Link href="#"><RxInfoCircled /></Card.Link>
                    </Card.Footer>
                </Card>
            )})}
      </div>
    </Container>
        )
    }

function TechLine(props) {
  console.log(props.tags);
      return (
    <IconContext.Provider value={{size: '4.5em', className: 'tech-icons' }}>
      <DiCss3 /> <DiHeroku /> <DiHtml5 /> <DiJsBadge /> <DiLinux /> <DiVisualstudio /> <DiBootstrap /> <DiGithub /> <DiReact />
    </IconContext.Provider>)
    }