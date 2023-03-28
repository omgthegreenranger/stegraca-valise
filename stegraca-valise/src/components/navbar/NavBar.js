import React, {useState} from 'react';
import { Modal, Button, Form, FloatingLabel } from 'react-bootstrap';


export default function NavBar({valisePage}) {
  const [show, setShow] = useState(false);
  return (
  <>
    <div className="nav-bar nav">
      <span className="nav-btn" id="home" onClick={() => valisePage('home')}>Home</span>
      <span className="nav-btn" id="about" onClick={() => valisePage('about')}>About</span>
      <span className="nav-btn" id="projects"onClick={() => valisePage('projects')}>Portfolio</span>
      <span className="nav-btn" id="contact" onClick={() => setShow(true)}>Contact</span>
      </div>
      <>
      <Modal show={show} onHide={() => setShow(false)} aria-labelledby='contact-modal'>
        <Modal.Header closeButton>
          <Modal.Title>Contact Me</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
            <Form.Control type="text" placeholder="Bill Potts" />
          </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="Enter message" className="mb-3">
            <Form.Control as="textarea" rows={10} placeholder="Enter Message" />
            </FloatingLabel>
            <Button type="submit">Send Email</Button>
            </Form.Group>
          </Form>

        </Modal.Body>
        <Modal.Footer>

          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  </>
  );
}
