import "./LoginForm.css";
import { useEffect, useState } from "react";
import { loginUser } from "../../utils/Auth";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
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

    if (!userData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (userData.password.length < 6) {
      newErrors.password = "Password must be include 6 characters";
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
          const token = await loginUser(userData.email, userData.password);
          localStorage.setItem("token", token);
          navigate("/");
          return token;
        } else {
          validateForm();
        }
      } catch (err) {
        console.log("getting error on creating user", err);
      }
    } else {
      validateForm();
    }
  };

  useEffect(() => {
    const localStorageToken = localStorage.getItem("token");
    if (localStorageToken) {
      navigate("/");
    }
  }, []);

  return (
    <div className="loginform">
      <h4 className="login-heading">Login</h4>
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

        <div className="btn-section">
          <button type="submit">Login</button>
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
