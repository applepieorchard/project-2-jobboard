import Job from "../components/Job";
import { useEffect, useState } from "react";
import { getJobs } from "../utils/getJobs.js";
import "./jobboard.css";
import "./jobboardResponsive.css";
import Slide from "../components/slider/Slide";

export default function JobBoard() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJobs()
      .then(function (res) {
        console.log(res.data.results);
        setJobs(res.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="jobboard-container">
      <Slide />
      {console.log(jobs)}
      <div className="job-card-container">
        {jobs.map((job) => (
          <Job
            key={job.jobId}
            id={job.jobId}
            jobTitle={job?.jobTitle}
            employerName={job?.employerName}
            locationName={job.locationName}
            date={job?.date}
            // company={job?.company}
            posted_date={job?.date}
            // imgSrc={job.imgSrc}
          />
        ))}
      </div>
    </div>
  );
}
