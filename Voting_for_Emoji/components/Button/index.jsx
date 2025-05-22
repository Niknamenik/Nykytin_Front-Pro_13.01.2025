import React from "react";
export class Button extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler() {
    this.props.btnOnClick();
  }
  render() {
    return (
      <button id={this.props.id} onClick={this.clickHandler}>
        {this.props.title}
      </button>
    );
  }
}
