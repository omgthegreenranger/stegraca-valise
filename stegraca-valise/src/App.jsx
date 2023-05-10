import React, { useState } from 'react';
import './App.css';
import './components/background/background.css';
import { Valise, Header } from './components';

const App = () =>{

    // Let's set some global states for this app
    // Determine state of portfolio display
    const [portOpen, setPortOpen] = useState(true)


    return (
        <>
        <div className="main" fluid>
                    <Header />
                    <Valise portOpen={portOpen} setPortOpen={setPortOpen}/>
                    <div className="d-inline-flex safe-space justify-content-center">
                        <span className="retained">WATCH THIS SPACE</span>
                    </div>
        </div>

        <div class="area">
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
        </>
        )
}

    export default App;
