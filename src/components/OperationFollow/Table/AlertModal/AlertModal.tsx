import React from "react";
import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

interface MyProps{
    setShow: boolean;
    handleClose: () => void;
    headText: string;
    contentText: string;
}

export default function AlertModal(props: MyProps) {

    const handleClose = (e:any) => {
        e.preventDefault()
        props.handleClose()
    }

    return (
        <>
          <Modal show={props.setShow} >
            <Modal.Header closeButton>
              <Modal.Title>{props.headText}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>{props.contentText}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={(e) => handleClose(e)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );

}
