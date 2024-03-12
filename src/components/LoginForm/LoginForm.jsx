import { useState } from "react";
import "./LoginForm.css";

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

        <div className="label-section">
          <label>Password</label>
        </div>
        <div className="input-section">
          <input type="password" name="" placeholder="Enter Password" />
        </div>
        <div className="btn-section">
          <button>Login</button>
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
