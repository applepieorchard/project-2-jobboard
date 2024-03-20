/* eslint-disable react/prop-types */
import "./Modal.css";
import { useSelector, useDispatch } from "react-redux";
import { filteredData } from "../../../redux/auth";
export default function Location({ setFilter }) {
  const dispatch = useDispatch();
  const allListJob = useSelector((state) => state?.auth?.jobLists);
  const filterJob = useSelector((state) => state?.auth?.filterJobList);
  console.log("inside function", filterJob);

  const jobTitleHanlder = (title) => {
    const filterData = allListJob.filter((filteredJob) => {
      if (typeof filteredJob.locationName === "string") {
        console.log();
        return filteredJob.locationName
          .toLowerCase()
          .includes(title.toLowerCase());
      }

      // return false;
    });
    dispatch(filteredData(filterData));

    setFilter((prevFilter) => (prevFilter === "location" ? "" : "location"));
  };
  return (
    <div className="modal-data-container">
      <p className="modal-data-heading">Location</p>
      <ul>
        <li onClick={() => jobTitleHanlder("London")}>London</li>
        <li onClick={() => jobTitleHanlder("Watford")}>Watford</li>
        <li onClick={() => jobTitleHanlder("Canary Wharf")}>Canary Wharf</li>
        <li onClick={() => jobTitleHanlder("SG137QX")}>SG137QX</li>
        <li onClick={() => jobTitleHanlder("AL11AG")}>AL11AG</li>
      </ul>
    </div>
  );
}
