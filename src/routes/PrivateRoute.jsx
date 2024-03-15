/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PrivateRoute(props) {
  const navigate = useNavigate();
  const { Component, gettingToken } = props;
  let localStorageToken = localStorage.getItem("token");
  localStorageToken = JSON.parse(localStorageToken);
  useEffect(() => {
    if (!localStorageToken?.idToken) {
      navigate("/login");
    } else {
      gettingToken(localStorageToken);
    }
  }, []);

  return <Component />;
}
