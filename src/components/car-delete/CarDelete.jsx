import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function CarDelete({ show, onHide, onConfirm }) {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Потвърждение за изтриване</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Наистина ли искате да изтриете вашата кола?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Отказ
        </Button>
        <Button variant="danger" onClick={onConfirm}>
          Изтрий
        </Button>
      </Modal.Footer>
    </Modal>
  );
}


