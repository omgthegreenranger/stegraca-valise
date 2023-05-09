import React, { useState } from 'react';
import './App.css';
import { Valise, Background, Header } from './components';

const App = () =>{

    // Let's set some global states for this app
    // Determine state of portfolio display
    const [portOpen, setPortOpen] = useState(true)


    return (
        <>
        <div className="main" fluid>
                    <Header />
                    <Valise portOpen={portOpen} setPortOpen={setPortOpen}/>
        </div>
        </>
        )
}

    export default App;
