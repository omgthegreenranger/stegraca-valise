import Project from '../project/Project';
import About from '../about/About';
import './Valise.css';
    
export default function Valise({valisePage}) { 

    const valiseView = () => {    
        if(valisePage === 'home') {
            return;
        }
        if(valisePage === 'projects') {
            return <Project />
        }
        if(valisePage === 'about') {
            return <About />
        }
    }
    return (
        <div>
            {valiseView()}
        </div>
      );
};