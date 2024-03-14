import "../LoginForm/LoginForm.css";
import { useState } from "react";
import { createUser } from "../../utils/Auth";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [userData, setUserData] = useState({});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const changeHandler = (name, event) => {
    setUserData({ ...userData, [name]: event.target.value });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!userData.email || !userData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    }
    if (!userData.confirmEmail) {
      newErrors.confirmEmail = "confirm Email is required";
      isValid = false;
    } else if (userData.confirmEmail !== userData.email) {
      console.log("not matching");
      newErrors.confirmEmail = "Email and Confirm Email must match";
    }

    if (!userData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (userData.password.length < 6) {
      newErrors.password = "Password must be include 6 characters";
    }
    if (!userData.confirmPassword) {
      newErrors.confirmPassword = "confirm Password is required";
      isValid = false;
    } else if (userData.confirmPassword !== userData.password) {
      newErrors.confirmPassword = "Password and Confirm Password must match";
    }
    setErrors(newErrors);
    return isValid;
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      try {
        if (Object.keys(errors).length === 0) {
          console.log("api call successfully");
          const token = await createUser(userData.email, userData.password);

          navigate("/login");
          return token;
        } else {
          validateForm();
        }
      } catch (err) {
        console.log("getting error on creating user", err);
      }
    } else {
      console.log("Form validation failed");
    }
  };

  return (
    <div className="loginform">
      <h4 className="login-heading">Sign Up</h4>
      <form className="" onSubmit={submitHandler}>
        <div className="label-section">
          <label>Email</label>
        </div>
        <div className="input-section">
          <input
            type="email"
            name=""
            placeholder="Enter Email ID"
            value={userData.email}
            onChange={(e) => changeHandler("email", e)}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="label-section">
          <label> Confirm Email</label>
        </div>
        <div className="input-section">
          <input
            type="email"
            name=""
            placeholder="Confirm Email ID"
            value={userData.confirmEmail}
            onChange={(e) => changeHandler("confirmEmail", e)}
          />{" "}
          {errors.confirmEmail && (
            <p className="error">{errors.confirmEmail}</p>
          )}
        </div>

        <div className="label-section">
          <label>Password</label>
        </div>
        <div className="input-section">
          <input
            type="password"
            name=""
            value={userData.password}
            placeholder="Enter Password"
            onChange={(e) => changeHandler("password", e)}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div className="label-section">
          <label>Confirm Password</label>
        </div>
        <div className="input-section">
          <input
            type="password"
            name=""
            value={userData.confirmPassword}
            placeholder="Confirm Password"
            onChange={(e) => changeHandler("confirmPassword", e)}
          />{" "}
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}
        </div>

        <div className="btn-section">
          <button type="submit">SignUp</button>
        </div>

        <div className="btn-section">
          <p>
            <span onClick={() => navigate("/sign-up")}>New User</span>
            &nbsp; |&nbsp;
            <span onClick={() => navigate("/login")}>Existing User</span>
          </p>
        </div>
      </form>
    </div>
  );
}
