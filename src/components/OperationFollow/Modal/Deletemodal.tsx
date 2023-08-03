import React from "react";
import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

interface MyProps {
  setShow: boolean;
  deleteConfirm: () => void;
  handleClose: () => void;
}

export default function DeleteModal(props: MyProps) {
  const handleClose = () => props.handleClose();

  const deleteConfirm = () => {
    props.deleteConfirm();
    props.handleClose();
  };

  return (
    <>
      <Modal show={props.setShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Confirm delete?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={deleteConfirm}>
            Confirm
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
