import React from "react";
import { Button } from "../../Button";
export class List extends React.Component {
  render() {
    return (
      <li>
        <span>{this.props.todo.title}</span>
        <div>
          <Button title="Done" />
          <Button
            onClick={this.props.onClick}
            id={this.props.todo.id}
            title="Delete"
          />
        </div>
      </li>
    );
  }
}
