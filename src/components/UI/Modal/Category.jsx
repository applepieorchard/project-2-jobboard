/* eslint-disable react/prop-types */
import { useSelector, useDispatch } from "react-redux";
import { filteredData } from "../../../redux/auth";
import "./Modal.css";
export default function Category({ setFilter }) {
  const dispatch = useDispatch();
  const allListJob = useSelector((state) => state?.auth?.jobLists);
  const filterJob = useSelector((state) => state?.auth?.filterJobList);
  console.log("inside function", filterJob);

  const jobTitleHanlder = (title) => {
    const filterData = allListJob.filter((filteredJob) => {
      if (typeof filteredJob.jobTitle === "string") {
        console.log();
        return filteredJob.jobTitle.toLowerCase().includes(title.toLowerCase());
      }

      // return false;
    });
    console.log("in category==============", filterData);
    dispatch(filteredData(filterData));

    setFilter((prevFilter) =>
      prevFilter === "experience" ? "" : "experience"
    );
  };
  return (
    <div className="modal-data-container">
      <p className="modal-data-heading">Job Title</p>
      {console.log("in category", filterJob)}
      <ul>
        <li onClick={() => jobTitleHanlder("Frontend Developer")}>
          Frontend Developer
        </li>
        <li onClick={() => jobTitleHanlder("Backend Developer")}>
          Backend Developer
        </li>
        <li onClick={() => jobTitleHanlder("Senior Frontend Engineer")}>
          Senior Frontend Engineer
        </li>
        <li onClick={() => jobTitleHanlder("Mobile Engineer")}>
          Mobile Engineer
        </li>
        <li onClick={() => jobTitleHanlder("Senior Full Stack Developer")}>
          Senior Full Stack Developer
        </li>
      </ul>
    </div>
  );
}
