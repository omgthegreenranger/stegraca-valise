import React, {useState} from 'react';
import ModalFunc from '../modals/Modals';
// import { Modal, Button } from 'react-bootstrap';


export default function NavBar({valisePage}) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  return (
  <>
    <div>
      <button className="btn" id="home" onClick={() => valisePage('home')}>Home</button>
      <button className="btn" id="about" onClick={() => valisePage('about')}>About</button>
      <button className="btn" id="projects"onClick={() => valisePage('projects')}>Portfolio</button>
      <button className="btn" id="contact" onClick={() => setShow(true)}>Contact</button>
      <ModalFunc show={show} />
      </div>
  </>
  );
}
