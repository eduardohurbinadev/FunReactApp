import React, { Component } from "react";

class Button extends Component {
  render() {
    const { image } = this.props;
    return (
        <input type="image" src={image} alt="" />
    );
  }
}

export default Button;
