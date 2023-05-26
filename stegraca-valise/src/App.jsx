import React, { useState } from 'react';
import './components/background/background.css';
import './App.css';
import { Valise, Header } from './components';

const App = () =>{

    // Let's set some global states for this app
    // Determine state of portfolio display
    const [portOpen, setPortOpen] = useState(true)


    return (
        <>
<div className="parent">
</div >
        <div fluid>
                    <Header />
                    <Valise portOpen={portOpen} setPortOpen={setPortOpen}/>
        </div>
        <div className="perspective-container">
            <div className="bottom-background">
        </div>
        </div>
        </>
        )
}

    export default App;
