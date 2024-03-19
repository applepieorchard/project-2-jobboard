/* eslint-disable react/prop-types */
import { useState } from "react";
import Modal from "../components/modal/modal";
import "./Job.css";
import "./JobResponsive.css";
import logo from "../assets/logo.jpg";
import { timeDifference } from "../utils/date";
import { format } from "date-fns";
import JobApplicationForm from "./JobApplicationForm/JobApplicationForm";
export default function Job({
  jobTitle,

  company,
  locationName,

  date,
  employerName,
  id,
}) {
  const currentDate = new Date();
  const [isOpen, setIsOpen] = useState(false);
  const [dismissModal, setDismissModal] = useState(false);
  const [jobApplication, setJobApplication] = useState({});
  // console.log("======", formatedDate);
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
          {/* <li>{location?.[0]}</li> */}
          <li>{locationName}</li>
          <li>{company}</li>
          {/* <li>{location}</li> */}
          <li>
            Posted:{" "}
            {timeDifference(new Date(date.replace("/", "-")), currentDate)}{" "}
          </li>
        </ul>
        <ul className="job-skills">
          {/* <li>{location?.[0]}</li> */}
          <li>London</li>
          <li>{company}</li>
          {/* <li>{location}</li> */}
          {/* <li>Posted: {timeDifference(new Date(posted_date), currentDate)} </li> */}
        </ul>
      </div>
      <button
        className="job-card-apply"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={() => {
          // console.log("Apply pressed");
          setJobApplication({ [id]: true, title: jobTitle });
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
