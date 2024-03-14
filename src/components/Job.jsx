/* eslint-disable react/prop-types */
import React, { useState } from "react";
import ReactModal from "react-modal";
import "./modal/modal.css";
import "./Job.css";
import img from "../assets/placeholder.png";

export default function Job({
  title,
  description,
  company,
  location,
  hours,
  imgSrc,
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="job-list-body">
        <div className="job-board-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
            />
          </svg>
          <img src={imgSrc} alt={title}></img>
          <div className="card">
            <h3>{title}</h3>
            <ul>
              <li>{description}</li>
              <li>{company}</li>
              <li>{location}</li>
              <li>{hours} hours per week</li>
            </ul>
          </div>
          <button onClick={() => setIsOpen(true)}>Apply</button>
        </div>
      </div>
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
      </ReactModal>
    </>
  );
}
