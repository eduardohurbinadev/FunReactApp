import React, { Component } from "react";

class Card extends Component {
  render() {
    
    // eslint-disable-next-line
    const { id, title, image, hasButton, isExpanded } = this.props;
    
    return <div className="card"></div>;
  }
}

export default Card;
