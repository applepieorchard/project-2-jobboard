/* eslint-disable react/prop-types */
import React, { useState } from "react";
import ReactModal from "react-modal";
import "./modal/modal.css";
import "./Job.css";
import img from "../assets/placeholder.png";
import logo from "../assets/logo.jpg";
import { timeDifference } from "../utils/date";
import JobApplicationForm from "./JobApplicationForm/JobApplicationForm";
export default function Job({
  title,
  description,
  company,
  location,
  hours,
  imgSrc,
  posted_date,
  id,
}) {
  console.log("posted_date", title);
  const currentDate = new Date();
  const [isOpen, setIsOpen] = useState(false);
  const [jobApplication, setJobApplication] = useState({});
  return (
    <div className="job-list-body">
      <div className="job-image">
        <img src={logo} alt={title} className="job-card-img" />
      </div>

      <div className="joblist-card">
        <h3>TITAN - Node.js Developer - Express.js</h3>
        <ul className="job-location">
          {/* <li>{location?.[0]}</li> */}
          <li>London</li>
          <li>{company}</li>
          {/* <li>{location}</li> */}
          {/* <li>Posted: {timeDifference(new Date(posted_date), currentDate)} </li> */}
          <li>Posted: 3 days ago</li>
        </ul>
        <ul className="job-skills">
          {/* <li>{location?.[0]}</li> */}
          <li>London</li>
          <li>{company}</li>
          {/* <li>{location}</li> */}
          {/* <li>Posted: {timeDifference(new Date(posted_date), currentDate)} </li> */}
          <li>Posted: 3 days ago</li>
        </ul>
      </div>
      <button
        className="job-card-apply"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={() => {
          console.log("Apply pressed");
          setJobApplication({ [id]: true, title: title });
          setIsOpen(true);
        }}
      >
        Apply
      </button>
      {/* <ReactModal
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
      </ReactModal> */}
      {jobApplication[id] ? (
        <JobApplicationForm jobApplication={jobApplication} />
      ) : null}
    </div>
  );
}
