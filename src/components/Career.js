import React from "react";

const Career = () => {
  return (
    <section className="career-info container">
      <div className="info-block">
        <h4>The modern way to have a build career:</h4>
        <p>take part,find a job and an employee who meets your expectztions</p>
        <a href="">Get Started →</a>
      </div>
      <div className="career-photo">
        <img src="http://127.0.0.1:5501/Images/Img/career-photo.png" alt="" />
        <span className="circle" id="circle-1"></span>
        <span className="circle" id="circle-2"></span>
        <span className="circle" id="circle-3"></span>
        <span className="circle" id="circle-4"></span>
        <span className="circle" id="circle-5"></span>
      </div>
    </section>
  );
};

export default Career;
