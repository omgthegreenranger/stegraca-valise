import { useState} from 'react';
import './App.css';
import { Header, Footer, Valise } from './components';

const App = () =>{
    const [page,setPage] = useState('home');

    return (
        <div>
            <Header setPage = {setPage} />

            {
                page=='home' ?
                <Valise /> :
                page=='about' ?
                <Footer /> :
                ''
            }
        </div>
        )
}

    export default App;
