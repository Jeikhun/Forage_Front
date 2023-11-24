import React, { Component } from "react";

export class Part extends Component {
  render() {
    const { logoUrl } = this.props.partner;
    return (
      <div className="owl-item">
        <img src={logoUrl} alt="Owl Image" />
      </div>
    );
  }
}

export default Part;
