import React from "react";
import { Button } from "../Button";
export class Card extends React.Component {
  render() {
    return (
      <div className="card_content">
        <img src={this.props.winner.url} alt="" />
        <div className="card_info">
          Some information about the winner:
          <p>It's like: {this.props.winner.name}</p>
          <p>Won by {this.props.winner.vote} votes! </p>
          <p>Congrats! </p>
        </div>
        <Button
          title={this.props.btn_title}
          id={this.props.btn_id}
          btnOnClick={this.props.btnOnClick}
        />
      </div>
    );
  }
}
