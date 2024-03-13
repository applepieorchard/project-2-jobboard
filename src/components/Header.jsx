// src/components/Header.jsx
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <h1>Your Website Name</h1>
        {/* Input box added to the header */}
        <input type="text" placeholder="Search..." />
      </div>
    </header>
  );
};

export default Header;
