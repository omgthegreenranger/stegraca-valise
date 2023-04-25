import React, { useState} from 'react';
import './App.css';
import { Header, Footer, Valise } from './components';

const App = () =>{
    const [page, setPage] = useState('home');
    return (
        <div className="main" height="100%">
            <Valise />
        </div>
        )
}

    export default App;
