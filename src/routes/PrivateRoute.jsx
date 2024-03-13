import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PrivateRoute(props) {
  const navigate = useNavigate();
  const { Component } = props;

  useEffect(() => {
    const localStorageToken = localStorage.getItem("token");
    if (!localStorageToken) {
      console.log("===============");
      navigate("/login");
    }
  }, []);

  return <Component />;
}
