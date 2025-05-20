import React from "react";
import { List } from "./List_Item";
export class Ulist extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => (
          <List todo={todo} onClick={this.props.onClick} />
        ))}
      </ul>
    );
  }
}
