import React, { useState } from 'react';
import './App.css';
import { Valise, Header, Footer } from './components';

const App = () =>{
    // Let's set some global states for this app
    const [display, setDisplay] = useState(false);
    // Determine state of portfolio display


    return (
        <>
        <div className="main">
            {display ? <Header display={display} setDisplay={setDisplay} /> : ''}
                    <Valise display={display} setDisplay={setDisplay} />
        </div>
        </>
        )
}

    export default App;
