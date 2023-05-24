import React from 'react';
import ProfilePic from './images/profile-photo.jpg';
import './biography.css';


export default function Bio() {


return(
    <>

    <div className="bio-block">
        <span className="title-line">About the developer</span>
        <p>STEPHEN CARDIE is a fullstack web developer as a second career.</p>
        <p>Spending over a decade on the client-facing side of tech, it became very apparent that his motivation was about creating tools to make the job easier.</p>
        <p>Eventually, he had to take the plunge and do that full-time.</p>
        <p>He is available for support work, code refactoring, or to help you build that feature.</p>
    </div>
    </>
)
}