import React, { useState } from 'react';
import Project from '../Project';
import About from '../About';
import './Valise.css';

export default function Valise() { 
    return (
    <main>
    <section className="about-block">
    <About />
    </section>
    <section className="class-block">
        <h1>Project Project!</h1>
        <Project />
    </section>
    </main>
    )
};


