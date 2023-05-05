import React, {useState, useEffect} from 'react';
import {Container, Col, Row, Button, Modal} from 'react-bootstrap';

export default function Details(props) {
    let work = props.projectData;
    return (
        <>
        <Modal>


        </Modal>
        <div>
            <h3>{work.name}</h3>
            <Button type="reset" onClick={()=>props.setProjectData()}>Clear</Button>
        </div>
        </>
    )
}