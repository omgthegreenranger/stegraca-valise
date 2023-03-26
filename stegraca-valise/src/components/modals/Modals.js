import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ModalFunc({show, setShow}) {
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal size='lg' show={show} onHide={setShow} aria-labelledby='contact-modal'>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={setShow}>
            Close
          </Button>
          <Button variant="primary" onClick={setShow}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};