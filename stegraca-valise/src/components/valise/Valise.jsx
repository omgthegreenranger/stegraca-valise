import './Valise.css';
import React, {useState} from 'react';
import { Container, Row } from 'react-bootstrap';
import { Home, NavBar, Header, Projects, Details } from '../index';

export default function Valise({valisePage}) { 
    const [portOpen, setPortOpen] = useState(true);
    const [projectData, setProjectData] = useState();
console.log(portOpen);
    return (
        <>
            <Container className="valise-container d-flex flex-column justify-content-between" fluid>
                <Row className='header-container'>
                    <Header />
                </Row>
                <Row className='my-4 profile-container'>
                    {projectData == null ? <Home /> : <Details setPortOpen={setPortOpen} portOpen={portOpen} projectData={projectData} setProjectData={setProjectData}/>}
                </Row>
                <Row>
                    <div className='d-flex px-0 portfolio-container' fluid>
                        <Projects setPortOpen={setPortOpen} portOpen={portOpen} projectData={projectData} setProjectData={setProjectData} />
                    </div>
                </Row>
            </Container>
</>
    )}