import Job from "../components/Job";
import { jobs } from "../utils/jobData";
import { useEffect } from "react";
import { API } from "../utils/API";

import "./jobboard.css";
import Slide from "../components/slider/Slide";

export default function JobBoard() {
  useEffect(() => {
    async function fetchingData() {
      const data = await API();
      return data;
    }
    fetchingData();
  }, []);

  return (
    <div className="jobboard-container">
      <Slide />
      <div>
        {jobs.map((job, index) => (
          <Job
            key={index}
            title={job.title}
            description={job.description}
            company={job.company}
            location={job.location}
            hours={job.hours}
            imgSrc={job.imgSrc}
          />
        ))}
      </div>
    </div>
  );
}
