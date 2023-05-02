
import React, {useState} from 'react';
import './Project.css';
import {Row, Col, Card, CardGroup} from 'react-bootstrap';
import { DiCss3, DiHeroku, DiHtml5, DiJsBadge, DiLinux, DiVisualstudio, DiBootstrap, DiGithub, DiReact } from 'react-icons/di';
import { IconContext } from 'react-icons';


export default function Project(props) {
  const [tags, setTags] = useState([]);
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const works = props.work;
  const spread = works.length;
  return (
    <>
    <Row>
      <Col className="tech-list d-flex justify-content-center">
        <IconContext.Provider value={{size: '4.5em', padding: '5rem'}}>
          <DiCss3 /> <DiHeroku /> <DiHtml5 /> <DiJsBadge /> <DiLinux /> <DiVisualstudio /> <DiBootstrap /> <DiGithub /> <DiReact />
        </IconContext.Provider>
      </Col>
    </Row>
    <Row className="g-4 p-4 justify-content-center">
       {works.map((work) => {
        const handleCards = (name, id) => {console.log("This is the card for " + name)}
        return (
          <>
            <Card style={{width: '18rem'}} className="m-1 p-1 project-cards" onMouseEnter={() => handleCards(work.name, work.id)}>
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
    </Row>
    </>
        )
    }