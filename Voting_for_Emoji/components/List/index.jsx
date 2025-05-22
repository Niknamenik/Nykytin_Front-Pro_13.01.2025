import React from "react";
import { List_item } from "./list_item";
export class List extends React.Component {
  render() {
    return (
      <ul className="emoji_list">
        <List_item
          emoji={this.props.emoji_list[0]}
          onClick={this.props.onClick}
        />
        <List_item
          emoji={this.props.emoji_list[1]}
          onClick={this.props.onClick}
        />
        <List_item
          emoji={this.props.emoji_list[2]}
          onClick={this.props.onClick}
        />
        <List_item
          emoji={this.props.emoji_list[3]}
          onClick={this.props.onClick}
        />
        <List_item
          emoji={this.props.emoji_list[4]}
          onClick={this.props.onClick}
        />
        <List_item
          emoji={this.props.emoji_list[5]}
          onClick={this.props.onClick}
        />
      </ul>
    );
  }
}
