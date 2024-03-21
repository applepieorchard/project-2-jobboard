import Job from "../components/Job";
import { useEffect, useState } from "react";
import { getJobs } from "../utils/getJobs.js";
import "./jobboard.css";
import "./jobboardResponsive.css";
import Slide from "../components/slider/Slide";
import { useDispatch, useSelector } from "react-redux";
import { filteredData, listData } from "../redux/auth.js";

export default function JobBoard() {
  const dispatch = useDispatch();
  // const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    getJobs()
      .then(function (res) {
        dispatch(filteredData(res.data.results));
        dispatch(listData(res.data.results));
        // setJobs(res.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  // const data = useSelector((state) => state?.auth?.jobLists);
  const dataGettingByFilter = useSelector(
    (state) => state?.auth?.filterJobList
  );

  // useEffect(() => {
  //   setJobs(data);
  // }, []);
  // console.log("===========filterData", dataGettingByFilter);
  useEffect(() => {
    setFilter(dataGettingByFilter);
  }, [dataGettingByFilter]);
  return (
    <div className="jobboard-container">
      <Slide />
      <div className="job-card-container">
        {filter?.length > 0 ? (
          filter.map((job) => (
            <Job
              key={job.jobId}
              id={job.jobId}
              jobTitle={job?.jobTitle}
              employerName={job?.employerName}
              locationName={job.locationName}
              date={job?.date}
              posted_date={job?.date}
            />
          ))
        ) : (
          <p className="fs-1 text-#4b8ee2 text-center m-5 no-job">
            No Jobs available{" "}
          </p>
        )}
      </div>
    </div>
  );
}
