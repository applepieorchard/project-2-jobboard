import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NewToJob from "../../components/NewToJob/NewToJob";
import LoginForm from "../../components/LoginForm/LoginForm";

import "./loginpage.css";

export default function LoginPage() {
  const [token, setToken] = useState();
  const navigate = useNavigate();
  // useEffect(() => {
  //   const localStorageToken = localStorage.getItem("token");
  //   if (localStorageToken == null) {
  //     window.location.pathname = "/login";
  //     // navigate("/login");
  //   } else {
  //     setToken(localStorageToken);
  //   }
  // }, []);
  // useEffect(() => {
  //   navigate("/");
  // }, [token]);
  return (
    <div className="loginpage">
      <NewToJob />
      <LoginForm />
    </div>
  );
}
