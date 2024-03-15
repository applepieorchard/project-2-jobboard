/* eslint-disable react/prop-types */
import "./Modal.css";
import Category from "./Category";
import Location from "./Location";
export default function FilterModal({ style }) {
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
      {style === "experience" && <Category />}
      {style === "location" && <Location />}
    </div>
  );
}
