import React, { Component } from "react";

export class Fag extends Component {
  render() {
    const { title, text } = this.props.fag;
    return (
      <div className="question">
        <div className="question-text">
          <h4>{title}</h4>
          <p>{text} </p>
        </div>
        <div className="question-arrow">
          <img
            src="http://127.0.0.1:5500/Images/SVG/question-arrow.svg"
            alt=""
          />
        </div>
      </div>
    );
  }
}

export default Fag;
