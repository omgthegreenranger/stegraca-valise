import React, {useState} from 'react';
import './Project.css';
import {Row, Col, Container, Card} from 'react-bootstrap';
import { DiCss3, DiHeroku, DiHtml5, DiJsBadge, DiBootstrap, DiMongodb, DiMysql, DiGithub, DiReact } from 'react-icons/di';
import { RxCaretLeft, RxCaretRight, RxExternalLink, RxInfoCircled } from 'react-icons/rx';
import { IconContext } from 'react-icons';
import projectDB from '../project/projects.json';
import {Details} from '../index'

export default function Project(props) {

  // set the state as needed
  const {portOpen, setPortOpen} = props;
  const [projectData, setProjectData] = useState();
  const [tags, setTags] = useState([]);
  const [index, setIndex] = useState(0);

  // define variables
  const works = projectDB.projects;

  // Create functions 

  // Function to handle Project Card click 
  function handleProjectClick(work) {
    setProjectData(work);
    if(portOpen === true) {
      setPortOpen(false)
    }
  }

  // Function to handle tags on card mouseover
  const handleCards = (tagList) => {
    setTags(tagList)
    console.log(tagList)
  }

  // Function to set the port-open 
  async function handlePortOpen() {
    await setPortOpen((portOpen) => !portOpen)
    let body = document.getElementsByClassName('project-card')
    console.log(body.style)
  }


  return (

    <Container className='d-flex project-pane w-100' fluid>
      <Row onClick={() => handlePortOpen()}>
          <TechLine portOpen={portOpen} tagList={tags} />
      </Row>
      <Row>
      {portOpen ? 
        <ProjectStack  works={works} portOpen={portOpen} setPortOpen={setPortOpen} handleCards={handleCards} handleProjectClick={handleProjectClick} /> : <Details projectData={projectData} setProjectData={setProjectData} portOpen={portOpen} setPortOpen={setPortOpen}/>}
      </Row>
    </Container>
        )
    }

function TechLine(props) {
  console.log("This is the TechLine", props.tagList);

      return (
        <>
          <Col className='d-flex justify-content-left'>
            <IconContext.Provider value={{size: '4.5rem', className: 'tech-icons' }}>
              <span id="MongoDB"><DiMongodb /></span><span id="MySQL"><DiMysql /></span><span id="css"><DiCss3 /></span> <span id="heroku"><DiHeroku /></span><span id="html"><DiHtml5 /></span><span id="JS"><DiJsBadge /></span><span id="bootstrap"><DiBootstrap /></span><span id="react"><DiReact /></span>
            </IconContext.Provider>
          </Col>
        </>
        )
    }

function ProjectStack(props) {
  const {works, portOpen, setPortOpen, handleCards, handleProjectClick} = props;
  return (
  <div className="project-stack">
    {works.map((work) => {
      return (
          <Card className="project-card px-0" onMouseEnter={() => handleCards(work.techTags)} onClick={() => handleProjectClick(work)}>
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