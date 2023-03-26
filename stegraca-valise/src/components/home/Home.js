import React from 'react';
import profile from './images/profile-photo.jpg';
import { ReactComponent as ReactLogo } from './images/react.svg';
import { ReactComponent as CSSlogo } from './images/css-3.svg';
import { ReactComponent as HTMLlogo } from './images/html-1.svg';
import { ReactComponent as MariaDBlogo } from './images/mariadb.svg';
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
                    <HTMLlogo />
                    </div>
                    <div className="skill-name">
                        <span>HTTP 5</span>
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
                        <MariaDBlogo />
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
                        <CSSlogo />
                    </div>
                    <div className="skill-name">
                        <span>CSS</span>
                    </div>
                </div>
                <div className="skill-card">
                <div className="skill-logo">
                    <ReactLogo />
                </div>
                <div className="skill-name">
                    <span>ReactJS</span>
                </div>
            </div>
            </article>
        </div>
    )
};