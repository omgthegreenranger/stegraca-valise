import React from 'react';
import profile from './images/profile-photo.jpg';
import ReactLogo from './images/react.svg';
import CSSlogo from './images/css-3.svg';
import HTMLlogo from './images/html-1.svg';
import MariaDBlogo from './images/mariadb.svg';
import './Home.css'

export default function Home() {
    return (
        <div className="about-block">
            <figure>
                <img className="profile" src={profile} alt="Profile" />
            </figure>
            <article className="writeup">
                <h2>Stephen Cardie, fullstack web developer.</h2>
                <p>Welcome to my website! Please, have a look around!</p>
                <div className="skill-card">
                    <div className="skill-logo">
                    <img src={HTMLlogo} width="250" alt="HTML5 logo" />
                    </div>
                    <div className="skill-name">
                        <span>HTML5</span>
                    </div>
                </div>
                <div className="skill-card">
                    <div className="skill-logo">

                    </div>
                    <div className="skill-name">
                        <span>JavaScript ES6</span>
                    </div>
                </div>
                <div className="skill-card">
                    <div className="skill-logo">

                    </div>
                    <div className="skill-name">
                        <span>NodeJS</span>
                    </div>
                </div>
                <div className="skill-card">
                    <div className="skill-logo">
                        <img src={MariaDBlogo} width="250" alt="MariaDB logo" />
                    </div>
                    <div className="skill-name">
                        <span>MySQL/MariaDB</span>
                    </div>
                </div>
                <div className="skill-card">
                    <div className="skill-logo">

                    </div>
                    <div className="skill-name">
                        <span>MongoDB</span>
                    </div>
                </div>
                <div className="skill-card">
                    <div className="skill-logo">

                    </div>
                    <div className="skill-name">
                        <span>Bootstrap</span>
                    </div>
                </div>
                <div className="skill-card">
                    <div className="skill-logo">
                        <img src={CSSlogo} width="250" alt="CSS Logo" />
                    </div>
                    <div className="skill-name">
                        <span>CSS</span>
                    </div>
                </div>
                <div className="skill-card">
                <div className="skill-logo">
                    <img src={ReactLogo} width="250" alt= "ReactJS Logo" />
                </div>
                <div className="skill-name">
                    <span>ReactJS</span>
                </div>
            </div>
            </article>
        </div>
    )
};