import React from "react";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
const ModalFormation = (formation) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant='primary' onClick={handleShow}>
        lire la suite
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{formation.formation.nom}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div> prix:{formation.formation.prix}</div>
          <div> prix:{formation.formation.prix}</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalFormation;
