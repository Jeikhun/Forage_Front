import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-sec">
          <div className="footer-block container">
            <div className="footer-content">
              <a className="footer-logo" href="">
                <img
                  src="http://127.0.0.1:5500/Images/SVG/logo-svg.svg"
                  alt=""
                />
              </a>
              <div className="footer-navigation">
                <div className="about-table">
                  <h4>About Us</h4>
                  <p>About</p>
                  <p>Contact</p>
                  <p>FAQs</p>
                </div>
                <div className="support-table">
                  <h4>Support</h4>
                  <p>Privacy Notice</p>
                  <p>Cookie Notice</p>
                  <p>Cookie Settings</p>
                </div>
                <div className="students-table">
                  <h4>For Students</h4>
                  <p>All Job Simulations</p>
                </div>
                <div className="employers-table">
                  <h4>For Employers</h4>
                  <p>Why Internify</p>
                  <p>Employer Resources</p>
                </div>
              </div>
            </div>
            <span className="footer-underline"></span>
            <p className="footer-bottom">
              2023 Internify, Inc.All right reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
