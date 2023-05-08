import React, { useState} from 'react';
import './App.css';
import { Valise, Background } from './components';

const App = () =>{
    return (
        <>
        <div className="main" width="100%">
            <div className="foreground">
            <Valise />
            </div>
            <div className="background">
            <Background />
            </div>
        </div>
        </>
        )
}

    export default App;
