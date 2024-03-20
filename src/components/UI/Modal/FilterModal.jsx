/* eslint-disable react/prop-types */
import "./Modal.css";
import Category from "./Category";
import Location from "./Location";
export default function FilterModal({ style, setFilter }) {
  return (
    <div
      className={
        style === "experience"
          ? "experience-container"
          : style === "location"
          ? "location-container"
          : ""
      }
    >
      {style === "experience" && <Category setFilter={setFilter} />}
      {style === "location" && <Location setFilter={setFilter} />}
    </div>
  );
}
