/* eslint-disable react/prop-types */
import "./Job.css";

export default function Job({
  title,
  description,
  company,
  location,
  hours,
  imgSrc,
}) {
  return (
    <div className="job-list-body">
      <div className="job-board-container">
        <div className="job-image">
          {" "}
          <img src={imgSrc} alt={title} />
        </div>

        <div className="joblist-card">
          <h3>TITAN - Node.js Developer - Express.js</h3>
          <ul>
            <li>{description}</li>
            <li>{company}</li>
            <li>{location}</li>
            <li>{hours} hours per week</li>
          </ul>
        </div>
        <button
          onClick={() => {
            console.log("Apply pressed");
          }}
        >
          Apply
        </button>
      </div>
    </div>
  );
}
