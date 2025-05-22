import React from "react";
export class List_item extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler() {
    this.props.onClick(this.props.emoji);
  }
  render() {
    const emojiFromLS = JSON.parse(localStorage.getItem("current_emoji_list"));
    let currEmojiFromLS = {};
    if (emojiFromLS) {
      currEmojiFromLS = emojiFromLS.filter(
        (element) => element.id == this.props.emoji.id
      )[0];
    }
    return (
      <li className="emoji">
        <img
          src={
            this.props.emoji.url ? this.props.emoji.url : this.props.winner.url
          }
          alt="EMOJI"
          onClick={this.clickHandler}
        />
        <span>
          {currEmojiFromLS.vote ? currEmojiFromLS.vote : this.props.emoji.vote}
        </span>
      </li>
    );
  }
}
