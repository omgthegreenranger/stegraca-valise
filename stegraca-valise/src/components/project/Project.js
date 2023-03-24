import React from 'react';
import AccessCal from "./images/AccessCal-screenshot.png";
import AstronoMy from "./images/Astrono-MyScreenshot.png";
import Project3 from "./images/project3.jpg";
import Project4 from "./images/project4.jpg";
import Project5 from "./images/project5.jpg";
import Project6 from "./images/project6.jpg";
import './Project.css';

export default function Project() {
  return (
    <div className="project-block">
      <div className="project-card left">
          <h1 className="project-name">Astrono-MyDashboard</h1>
          <div className="project-desc">
            <p>Project #1 for the Fullstack Bootcamp - I and my team of three built an astronomy dashboard to provide positional stargazing information.</p>
          </div>
          <img className="project-screen" src={AstronoMy} alt="Astrono-MyDashboard" />
          <div className="project-tech">
            <ul>
              <li>HTML5</li>
              <li>JavaScript</li>
              <li>Jquery</li>
            </ul>
          </div>
      </div>
      <div className="project-card right">
          <h1 className="project-name">AccessCal - the Accessibility Calendar</h1>
          <div className="project-desc">
            <p>Project #2 for the Fullstack Bootcamp - our team built the initial MVP of a countdown-calendar to help neurospicy (like myself) navigate Time Blindness. The concept is to reframe events by priority rather than deadlines.</p>
          </div>
          <img className="project-screen" src={AccessCal} alt="AccessCal - the Accessibility Calendar" />
      </div>
      <div className="project-card left">
          <h1 className="project-name">Astrono-MyDashboard</h1>
          <div className="project-desc">
            <p>Project #1 for the Fullstack Bootcamp - I and my team of three built an astronomy dashboard to provide positional stargazing information.</p>
          </div>
          <img className="project-screen" src={Project3} alt="AccessCal - the Accessibility Calendar" />
      </div>
      <div className="project-card right">
          <h1 className="project-name">Astrono-MyDashboard</h1>
          <div className="project-desc">
            <p>Project #1 for the Fullstack Bootcamp - I and my team of three built an astronomy dashboard to provide positional stargazing information.</p>
          </div>
          <img className="project-screen" src={Project4} alt="AccessCal - the Accessibility Calendar" />

      </div>
      <div className="project-card">
          <h1 className="project-name">Astrono-MyDashboard</h1>
          <div className="project-desc">
            <p>Project #1 for the Fullstack Bootcamp - I and my team of three built an astronomy dashboard to provide positional stargazing information.</p>
          </div>
            <img className="project-screen" src={Project5} alt="AccessCal - the Accessibility Calendar" />
      </div>
      <div className="project-card">
          <h1 className="project-name">Astrono-MyDashboard</h1>
          <div className="project-desc">
            <p>Project #1 for the Fullstack Bootcamp - I and my team of three built an astronomy dashboard to provide positional stargazing information.</p>
          </div>
            <img className="project-screen" src={Project6} alt="AccessCal - the Accessibility Calendar" />
      </div>
    </div>
  )
}