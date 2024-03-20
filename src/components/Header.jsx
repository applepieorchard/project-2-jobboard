/* eslint-disable react/prop-types */
// src/components/Header.jsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Header.css";
import "./HeaderResponsive.css";
import logo from "../assets/logo.jpg";
import { useDispatch, useSelector } from "react-redux";
import { logout, filteredData } from "../redux/auth";
const Header = () => {
  const filterJob = useSelector((state) => state?.auth?.filterJobList);
  const list = useSelector((state) => state?.auth?.jobLists);

  const dispatch = useDispatch();
  const isAuthenticate = useSelector((state) => state?.auth?.isAuthenticate);
  let email = useSelector((state) => state?.auth?.loginData?.email);

  email = email && email.split("");
  email = email && email?.[0].toUpperCase();
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState("");

  const logoutHandler = () => {
    dispatch(logout());
    localStorage.removeItem("loginData");
    navigate("/login");
  };

  const changeHandler = (e) => {
    setSearchValue(e.target.value);
    if (e.target.value == "") {
      dispatch(filteredData(list));
    }
  };
  function submitSearch(event) {
    event.preventDefault();
    const filterData = filterJob.filter((filteredJob) => {
      if (typeof filteredJob.jobTitle === "string") {
        console.log("true");
        return filteredJob.jobTitle
          .toLowerCase()
          .includes(searchValue.toLowerCase());
      }
      return false;
    });
    dispatch(filteredData(filterData));
    console.log(window.location.pathname);
    if (window.location.pathname === "/login") {
      navigate("/");
    }
  }

  return (
    <div className="header-content">
      <Link to="/">
        <img src={logo} alt="Your Website Logo" className="header-logo" />
      </Link>

      <ul>
        <li>
          <Link to="/">Jobs</Link>
        </li>
      </ul>
      <div className="header-search-input">
        <form onSubmit={submitSearch}>
          <input
            type="text"
            placeholder="Search jobs here"
            className="header-input"
            value={searchValue}
            onChange={(e) => changeHandler(e)}
          />
          <button className="search-icon-container" type="submit">
            <i
              className="fa-solid fa-magnifying-glass"
              style={{ color: "#fff" }}
            />
          </button>
        </form>
      </div>
      {isAuthenticate ? (
        <button className="header-login-btn" onClick={logoutHandler}>
          Logout
        </button>
      ) : (
        <button className="header-login-btn" onClick={() => navigate("/login")}>
          Login
        </button>
      )}

      {isAuthenticate && (
        <div className="header-user">
          <span> {email ? email : ""}</span>
        </div>
      )}
    </div>
  );
};

export default Header;
