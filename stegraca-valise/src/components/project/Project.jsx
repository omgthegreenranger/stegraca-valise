
import React, {useState} from 'react';
import './Project.css';
import { Carousel } from 'react-bootstrap';
import accesscal from './images/accesscal.png';
import astronomy from './images/astronomy.png';

export default function Project(props) {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const works = props.work;
  return (    
    <>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {works.map((work) => {
        console.log(work);
         return (
        <>
        <Carousel.Item>
          <img className="d-block w-100"
          src="holder.js/300x200"
          alt="Slide Card Wazoo"
          />
          <Carousel.Caption>
              <h3>{work.name}</h3>
              <p>{work.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
        </>
)})}
    </Carousel>

    </>
  )
  }