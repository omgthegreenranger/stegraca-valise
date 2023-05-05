import React, {useState} from 'react';
import './Project.css';
import {Row, Col, Container, Card} from 'react-bootstrap';
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
  console.log(props.portOpen)
  const works = projectDB.projects;

  async function handlePortOpen() {
    await props.setPortOpen((portOpen) => !portOpen)
    let body = document.getElementsByClassName('project-card')
    console.log(body.style)
  }

  function handleProjectClick(work) {
    console.log("This should be after click.", work);
    props.setProjectData(work);
    console.log(props.projectData)
    if(props.portOpen === true) {
      props.setPortOpen(false)
    }

  }

  return (

    <Container className='d-flex project-pane w-100' fluid>
    <Row onClick={() => handlePortOpen()}>
        <TechLine portOpen={props.portOpen} tagList={tags} />
    </Row>

    <div className="project-stack">
        {works.map((work) => {
          const handleCards = (name, id, tagList) => {
            setTags(tagList)
            console.log(tags)
          }
          return (
              <Card className='project-card m-1 px-3' style={props.portOpen ? {width: '18rem'} : {width: '10rem'}} onMouseEnter={() => handleCards(work.name, work.id, work.techTags)} onClick={() => handleProjectClick(work)}>
                <Card.Img className = 'card-image' variant="top" src={require(`./images/${work.image}`)} />
                  <Card.Body className={props.portOpen ? 'd-block' : 'd-none'} key={work.id}>
                    <Card.Title>{work.name}</Card.Title>
                    <Card.Text>{work.shortDesc}</Card.Text>
                  </Card.Body>
                  {/* <Card.Footer className="bg-color-blue">
                    <Card.Link href={work.appLink}><span className="footerIcons"><RxExternalLink /></span></Card.Link>
                    <Card.Link href={work.gitLink}><DiGithub /></Card.Link>
                    <Card.Link href="#"><RxInfoCircled /></Card.Link>
                  </Card.Footer> */}
              </Card>
          )})}
    </div>
  </Container>
        )
    }

function TechLine(props) {
  console.log(props);
      return (
        <>
        <Col className='d-flex justify-content-center'>
    <IconContext.Provider value={{size: '4.5rem', className: 'tech-icons' }}>
        <span id="css"><DiCss3 /></span> <span id="heroku"><DiHeroku /></span><span id="html"><DiHtml5 /></span><span id="js"><DiJsBadge /></span><span id="bootstrap"><DiBootstrap /></span><span id="react"><DiReact /></span>
    </IconContext.Provider>
    </Col>
    </>)
    }