/* eslint-disable react/prop-types */
import "./Modal.css";
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
      FilterModal
    </div>
  );
}
