/* eslint-disable react/prop-types */
// src/components/Header.jsx

import { useNavigate } from "react-router-dom";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/auth";

const Header = () => {
  const dispatch = useDispatch();
  const isAuthenticate = useSelector((state) => state?.auth?.isAuthenticate);
  let email = useSelector((state) => state?.auth?.loginData?.email);

  email = email && email.split("");
  email = email && email?.[0].toUpperCase();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <header>
      <div className="header-content">
        <img
          src="./src/assets/logo.jpg"
          alt="Your Website Logo"
          className="header-logo"
        />
        <ul>
          <li>Jobs</li>
        </ul>
        <div className="header-search-input">
          <input
            type="text"
            placeholder="Search jobs here"
            className="header-input"
          />
          <div className="search-icon-container">
            <i
              className="fa-solid fa-magnifying-glass"
              style={{ color: "#fff" }}
            />
          </div>
        </div>
        {isAuthenticate ? (
          <button className="header-login-btn" onClick={logoutHandler}>
            Logout
          </button>
        ) : (
          <button className="header-login-btn">Login</button>
        )}

        {isAuthenticate && (
          <div className="header-user">
            <span> {email ? email : ""}</span>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
