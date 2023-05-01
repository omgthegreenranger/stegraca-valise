import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';

export default function About() {
    return (
        <Container fluid className="about-block my-3">
            <Row>
            <Col className="writeup col-8 border-bottom-3">
                <Container fluid>
                <Row className="titlebar">
                    <h2>My Story</h2>
                    <h3>or "A portrait of a 40-ish year-old wannabe polymath"</h3>
                </Row>
                <Row className="about-text m-3">
                <p>My journey to app development has been one winding street. In my life, I've been...</p>
                <ul className="mx-5">
                    <li>an office-tower concierge</li>
                    <li>a double-decker bus, day-trip coach bus and a ghost tour guide</li>
                    <li>a customer success specialist for the managed services division of a large tech VAR</li>
                    <li>support analyst for email and web security software</li>
                    <li>a software product demonstration and training specialist for two SaaS startups</li>
                    <li>a video producer for the same</li>
                    <li>power and cooling hardware specialist for another large VAR</li>
                </ul>
                <p>In that nearly-exhaustive list, one pattern emerged - I spent far more of my time conceiving and designing tools to make my jobs easier than I actually did on my job. It became apparent to me that I wanted to create things instead of selling them, but I lacked the skills and resources to make them happen. I grew up in the age of BBSes, and at the birth of the internet; I taught myself HTML in the 90s, but I hadn't picked up CSS or other coding as my life trajectory went in a different path. I had tried to pick up Python in my spare time, but that time shrank as I became a parent to a child who has almost certainly inherited their father's ADHD (more on that later).</p>
                
                <p>As with many others during the pandemic, I found myself between jobs. In that moment, a TikTok video about "multipotentialites" (again, more on this later) confirmed what I had been toying with: it was time to make this a reality.</p>
                
                <p>And so, I signed up for the University of Toronto's Fullstack Development Bootcamp, to learn the skills needed to make the ideas in my head a reality. Now that it has come to close, I'm looking to cut my teeth on as many different codebases as possible, to help companies grow their products with new and improved features, and hopefully to build something myself that will change people's lives.</p>
                </Row>
                <Row className="titlebar">
                <h2>The ADHD Conundrum</h2>
                <h3>or "How I learned to stop worrying and love my brain"</h3>
                </Row>
                <Row className="about-text m-3">
                <p>In my mid-30s, shortly before the birth of my child, I discovered that a lot of my struggles through my youth and adulthood were not the norm; things that were struggles for me were not a struggle for others, and that the way I think is an opportunity, not a detriment. Much of my life, my intelligence and my neurotypical underacheivement suddenly made a lot more sense.</p>
                
                <p>There are a lot of resources out there about how to help your child through an ADHD diagnosis; there isn't very much about being an adult going through it. Most tends to be about how to be a neurodivergent brain in a neurotypical world, and the most frustrating part is the amount of work it takes to fit in. One of my biggest revelations over my journey is how I fell in to a trajectory of client-facing positions because of my natural charisma and confidence speaking to people; but I was always dragged down by the way in which my focus impacts my ability to maintain client relationships. There are very few suggestions aside from "just try harder."</p>
                
                <p>Time blindness is the worst; I don't notice how much time has passed, either while out of focus or in hyperfocus. There are few tools out there to help that; alarms and calendars only get you so far.</p>
                
                <p>Part of changing my career was accepting and loving my brain in all of its nuance and subtlety. It is about embracing the idea of "Multipotentialite," a term co-opted by Emilie Wapnick to describe the kind of person who doesn't stick to one thing forever but branches out almost obsessively.</p>
                
                <p>Most importantly, it is about encouraging that part of my mind that wants to keep bouncing from one thing to the next, and holding it up as a best trait instead of my flaw.</p>
                

                <p>It was a video (or many videos, if I'm honest) by TikTok user jakecreativehackers which cemented this in me. Don't niche down, niche up. Don't mask multipotentiality, make it your strength.</p>
                
                <p>And that's where I am. And, I hope, that's where you are. Let me help you by letting me run around, and I guarantee you'll get a lot out of it.</p>
                </Row>
                </Container>                
            </Col>
            <Col>
            <div className="bar-title">
            <h2>Photos coming soon!</h2>
            <p>Until then, enjoy this barely-formatted quote.</p>
            </div>
            <div><span className="quote">"A multipotentialite is a person who has many different interests and creative pursuits in life.
                
                Multipotentialites have no “one true calling” the way specialists do. Being a multipotentialite is our destiny. We have many paths and we pursue all of them, either sequentially or simultaneously (or both).
                
                Multipotentialites thrive on learning, exploring, and mastering new skills. We are excellent at bringing disparate ideas together in creative ways. This makes us incredible innovators and problem solvers.
                
                When it comes to new interests that emerge, our insatiable curiosity leads us to absorb everything we can get our hands on. As a result, we pick up new skills fast and tend to be a wealth of information.""</span></div>
                
                <div>— Emilie Wapnick, Terminology, Puttylike</div>
            </Col>
            </Row>
        </Container>
    )
}