import React from "react";
import "./App.css";
import { Header } from "../components/Header";
import { List } from "../components/List";
import { Button } from "../components/Button";
import { Card } from "../components/Card";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emoji: [
        { name: "wow", id: 1, url: "../imgs/1.jpg", vote: 0 },
        { name: "yo", id: 2, url: "../imgs/2.jpg", vote: 0 },
        { name: "angry", id: 3, url: "../imgs/3.jpg", vote: 0 },
        { name: "ok", id: 4, url: "../imgs/4.jpg", vote: 0 },
        { name: "damn", id: 5, url: "../imgs/5.jpg", vote: 0 },
        { name: "hmmm", id: 6, url: "../imgs/6.jpg", vote: 0 },
      ],
      winner: {},
      showWinner: "",
    };
    this.onClickHandler = this.onClickHandler.bind(this);
    this.btnOnClickHandler = this.btnOnClickHandler.bind(this);
    this.resetHendler = this.resetHendler.bind(this);
    this.closeModalHendler = this.closeModalHendler.bind(this);
  }

  onClickHandler(currEmoji) {
    const indexOfCurrentEmoji = this.state.emoji.indexOf(currEmoji);
    const emojiFromLS = JSON.parse(localStorage.getItem("current_emoji_list"));
    const UpdatedEmoji = emojiFromLS ? emojiFromLS : this.state.emoji;

    UpdatedEmoji[indexOfCurrentEmoji].vote += 1;
    localStorage.setItem("current_emoji_list", JSON.stringify(UpdatedEmoji));
    this.setState({ emoji: UpdatedEmoji });
  }

  btnOnClickHandler() {
    const emojiFromLS = JSON.parse(localStorage.getItem("current_emoji_list"));
    const emoji = emojiFromLS ? emojiFromLS.sort((a, b) => a.vote - b.vote) : 0;
    if (!emoji) {
      return;
    } else {
      const winnerEmoji = emoji[emoji.length - 1];
      if (winnerEmoji.vote == emoji[emoji.length - 2].vote) {
        alert("Can't be more than one winners!We have to wait!");
        return;
      } else {
        this.setState({ winner: winnerEmoji, showWinner: "open" });
      }
    }
  }

  resetHendler() {
    localStorage.removeItem("current_emoji_list");
    this.setState({
      emoji: [
        { name: "wow", id: 1, url: "../imgs/1.jpg", vote: 0 },
        { name: "yo", id: 2, url: "../imgs/2.jpg", vote: 0 },
        { name: "angry", id: 3, url: "../imgs/3.jpg", vote: 0 },
        { name: "ok", id: 4, url: "../imgs/4.jpg", vote: 0 },
        { name: "damn", id: 5, url: "../imgs/5.jpg", vote: 0 },
        { name: "hmmm", id: 6, url: "../imgs/6.jpg", vote: 0 },
      ],
      winner: {},
      showWinner: "",
    });
  }

  closeModalHendler() {
    this.setState({ showWinner: "" });
  }

  render() {
    return (
      <>
        <div className="main_app">
          <Header />
          <List emoji_list={this.state.emoji} onClick={this.onClickHandler} />
          <Button title="Show Results" btnOnClick={this.btnOnClickHandler} />
          <Button title="Reset" btnOnClick={this.resetHendler} />
        </div>
        <div className={`winner_card ${this.state.showWinner}`}>
          <Card
            winner={this.state.winner}
            btn_title="X"
            btn_id="closeModalBtn"
            btnOnClick={this.closeModalHendler}
          />
        </div>
      </>
    );
  }
}

export default App;
