/* eslint-disable react/prop-types */
// src/components/Header.jsx

import { useNavigate } from "react-router-dom";
import "./Header.css";
import { useEffect, useState } from "react";

const Header = ({ token }) => {
  const [tokenId, setTokenId] = useState();
  let email = token?.email;
  email = email && email.split("");
  email = email && email?.[0].toUpperCase();
  const [emailId, setEmailId] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setEmailId(email);
    setTokenId(token?.idToken);
  }, [email, token?.idToken]);

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.clear();
    setEmailId(null);
    setTokenId(null);
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
        {tokenId ? (
          <button className="header-login-btn" onClick={logoutHandler}>
            Logout
          </button>
        ) : (
          <button className="header-login-btn">Login</button>
        )}

        {tokenId && (
          <div className="header-user">
            <span> {emailId ? emailId : ""}</span>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
