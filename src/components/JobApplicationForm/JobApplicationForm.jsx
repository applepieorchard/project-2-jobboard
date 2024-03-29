import { useSelector } from "react-redux";
import FormInputs from "./FormInputs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */

export default function JobApplicationForm({
  jobApplication,
  id,
  setJobApplication,
  setDismissModal,
  dismissModal,

  setIsOpen,
}) {
  const navigate = useNavigate();
  const email = useSelector((state) => state.auth?.loginData?.email);
  const isAuthenticate = useSelector((state) => state?.auth?.isAuthenticate);
  const [userData, setUserData] = useState({});

  const [errors, setErrors] = useState({});
  console.log("email", email);

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!userData.name || !userData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!userData.mobile || !userData.mobile.trim()) {
      newErrors.mobile = "Mobile is required";
      isValid = false;
    } else if (isNaN(userData.mobile)) {
      newErrors.mobile = "You can write only numbers";
    } else if (userData.mobile?.length !== 11) {
      newErrors.mobile = "not a valid number";
    }

    if (!userData.resume) {
      newErrors.resume = "Resume is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };
  const submitHandler = async (e) => {
    e.preventDefault();

    const isValid = validateForm();
    console.log("isAuthenticate inside submit button", isAuthenticate);
    if (isAuthenticate) {
      if (isValid) {
        console.log("userData", userData);
        setDismissModal(true);
        setJobApplication({ [id]: false });
        setIsOpen(true);
      } else {
        validateForm();
      }
    } else {
      navigate("/login");
    }
  };
  return (
    <div
      className={`modal fade${dismissModal ? " show" : ""}`}
      style={dismissModal ? { display: "block" } : { display: "none" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Application for {jobApplication.title}
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={() => setDismissModal(false)}
            ></button>
          </div>

          <form className="" onSubmit={(e) => submitHandler(e)}>
            <div className="modal-body">
              <FormInputs
                submitHandler={submitHandler}
                userData={userData}
                setUserData={setUserData}
                errors={errors}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setDismissModal(false)}
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
