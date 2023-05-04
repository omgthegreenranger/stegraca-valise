import React, { useState} from 'react';
import './App.css';
import { Valise, Background, Projects } from './components';

const App = () =>{
    return (
        <>
        {/* <Background /> */}
        <div className="main" width="100%">
            <Valise />
        </div>
        </>
        )
}

    export default App;
