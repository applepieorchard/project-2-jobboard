// src/components/Header.jsx

import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <img src="./src/assets/logo.jpg" alt="Your Website Logo" />
        <h1>Job Board</h1>
        {/* Input box added to the header */}
        <input
          type="text"
          placeholder="Search jobs here..."
          className="headersearch-input"
        />
      </div>
    </header>
  );
};

export default Header;
