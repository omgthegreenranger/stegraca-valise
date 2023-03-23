import React from 'react';
import profile from './images/profile-photo.jpg';

export default function About() {
    return (
        <div className="about-block">
            <figure>
                <img className="profile" src={profile} alt="Profile" />
            </figure>
            <article className="writeup">
                <span id="shoutout">Welcome to SteGra.ca</span>
                <p>You've arrived at the personal homepage and portfolio for Stephen Cardie, fullstack web developer.</p>
                <p></p>
                <p>During this bootcamp, Master Cardie has dared to sharpen his wits and skills concerning web design, fullstack development and mindful domination in hopes of one day presenting before a nobleman or king. This is sure to happen in the upcoming Post-Calamity world.</p>
            </article>
        </div>
    )
}