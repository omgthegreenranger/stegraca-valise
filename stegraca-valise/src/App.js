import React, { useState} from 'react';
import './App.css';
import { Header, Footer, Valise } from './components';

const App = () =>{
    const [page, setPage] = useState('home');
    return (
        <div>
            <Header valisePage = {setPage} />
            <Valise valisePage = {page} />
            <Footer />
        </div>
        )
}

    export default App;
