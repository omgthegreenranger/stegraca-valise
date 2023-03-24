import React from 'react';
import profile from './images/profile-photo.jpg';
import ReactLogo from './images/react.svg'

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