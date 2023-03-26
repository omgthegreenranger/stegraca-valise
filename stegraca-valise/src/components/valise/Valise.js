import Project from '../project/Project';
import About from '../about/About';
import Home from '../home/Home';
import './Valise.css';
import React from 'react';
    
export default function Valise({valisePage}) { 

    const valiseView = () => {    
        if(valisePage === 'home') {
            return <Home />;
        }
        if(valisePage === 'projects') {
            return <Project />
        }
        if(valisePage === 'about') {
            return <About />
        }
    }
    return (
        <div>
            {valiseView()}
        </div>
      );
};