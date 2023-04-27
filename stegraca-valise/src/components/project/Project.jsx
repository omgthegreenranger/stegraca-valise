
import React, {useState} from 'react';
import './Project.css';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import accesscal from './images/accesscal.png';
import astronomy from './images/astronomy.png';
import Projects from './projects.json';


export default function Project() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (    
    <>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100"
        src={accesscal}
        alt="First slide"
        />
        <Carousel.Caption>
            <h3>Bootstrap</h3>
            <p>This is Bootstrap</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100"
        src={astronomy}
        alt="First slide"
        />
        <Carousel.Caption>
            <h3>Bootstrap</h3>
            <p>This is Bootstrap</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </>
  )
  }