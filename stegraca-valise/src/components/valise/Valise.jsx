import './Valise.css';
import React, {useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Projects, NavBar } from '../index';
import ProfilePic from '../home/images/profile-photo.png';

export default function Valise(props) { 
    const {portOpen, setPortOpen } = props;
    // destructure our global states from props

    return (
        <>
        <Splash />
        </>    


    )}

function Splash(props) {
    return(
    <div className="valise-container">
        <div>
            <NavBar />
            <div className="splash">
                <svg
                    width="900"
                    height="200"
                    viewBox="0 0 900 200"
                    xmlns="http //www.w3.org/2000/svg"
                    >
                <text x="0" y="100" class="valise-name">STEPHEN CARDIE</text>
                <text x="0" y="120" class="splash-position">Fullstack Web Developer</text>
                </svg>
            </div>
        </div>
    </div>
    )
}