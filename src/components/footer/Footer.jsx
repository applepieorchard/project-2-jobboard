/* eslint-disable no-unused-vars */
import React from "react";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="image-container">
        <div className="logo"></div>
        <div className="social-images">
          <p>Connect with us</p>
        </div>
      </div>
      <div className="about-container">
        <ul>
          <li>About us</li>
          <li>Careers</li>
          <li>Employer home</li>
          <li>Sitemap</li>
          <li>Credits</li>
        </ul>
      </div>
      <div className="help-center-container">
        <ul>
          <li>Help center</li>
          <li>Summons/Notices</li>
          <li>Grievances</li>
          <li>Report issue</li>
        </ul>
      </div>
      <div className="help-center-container">
        <ul>
          <li>Privacy policy</li>
          <li>Terms & conditions</li>
          <li>Fraud alert</li>
          <li>Trust & safety</li>
        </ul>
      </div>
    </div>
  );
}
