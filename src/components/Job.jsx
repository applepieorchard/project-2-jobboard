/* eslint-disable react/prop-types */
import { useState } from "react";
import Modal from "../components/modal/modal";
import "./Job.css";
import "./JobResponsive.css";
import logo from "../assets/logo.jpg";
import JobApplicationForm from "./JobApplicationForm/JobApplicationForm";
export default function Job({
  jobTitle,
  locationName,
  date,
  employerName,
  id,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [dismissModal, setDismissModal] = useState(false);
  const [jobApplication, setJobApplication] = useState({});
  return (
    <div className="job-list-body">
      <div className="job-image">
        <img src={logo} alt={jobTitle} className="job-card-img" />
      </div>

      <div className="joblist-card">
        <h3>
          {employerName} - {jobTitle}
        </h3>
        <ul className="job-location">
          <li>{locationName}</li>
          <li>
            <i
              className="fa-solid fa-period fa lg"
              style={{ color: "#63E6BE" }}
            ></i>
          </li>

          <li>Posted: {date.replaceAll("/", "-")} </li>
        </ul>
      </div>
      <button
        className="job-card-apply"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={() => {
          setJobApplication({ [id]: true, title: jobTitle });
          setDismissModal(true);
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

      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        contentClassName="custom-modal"
      ></Modal>
    </div>
  );
}
