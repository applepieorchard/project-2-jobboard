import Job from "../components/Job";
import { useEffect, useState } from "react";
import { getJobs } from "../utils/getJobs.js";
import "./jobboard.css";
import Slide from "../components/slider/Slide";

export default function JobBoard() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJobs()
      .then(function (res) {
        console.log(res.data.results)
        setJobs(res.data.results)
      }).catch(function (error) {
        console.log(error);
      })
  }, []);

  return (
    <div className="jobboard-container">
      <Slide />
      <div className="job-card-container">
        {jobs.map((job, index) => (
          <Job
            key={job.jobId}
            id={job.jobId}
            title={job?.jobTitle}
            // location={job.location}
            // company={job?.company}
            posted_date={job?.date}
            // imgSrc={job.imgSrc}
          />
        ))}
      </div>
    </div>
  );
}
