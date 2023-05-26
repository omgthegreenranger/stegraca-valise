import React from 'react';
import './header.css';
import {Container, Col, Row} from 'react-bootstrap';
import { MdMail, MdSimCardDownload } from 'react-icons/md';
import { SiMastodon, SiLinkedin, SiGithub } from 'react-icons/si';
import {IconContext} from 'react-icons';

export default function Head() {
    return(
    <>
        <header className="d-row">
            <Row className="d-flex m-0 justify-content-space-between">
                <Col className="d-flex header-block p-0 justify-content-flex-start">
                    <div className="header-text"><span className="ste">STE</span><span className="phen">phen</span><span className="gra">GRA</span><span className="ca">.CA</span></div>
                </Col>
          </Row>
        </header>
    </>
    )
}