
import React, {useState} from 'react';
import AccessCal from "./images/AccessCal-screenshot.png";
import AstronoMy from "./images/Astrono-MyScreenshot.png";
import Project3 from "./images/project3.jpg";
import Project4 from "./images/project4.jpg";
import Project5 from "./images/project5.jpg";
import Project6 from "./images/project6.jpg";
import './Project.css';
import { Container, Row, Col, Card, Button, Image, Fade } from 'react-bootstrap';

export default function Project() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);

  return (    
    <Container fluid className="project-block my-3">
      <Row md={2} xs={1} sm={1} className="g-3">
        <Col>
        <Card className="bg-dark text-white project-card">
        <Card.Title className="bg-dark my-1 project-title" onClick={() => setOpen1(!open1)} aria-controls="example-fade-text" aria-expanded={open1}><span className="project-name">Astrono-MyDashboard</span><span className="project-more-info">Click here for details</span></Card.Title>
        <Card.Img src={AstronoMy} className="fluid project-screen" alt="Card background" />
          <Card.ImgOverlay>
          <Card.Body className="align-content-center">
          <Fade in={open1}>
            <Card.Text className="project-desc bg-dark"><span className="desc-text">Project #1 for the Fullstack Bootcamp - I and my team of three built an astronomy dashboard to provide positional stargazing information.</span>
            </Card.Text>
          </Fade>
          </Card.Body>
          </Card.ImgOverlay>
        </Card>
        </Col>
        <Col>
        <Card className="bg-dark text-white project-card">
        <Card.Title className="bg-dark my-1 project-title" onClick={() => setOpen2(!open2)} aria-controls="example-fade-text" aria-expanded={open2}><span className="project-name">AccessCal - the Accessibility Calendar</span><span className="project-more-info">Click here for details</span></Card.Title>
        <Card.Img src={AccessCal} className="fluid project-screen" alt="Card background" />
          <Card.ImgOverlay>
          <Card.Body className="align-content-center">
          <Fade in={open2}>
            <Card.Text className="bg-dark">Project #2 for the Fullstack Bootcamp - our team built the initial MVP of a countdown-calendar to help neurospicy (like myself) navigate Time Blindness. The concept is to reframe events by priority rather than deadlines.
            </Card.Text>
          </Fade>
          </Card.Body>
          </Card.ImgOverlay>
        </Card>
        </Col>
        <Col>
        <Card className="bg-dark text-white project-card">
        <Card.Title className="bg-dark my-1 project-title" onClick={() => setOpen3(!open3)} aria-controls="example-fade-text" aria-expanded={open3}><span className="project-name">PetPal</span><span className="project-more-info">Click here for details</span></Card.Title>
        <Card.Img src={Project3} className="fluid project-screen" alt="Card background" />
          <Card.ImgOverlay>
          <Card.Body className="align-content-center">
          <Fade in={open3}>
            <Card.Text className="bg-dark">This mobile app connects pets with each other in the ever-growing plan to overtake their homes. It was commissioned by raccoons, who are clearly evil.
            </Card.Text>
          </Fade>
          </Card.Body>
          </Card.ImgOverlay>
        </Card>
        </Col>
        <Col>
        <Card className="bg-dark text-white project-card">
        <Card.Title className="bg-dark my-1 project-title" onClick={() => setOpen4(!open4)} aria-controls="example-fade-text" aria-expanded={open4}><span className="project-name">JINXR</span><span className="project-more-info">Click here for details</span></Card.Title>
        <Card.Img src={Project4} className="fluid project-screen" alt="Card background" />
          <Card.ImgOverlay>
          <Card.Body className="align-content-center">
          <Fade in={open4}>
            <Card.Text className="bg-dark">A project of the Worldwide Cursing Federation, this web application crowdfunds people wishing ill upon their nemesis.
            </Card.Text>
          </Fade>
          </Card.Body>
          </Card.ImgOverlay>
        </Card>
        </Col>
        <Col>
        <Card className="bg-dark text-white project-card">
        <Card.Title className="bg-dark my-1 project-title" onClick={() => setOpen5(!open5)} aria-controls="example-fade-text" aria-expanded={open5}><span className="project-name">IS YOUR PLANT?</span><span className="project-more-info">Click here for details</span></Card.Title>
        <Card.Img src={Project5} className="fluid project-screen" alt="Card background" />
          <Card.ImgOverlay>
          <Card.Body className="align-content-center">
          <Fade in={open5}>
            <Card.Text className="bg-dark">A Javascript app that serves geolocation data in realtime with the aim to answer the eternal question: "Is your plant?"
            </Card.Text>
          </Fade>
          </Card.Body>
          </Card.ImgOverlay>
        </Card>
        </Col>
        <Col>
        <Card className="bg-dark text-white project-card">
        <Card.Title className="bg-dark my-1 project-title" onClick={() => setOpen6(!open6)} aria-controls="example-fade-text" aria-expanded={open6}><span className="project-name">AccessCal - the Accessibility Calendar</span><span className="project-more-info">Click here for details</span></Card.Title>
        <Card.Img src={Project6} className="fluid project-screen" alt="Card background" />
          <Card.ImgOverlay>
          <Card.Body className="align-content-center">
          <Fade in={open6}>
            <Card.Text className="bg-dark">Project #2 for the Fullstack Bootcamp - our team built the initial MVP of a countdown-calendar to help neurospicy (like myself) navigate Time Blindness. The concept is to reframe events by priority rather than deadlines.
            </Card.Text>
          </Fade>
          </Card.Body>
          </Card.ImgOverlay>
        </Card>
        </Col>
      </Row>
      </Container>
  )
}