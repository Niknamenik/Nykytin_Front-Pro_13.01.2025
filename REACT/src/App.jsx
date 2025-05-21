import React from "react";
import "./App.css";
import { Form } from "./components/Form";
import { Ulist } from "./components/Ulist";
import { AuthForm } from "./components/auth_Form";
import { Header } from "./components/Header";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleFormSubmit(title) {
    if (!title) {
      return;
    }
    const newTodos = [
      ...this.state.todos,
      { title, done: false, id: +new Date() },
    ];
    this.setState({ todos: newTodos });
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }

  handleDelete(id) {
    const todosFormLs = JSON.parse(localStorage.getItem("todos"));
    const newTodos = todosFormLs.filter((element) => element.id !== id);

    this.setState({ todos: newTodos });
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }

  render() {
    return (
      <>
        <AuthForm />
        <Header />
        <Form onSubmit={this.handleFormSubmit} />
        <Ulist onClick={this.handleDelete} />
      </>
    );
  }
}
export default App;
