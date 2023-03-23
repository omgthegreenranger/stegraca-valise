import React from 'react';
import profile from '../images/profile-photo.jpg';

export default function About() {
    return (
        <div className="about-block">
            <figure>
                <img className="profile" src={profile} alt="Profile" />
            </figure>
            <article className="writeup">
                <span id="shoutout">HELLO</span>
                <p>Stephen Cardie is a 42-year old man of worth and leisure. He is one of those gentlemen with a spring in a step, a sprig in his lapel, and a penchant for sweet roundhouse kicks.</p>
                <p>One of his greatest creations is that of his young child, a mischeivous and clever daughter of 5.75 years named <span id="shoutout">Edith Rose</span>. Surely one of the most destructive beings in the known universe, <span id="highlight">she is fated to consume all reality upon maturity.</span></p>
                <p>During this bootcamp, Master Cardie has dared to sharpen his wits and skills concerning web design, fullstack development and mindful domination in hopes of one day presenting before a nobleman or king. This is sure to happen in the upcoming Post-Calamity world.</p>
            </article>
        </div>
    )
}