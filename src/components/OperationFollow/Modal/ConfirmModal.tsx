import React from "react";
import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

interface MyProps {
  setShow: boolean;
  handleDeleteConfirm: () => void;
  handleApproveConfirm: () => void;
  handleClose: () => void;
  headText: string;
  contentText: string;
  modalMode: string;
}

export default function ConfirmModal(props: MyProps) {
  const handleClose = () => props.handleClose();

  const handleConfirm = () => {
    if(props.modalMode == 'delete'){
      props.handleDeleteConfirm();
    }else if(props.modalMode == 'approve'){
      props.handleApproveConfirm()
    }

    props.handleClose();

  };

  const approveConfirm = () => {
    props.handleApproveConfirm();
    props.handleClose();
  }

  const dummy = () => {}

  return (
    <>
      <Modal show={props.setShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.headText}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{props.contentText}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleConfirm}>
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
