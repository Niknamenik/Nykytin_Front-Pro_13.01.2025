import React from "react";
export class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.hendleSubmit = this.hendleSubmit.bind(this);
  }
  hendleSubmit(event) {
    event.preventDefault();

    const user = {
      login: "",
    };
    const input = [...event.target].filter(
      (element) => element.id == "auth_input"
    )[0];
    user.login = input.value;
    sessionStorage.setItem("user", JSON.stringify(user));
    event.target.classList.toggle("open");
  }
  render() {
    return (
      <form
        action="no-action"
        id="auth_Form"
        className="open"
        onSubmit={this.hendleSubmit}
      >
        <label>
          <input type="text" id="auth_input" required />
          <button type="submit">Login</button>
        </label>
      </form>
    );
  }
}
