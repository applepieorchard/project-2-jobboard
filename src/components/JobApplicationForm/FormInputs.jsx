/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-self-assign */
import { useState } from "react";
import "../loginForm/loginForm.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function FormInputs({
  submitHandler,
  userData,
  setUserData,
  errors,
}) {
  const navigate = useNavigate();
  let email = useSelector((state) => state?.auth?.loginData?.email);

  email = email;

  const [fileName, setFileName] = useState("");

  const changeHandler = (name, e) => {
    if (name === "resume") {
      setUserData({ ...userData, [name]: e.target.files[0] });
      setFileName(e.target.files[0]?.name);
    } else {
      setUserData({ ...userData, [name]: e.target.value });
    }
  };

  return (
    <>
      <div className="label-section">
        <label>Name</label>
      </div>

      <div className="input-section">
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={userData.name}
          onChange={(e) => changeHandler("name", e)}
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>
      <div className="label-section">
        <label>Mobile</label>
      </div>
      {console.log(userData, userData.mobile?.length)}
      <div className="input-section">
        <input
          type="text"
          name="mobile"
          value={userData.mobile}
          placeholder="Enter Your mobile number"
          onChange={(e) => changeHandler("mobile", e)}
        />
        {errors.mobile && <p className="error">{errors.mobile}</p>}
      </div>
      <div className="label-section">
        <label>Email</label>
      </div>

      <div className="input-section">
        <input
          type="email"
          name="email"
          readOnly
          placeholder="Enter Email ID"
          value={email}
          onChange={(e) => changeHandler("email", e)}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div className="label-section">
        <label htmlFor="resume" className="resume">
          Upload resume
        </label>
      </div>
      <div className="input-section">
        <input
          type="file"
          name=""
          id="resume"
          accept=".pdf,.doc,.docx"
          style={{ display: "none" }}
          onChange={(e) => changeHandler("resume", e)}
        />
        {fileName && <p className="resume-file-name">{fileName}</p>}
        {errors.resume && <p className="error">{errors.resume}</p>}
      </div>
    </>
  );
}
