import { useEffect } from "react";
import NewToJob from "../../components/NewToJob/NewToJob";
import LoginForm from "../../components/loginForm/LoginForm";

import "./loginpage.css";
import SignUp from "../../components/SignupForm/SignupForm";

export default function LoginPage() {
  return (
    <div className="loginpage">
      <NewToJob />
      <LoginForm />
    </div>
  );
}
