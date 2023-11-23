import React, { Component } from "react";

export class Fag extends Component {
  render() {
    const { title, text } = this.props.fag;
    console.log(title);
    return (
      <div class="question">
        <div class="question-text">
          <h4>{title}</h4>
          <p>{text} </p>
        </div>
        <div class="question-arrow">
          <img src="/Images/SVG/question-arrow.svg" alt="" />
        </div>
      </div>
    );
  }
}

export default Fag;
