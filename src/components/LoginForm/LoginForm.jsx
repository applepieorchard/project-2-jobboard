import "./loginForm.css";
import { useState } from "react";
import { createUser } from "../../utils/Auth";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { authenticate } from "../../redux/auth";

export default function LoginForm() {
  const [loginHeading, setLoginHeading] = useState("Login");
  const [userData, setUserData] = useState({});
  const dispatch = useDispatch();
  const changeHandler = (name, event) => {
    setUserData({ ...userData, [name]: event.target.value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const token = await createUser(userData.email, userData.password);

      dispatch(authenticate(token));
      toast.success("User created successfully ");
      return token;
    } catch (err) {
      console.log("getting error on creating user", err);
      toast.error("User already exists !");
    }
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
            value={userData.name}
            onChange={(e) => changeHandler("email", e)}
          />
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
                onChange={(e) => changeHandler("confirmEmail", e)}
              />
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
            placeholder="Enter Password"
            onChange={(e) => changeHandler("password", e)}
          />
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
                placeholder="Confirm Password"
                onChange={(e) => changeHandler("confirmPassword", e)}
              />
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
