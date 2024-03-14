// src/components/Header.jsx

import "./Header.css";

const Header = () => {
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
        <input
          type="text"
          placeholder="Search jobs here..."
          className="header-search-input"
        />
        <button className="header-login-btn">Login</button>
      </div>
    </header>
  );
};

export default Header;
