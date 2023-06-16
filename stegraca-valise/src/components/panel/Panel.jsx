import React, { useState, useEffect } from "react";
import "./panel.css";
import { Projects, Bio } from "../index";
import { animated, useSpring, useChain, useTransition, useSpringRef } from '@react-spring/web';

export default function Panel(props) {
    const { display, setDisplay, navi, setNavi, tags, setTags } = props;
    const [projOpen, setProjOpen] = useState(false);
    const [bioOpen, setBioOpen] = useState(false);
    const [open, api] = useSpring(() => ({
        from: { display: 'none'},
    }))
    const handleClick = (event) => {
        setBioOpen(!bioOpen);
        console.log(event.target.id);
            api.start({
                from: {
                    display: 'none',
                },
                to: {
                    display: 'block', width: '100%', background: 'blue', 
                },
                reverse: bioOpen,
                })
            }
//     // const propStyle = useSpring(() = > {
        
//     // })

//     var openPane = false;
//     const Display = () => { 

//     switch(navi) {
//         case "about":
//             openPane = true;
//             return(
//                 <>
//                     <Bio />
//                 </>
//             )
//         case "portfolio":
//             openPane = true;
//             return(
//                 <>
//                     <Projects tags={tags} setTags={setTags} /> 
//                 </>
//             )
//         default:
//             openPane = false;
//             return(
//                 <><div></div></>
//             )
//     }
// }


//     return (
//         <>
//          <div className={`panel `}>
//             <div className={`panel-${openPane} navi-${navi}`}>
//                 <Display />
//             </div> 
//         </div>
// </>
//     )
    return (

        <div>
            {/* primary block for left/right accordion panel */}

                <input type="button" onClick={handleClick} id="Taget" value={`Biography ${bioOpen}`}/>
                {/* Biography panel */}
            <animated.div style={open}>
    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </animated.div>
            {/* <div>

                <Projects />
            </div> */}
            {/* <input type="button" onClick={handleClick} id="Toget" value={`Projects ${projOpen}`}/>
                        <animated.div style={open}>
    <h1>Projects</h1>
            </animated.div> */}
        </div>
    )
}
