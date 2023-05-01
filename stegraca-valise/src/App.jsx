import React, { useState} from 'react';
import './App.css';
import { Valise, Background } from './components';

const App = () =>{
    const [color, changeColor] = useState("darkgreen");

    document.body.style.backgroundColor = color;
    return (
        <>
        <div className="main" height="100%">
            <Background />
        </div>
        </>
        )
}

    export default App;
