/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PrivateRoute(props) {
  const navigate = useNavigate();
  const { Component } = props;
  const isAuthenticate = useSelector((state) => state?.auth?.isAuthenticate);
  useEffect(() => {
    if (!isAuthenticate) {
      navigate("/login");
    }
  }, [isAuthenticate]);

  return <Component />;
}
