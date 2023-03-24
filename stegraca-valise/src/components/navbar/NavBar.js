import React, {useState} from 'react';
import ModalFunc from '../modals/Modals';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names

export default function NavBar({valisePage}) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <button className="btn btn-primary" id="home" onClick={() => valisePage('home')}>Home</button>
      <button className="btn btn-primary" id="about" onClick={() => valisePage('about')}>About</button>
      <button className="btn btn-primary" id="projects"onClick={() => valisePage('projects')}>Portfolio</button>
      <button className="btn btn-primary" id="contact" onClick={handleShow}>Contact</button>
      <ModalFunc show = {show} setShow = {setShow} />
    </div>
  );
}
