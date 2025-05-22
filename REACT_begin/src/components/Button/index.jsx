import React from "react";

export class Button extends React.Component {
  constructor(props) {
    super(props);
    this.hendleDelete = this.hendleDelete.bind(this);
  }

  hendleDelete() {
    if (this.props.title == "Done") {
      return;
    }
    this.props.onClick(this.props.id);
  }

  render() {
    return <button onClick={this.hendleDelete}>{this.props.title}</button>;
  }
}
