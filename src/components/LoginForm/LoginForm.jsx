import "./loginForm.css";
import { useState } from "react";
export default function LoginForm() {
  const [loginHeading, setLoginHeading] = useState("Login");
  return (
    <div className="loginform">
      <h4 className="login-heading">{loginHeading}</h4>
      <form className="">
        <div className="label-section">
          <label>Email</label>
        </div>

        <div className="input-section">
          <input type="email" name="" placeholder="Enter Email ID" />
        </div>
        {loginHeading === "Sign Up" && (
          <>
            {" "}
            <div className="label-section">
              <label> Confirm Email</label>
            </div>
            <div className="input-section">
              <input type="email" name="" placeholder="Confirm Email ID" />
            </div>
          </>
        )}

        <div className="label-section">
          <label>Password</label>
        </div>
        <div className="input-section">
          <input type="password" name="" placeholder="Enter Password" />
        </div>
        {loginHeading === "Sign Up" && (
          <>
            {" "}
            <div className="label-section">
              <label>Confirm Password</label>
            </div>
            <div className="input-section">
              <input type="password" name="" placeholder="Confirm Password" />
            </div>
          </>
        )}

        <div className="btn-section">
          <button>{loginHeading}</button>
        </div>

        <div className="btn-section">
          <p>
            <span onClick={() => setLoginHeading("Sign Up")}>New User</span>
            &nbsp; |&nbsp;
            <span onClick={() => setLoginHeading("Login")}>Existing User</span>
          </p>
        </div>
      </form>
    </div>
  );
}
