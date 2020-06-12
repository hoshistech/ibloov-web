import React, { useState, useEffect } from "react";

import "./Modal.css";

const Modal = (props) => {
  const {
    showModal,
    errorMessage,
    handleCloseModal,
    children,
    modalHeader,
  } = props;

  return (
    <div>
      <div
        className="modal-wrapper"
        style={{
          transform: showModal ? "translateY(0vh)" : "translateY(-100vh)",
          opacity: showModal ? "1" : "0",
        }}
      >
        <div className="modal-header">
          <h4>{modalHeader}</h4>
          <span className="close-modal-btn" onClick={handleCloseModal}>
            ×
          </span>
        </div>
        <div className="modal-body">
          <p>{children}</p>
        </div>
        <div className="modal-footer">
          <button className="btn-cancel" onClick={handleCloseModal}>
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
