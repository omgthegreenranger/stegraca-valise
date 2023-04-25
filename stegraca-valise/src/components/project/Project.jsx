
import React, {useState} from 'react';
import './Project.css';
import { Container, Row, Col, Card, Button, Image, Fade } from 'react-bootstrap';
import Projects from './projects.json';


export default function Project() {
  const projects = Projects['projects'];

  // const [open1, setOpen1] = useState(false);
  // const [open2, setOpen2] = useState(false);
  // const [open3, setOpen3] = useState(false);
  // const [open4, setOpen4] = useState(false);
  // const [open5, setOpen5] = useState(false);
  // const [open6, setOpen6] = useState(false);
  console.log(projects);



  return (    
    <Container fluid className="project-block my-3">
      <Row md={2} xs={1} sm={1} className="g-3">
        {projects.map((project, index) => {
        var key = "open" + index
        return (
        <Col key={key}>
        <Card className="bg-dark text-white project-card">
        <Card.Title className="bg-dark my-1 project-title"><span className="project-name">{project.name}</span></Card.Title>
        <Card.Img src={require(project.image)} className="fluid project-screen" alt="Card background" />
          <Card.ImgOverlay>
          <Card.Body className="align-content-center">
            <Card.Text className="project-desc bg-dark"><span className="desc-text">{project.description}</span>
            </Card.Text>
          </Card.Body>
          </Card.ImgOverlay>
        </Card>
        </Col>
        )}
        )}
      </Row>
      </Container>
  )
}