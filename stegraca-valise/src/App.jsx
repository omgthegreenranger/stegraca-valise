import React, { useState } from 'react';
import './App.css';
import { Valise, Header, Linkblock} from './components';
import { animated, useSpring } from '@react-spring/web';

const App = () =>{
    // Let's set some global states for this app
    const [display, setDisplay] = useState(false)
    const [tags, setTags] = useState([]);
    const [springs, api] = useSpring(() => ({
        from: {opacity : 0},
        to: {opacity : 1},
      }))
    
    // Determine state of portfolio display
    if (display) {
    api.start({
        from: {
          opacity: 0,
        },
        to: {
          opacity: 1,
        },
      })
    } else {
        api.start({
            from: {
              opacity: 1,
            },
            to: {
              opacity: 0,
            },
          })
    }


    return (
        <>
        <div className="main">
            {/* <animated.div
            style={{
                opacity: 0,
                ...springs,}}
                > */}
            <Header display={display} setDisplay={setDisplay} /> 
            {/* </animated.div> */}
            <Valise display={display} setDisplay={setDisplay} tags={tags} setTags={setTags} />
            <Linkblock tags={tags} setTags={setTags} direction="horiz" />
        </div>
        </>
        )
}

    export default App;
