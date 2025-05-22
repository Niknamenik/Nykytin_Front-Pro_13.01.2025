import React from "react";
export class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const input = [...event.target].filter(
      (element) => element.id == "input"
    )[0];

    this.props.onSubmit(input.value);

    input.value = "";
  }

  render() {
    return (
      <form action="no-action" id="form" onSubmit={this.handleSubmit}>
        <label>
          <input type="text" id="input" />
          <button type="submit" id="btn">
            Add
          </button>
        </label>
      </form>
    );
  }
}
