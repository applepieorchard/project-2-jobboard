import Job from "../components/Job";
import { jobs } from "../utils/jobData";
import { useEffect, useState } from "react";
import { getJobs } from "../utils/getJobs.js";
import "./jobboard.css";
import Slide from "../components/slider/Slide";

export default function JobBoard() {
  // const [jobs, setJobs] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const data = await API();
  //       setJobs(data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   }
  //   fetchData();
  // }, []);

  return (
    <div className="jobboard-container">
      <Slide />
      <div className="job-card-container">
        {jobs.map((job, index) => (
          <Job
            key={index}
            id={job.id}
            title={job?.title}
            // location={job.location}
            // company={job?.company}
            posted_date={job?.posted_date}
            // imgSrc={job.imgSrc}
          />
        ))}
      </div>
    </div>
  );
}
