import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Button from "../button/Button";

const ModalBox = props => {
  const { modalButton, buttonClass, modalHeading, showSave, openButtonClass, showClose, closeModal } = props;
  const [show, setShow] = useState(false);
  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        customClassName={openButtonClass}
        btndisabled={false}
      >
        {modalButton}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalHeading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.children}</Modal.Body>
        <Modal.Footer>
         {showClose ?  <Button
            variant="secondary"
            onClick={handleClose}
            customClassName={buttonClass}
            btndisabled={false}
          >
            Close
          </Button> : ""}
          {showSave ? (
            <Button
              variant="primary"
              onClick={handleClose}
              customClassName={buttonClass}
              btndisabled={false}
            >
              Save Changes
            </Button>
          ) : (
            ""
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalBox;
