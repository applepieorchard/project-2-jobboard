/* eslint-disable no-unused-vars */
import React from "react";
import "./footer.css";
import logo from "../../assets/logo.jpg";

export default function Footer() {
  let date = new Date();
  date = date.getFullYear();
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="images-container">
          <img src={logo} alt="logo" className="footer-logo" />
          <div className="social-images-container">
            <p>Connect with us</p>
            <div className="social-images">
              <i
                className="fa-brands fa-square-facebook"
                style={{ color: "#FFD43B" }}
              />
              <i
                className="fa-brands fa-square-instagram"
                style={{ color: "#FFD43B" }}
              />
              <i
                className="fa-brands fa-square-twitter"
                style={{ color: "#FFD43B" }}
              />
              <i
                className="fa-brands fa-linkedin"
                style={{ color: "#FFD43B" }}
              />
            </div>
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
      <p className="copy-right">
        Copyright {date} | Designed By Job Portal. All Rights Reserved
      </p>
    </div>
  );
}
