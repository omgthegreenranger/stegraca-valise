import React, {useState} from 'react';
import './Project.css';
import {Row, Col, Container, Card} from 'react-bootstrap';
import { DiCss3, DiHeroku, DiHtml5, DiJsBadge, DiBootstrap, DiGithub, DiReact } from 'react-icons/di';
import { RxCaretLeft, RxCaretRight, RxExternalLink, RxInfoCircled } from 'react-icons/rx';
import { IconContext } from 'react-icons';
import projectDB from '../project/projects.json';

export default function Project(props) {

  // set the state as needed
  const [projectData, setProjectData] = useState();
  const [tags, setTags] = useState([]);
  const [index, setIndex] = useState(0);

  // define variables
  const works = projectDB.projects;

  // Create functions 
  // Function to handle selecting project
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  // Function to handle Project Card click 
  function handleProjectClick(work) {
    setProjectData(work);
    if(props.portOpen === true) {
      props.setPortOpen(false)
    }
  }

  // Function to handle tags on card mouseover
  const handleCards = (tagList) => {
    setTags(tagList)
    console.log(tagList)
  }

  // Function to set the port-open 
  async function handlePortOpen() {
    await props.setPortOpen((portOpen) => !portOpen)
    let body = document.getElementsByClassName('project-card')
    console.log(body.style)
  }


  console.log(props.portOpen)
  
  return (

    <Container className='d-flex project-pane w-100' fluid>
      <Row onClick={() => handlePortOpen()}>
          <TechLine portOpen={props.portOpen} tagList={tags} />
      </Row>
      <ProjectStack  works={works} handleCards={handleCards} handleProjectClick={handleProjectClick} />
    </Container>
        )
    }

function TechLine(props) {
  console.log("This is the TechLine", props.tagList);
      return (
        <>
        <Col className='d-flex justify-content-left'>
    <IconContext.Provider value={{size: '4.5rem', className: 'tech-icons' }}>
        <span id="css"><DiCss3 /></span> <span id="heroku"><DiHeroku /></span><span id="html"><DiHtml5 /></span><span id="js"><DiJsBadge /></span><span id="bootstrap"><DiBootstrap /></span><span id="react"><DiReact /></span>
    </IconContext.Provider>
    </Col>
    </>)
    }

function ProjectStack(props) {
  let works = props.works;

  return (
  <div className="project-stack">
    {works.map((work) => {
      return (
          <Card className='project-card m-1 px-3' style={{width: '18rem'}} onMouseEnter={() => props.handleCards(work.techTags)} onClick={() => props.handleProjectClick(work)}>
            <Card.Img className = 'card-image' variant="top" src={require(`./images/${work.logo}`)} />
              <Card.Body className='d-block' key={work.id}>
                <Card.Title>{work.name}</Card.Title>
                <Card.Text>{work.shortDesc}</Card.Text>
              </Card.Body>
          </Card>
      )})}
</div>
  )
}