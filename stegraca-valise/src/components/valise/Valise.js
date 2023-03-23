import React, { useState } from 'react';
import Project from '../project/Project';
import About from '../about/About';
import './Valise.css';
    
export default function Valise() { 
    const [page,setPage] = useState('home');
    return (
    <main  setPage = {setPage} >

            {
                page=='home' ?
                <About /> :
                page=='about' ?
                <About /> :
                page=='projets' ?
                <Project /> :
                <About />
            }
    </main>
    )
};


