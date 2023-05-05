import React from 'react';
import './header.css';
import {Container, Col, Row} from 'react-bootstrap';
import { NavBar } from '../index';

export default function Head() {
    return(
    <>
        <header>
            <div className="d-flex header-block justify-content-flex-start">
                <span className="header-text">STEGRA.CA</span>
            </div>
        </header>
    </>
    )
}