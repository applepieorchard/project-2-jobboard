import React from "react";
import Job from "./Job";
import data from "../assets/jobData.json";

export default function () {
  const jobs = data.jobs;
  console.log(jobs);
  return (
    <div>
      {jobs.map((job) => (
        <Job
          key={job.id}
          title={job.title}
          description={job.description}
          company={job.company}
          location={job.location}
          hours={job.hours}
          imgSrc={job.imgSrc}
        ></Job>
      ))}
    </div>
  );
}
