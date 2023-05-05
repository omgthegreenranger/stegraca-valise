import React, {useState, useEffect} from 'react';
import {Container, Col, Row, Button, Modal} from 'react-bootstrap';

export default function Details(props) {
    let work = props.projectData;
    return (
        <>
        <Modal.Header closeButton>
            <Modal.Title>{work.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
                {work.description}
            </div>
            <div>
                {work.id}
            </div>
            <div>{work.gitLink} {work.appLink}</div>
            {work.techTags.map((tag) => {
                    return(
                        <div>{tag}</div>
                )})}
        </Modal.Body>
        <div>
            <h3>{work.name}</h3>
            <Button type="reset" onClick={()=>props.setProjectData()}>Clear</Button>
        </div>
        </>
    )
}