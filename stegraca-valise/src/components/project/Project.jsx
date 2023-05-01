
import React, {useState} from 'react';
import './Project.css';
import {Row, Col, Carousel} from 'react-bootstrap';
import { DiCss3, DiHeroku, DiHtml5, DiJsBadge, DiLinux, DiVisualstudio, DiBootstrap, DiGithub, DiReact } from 'react-icons/di';
import { IconContext } from 'react-icons';


export default function Project(props) {
  const [tags, setTags] = useState([]);
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const works = props.work;
  return (
    <>
    <Carousel activeIndex={index} onSelect={handleSelect} fade>
       {works.map((work) => {
        
        return (
      <Carousel.Item>
        <img className="d-block w-100" 
        src={require(`./images/${work.image}`)}
        alt={work.description}/>
        <Carousel.Caption>
          <h3>{work.name}</h3>
          <p>{work.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
        )
       }
      )
      }
    </Carousel>
        <Row>
        <Col className="tech-list d-flex justify-content-center">
            <IconContext.Provider
            value={{size: '4.5em', padding: '5rem'}}
            >
                <DiCss3 /> <DiHeroku /> <DiHtml5 /> <DiJsBadge /> <DiLinux /> <DiVisualstudio /> <DiBootstrap /> <DiGithub /> <DiReact />
            </IconContext.Provider>
        </Col>
    </Row>
    </>
        )
    }