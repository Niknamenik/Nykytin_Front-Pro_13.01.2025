import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  async function getUsers() {
    const users = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(users);
  }
  getUsers();
  return <></>;
}

export default App;
