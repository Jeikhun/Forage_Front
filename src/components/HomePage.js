import React, { Component } from "react";
import Partner from "./Partner";
import "../styles/homePage.scss";
import Career from "./Career";

export class HomePage extends Component {
  render() {
    return (
      <>
        <Career />
        <div className="central container">
          <div className="about-program">
            <div className="about-intern">
              <h5>For Intern</h5>
              <p>
                <a className="orange" href="">
                  Join
                </a>{" "}
                the virtual law internship program, complete assignments placed
                by public and private sector partner organizations in various
                fields of law, enrich your knowledge with experience, get the
                opportunity to choose the area in which you will specialize as
                soon as possible, and join the talent pool of the corresponding
                partner
              </p>
              <a href="">
                Explore virtual internship programs{" "}
                <img
                  src="http://127.0.0.1:5501/Images/Img/right_arrow.svg"
                  alt=""
                />
              </a>
            </div>
            <div className="about-employee">
              <h5>For employers</h5>
              <p>
                <a className="orange" href="">
                  Join
                </a>{" "}
                a virtual law internship program as a partner organization and
                gain the ability to leverage the flexibility and accessibility
                of the virtual environment to attract a high volume of
                candidates and reduce the risks associated with selecting a
                candidate who is not a good fit for a position as a result of an
                interview.
              </p>
              <a href="">
                Place a virtual internship programs{" "}
                <img
                  src="http://127.0.0.1:5501/Images/Img/right_arrow.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <div className="partner-sec container">
          <div className="partner-block">
            <h2>OUR PARTNERS</h2>
            <Partner />
          </div>
        </div>
      </>
    );
  }
}

export default HomePage;
