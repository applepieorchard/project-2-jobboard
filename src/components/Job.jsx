/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Modal from "../components/modal/modal";
import "./Job.css";
import "./JobResponsive.css";
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
  const currentDate = new Date();
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dismissModal, setDismissModal] = useState(false);
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
          // console.log("Apply pressed");
          setJobApplication({ [id]: true, title: title });
          setDismissModal(true);
          // setIsOpen(true);
        }}
      >
        Apply
      </button>

      {jobApplication[id] ? (
        <>
          <JobApplicationForm
            jobApplication={jobApplication}
            id={id}
            setJobApplication={setJobApplication}
            setDismissModal={setDismissModal}
            dismissModal={dismissModal}
            setIsOpen={setIsOpen}
          />
        </>
      ) : null}

      <Modal isOpen={isOpen} setIsOpen={setIsOpen}></Modal>
    </div>
  );
}
