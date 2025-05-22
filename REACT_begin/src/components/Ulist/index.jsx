import React from "react";
import { List } from "./List_Item";
export class Ulist extends React.Component {
  render() {
    if (!JSON.parse(localStorage.getItem("todos"))) {
      return;
    } else {
      return (
        <ul>
          {JSON.parse(localStorage.getItem("todos")).map((todo) => (
            <List todo={todo} onClick={this.props.onClick} />
          ))}
        </ul>
      );
    }
  }
}
