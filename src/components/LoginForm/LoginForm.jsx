import "./loginForm.css";
import { useState } from "react";
import { createUser, loginUser } from "../../utils/Auth";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { authenticate } from "../../redux/auth";

export default function LoginForm() {
  const [loginHeading, setLoginHeading] = useState("Login");
  const [userData, setUserData] = useState({});
  const [errors, setErrors] = useState({});
  const navigation = useNavigate();
  const dispatch = useDispatch();

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
    if (loginHeading === "Sign Up") {
      if (!userData.confirmEmail) {
        newErrors.confirmEmail = "confirm Email is required";
        isValid = false;
      } else if (userData.confirmEmail !== userData.email) {
        console.log("not matching");
        newErrors.confirmEmail = "Email and Confirm Email must match";
      }
    }

    if (!userData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (userData.password.length < 6) {
      newErrors.password = "Password must be include 6 characters";
    }
    if (loginHeading === "Sign Up") {
      if (!userData.confirmPassword) {
        newErrors.confirmPassword = "confirm Password is required";
        isValid = false;
      } else if (userData.confirmPassword !== userData.password) {
        newErrors.confirmPassword = "Password and Confirm Password must match";
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const SignUpLoginValidation = async () => {
    if (loginHeading === "Sign Up") {
      try {
        if (Object.keys(errors).length === 0) {
          console.log("api call successfully");
          const token = await createUser(userData.email, userData.password);
          dispatch(authenticate(token));
          toast.success("User created successfully ");
          setLoginHeading("Login");
          return token;
        } else {
          validateForm();
        }
      } catch (err) {
        console.log("getting error on creating user", err);
        toast.error("User already exists !");
      }
    } else {
      try {
        if (Object.keys(errors).length === 0) {
          const token = await loginUser(userData.email, userData.password);
          localStorage.setItem("token", token);
          navigation("/");
          return token;
        } else {
          validateForm();
        }
      } catch (err) {
        console.log("getting error on creating user", err);
        toast.error(err.message);
      }
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    SignUpLoginValidation();
  };

  return (
    <div className="loginform">
      <h4 className="login-heading">{loginHeading}</h4>
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
        {loginHeading === "Sign Up" && (
          <>
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
          </>
        )}

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
        {loginHeading === "Sign Up" && (
          <>
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
          </>
        )}

        <div className="btn-section">
          <button type="submit">{loginHeading}</button>
        </div>

        <div className="btn-section">
          <p>
            <span onClick={() => setLoginHeading("Sign Up")}>New User</span>
            &nbsp; |&nbsp;
            <span onClick={() => setLoginHeading("Login")}>Existing User</span>
          </p>
        </div>
      </form>
      <ToastContainer autoClose={1000} />
    </div>
  );
}
