import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <nav id="navigation" className="container">
        <a className="logo" href="">
          <img alt="" src="http://127.0.0.1:5500/Images/SVG/logo-svg.svg" />
        </a>
        <div className="block">
          <div className="direction">
            <a href="">For employers</a>
            <a href="">For interns</a>
          </div>
          <div className="sign-in">
            <a className="sign-in-btn" href="">
              Sign in
            </a>
            <a className="log-in-btn" href="">
              Login in
            </a>
          </div>
        </div>
      </nav>
    );
  }
}
export default Navbar;
