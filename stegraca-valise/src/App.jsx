import React, { useState } from 'react';
import './App.css';
import { Valise, Background, Header } from './components';
import {Container, Row, Col} from 'react-bootstrap'

const App = () =>{

    // Let's set some global states for this app
    // Determine state of portfolio display
    const [portOpen, setPortOpen] = useState(false)


    return (
        <>
        <div className="main d-flex flex-column" fluid>
                    <Header />
                    <Valise portOpen={portOpen} setPortOpen={setPortOpen}/>
        </div>
        </>
        )
}

    export default App;
