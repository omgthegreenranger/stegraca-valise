import React, { useState } from 'react';
import './App.css';
import { Valise, Header, Footer } from './components';

const App = () =>{

    // Let's set some global states for this app
    // Determine state of portfolio display
    const [portOpen, setPortOpen] = useState(true)


    return (
        <>
        <div className="main">
                    <Header />
                    <Valise portOpen={portOpen} setPortOpen={setPortOpen}/>
                    <Footer />
        </div>
        </>
        )
}

    export default App;
