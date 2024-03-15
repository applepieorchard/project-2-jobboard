import React, { useState } from "react";
import ReactModal from "react-modal";
import img from "../../assets/placeholder.png";
import "./modal.css";
export default function modal({ isOpen, setIsOpen }) {
  return (
    <ReactModal
      isOpen={isOpen}
      contentLabel="Example Modal"
      onRequestClose={() => setIsOpen(false)}
      closeTimeoutMS={2000}
      style={{
        overlay: {
          width: "40%",
          height: "60%",
          margin: "auto auto",
        },
      }}
    >
      <div id="modal-container">
        <img src={img} style={{ width: "200px", height: "auto" }}></img>
        <p>
          <strong>You have successfully applied</strong>
        </p>
        <button
          onClick={() => {
            setIsOpen(false);
          }}
        >
          close
        </button>
      </div>
    </ReactModal>
  );
}
