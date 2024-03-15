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
          margin: "auto auto",
        },
      }}
    >
      <img src={img} style={{ width: "200px", height: "400px" }}></img>
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
    </ReactModal>
  );
}
