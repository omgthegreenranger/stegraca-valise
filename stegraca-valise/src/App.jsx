import React, { useState } from 'react';
import './App.css';
import { Valise, Header, Footer } from './components';

const App = () =>{
    const [navi, setNavi] = useState(0);
    // Let's set some global states for this app
    // Determine state of portfolio display


    return (
        <>
        <div className="main">
                    <Header navi={navi} setNavi={setNavi}  />
                    <Valise navi={navi} setNavi={setNavi} />
        </div>
        </>
        )
}

    export default App;
