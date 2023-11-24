import React, { Component } from "react";
import Fags from "./Fags";

export class FagPage extends Component {
  render() {
    return (
      <section className="faq container">
        <div className="faq-top">
          <h2>FAQ</h2>
        </div>
        <div className="faq-content">
          <Fags />
        </div>
      </section>
    );
  }
}

export default FagPage;
