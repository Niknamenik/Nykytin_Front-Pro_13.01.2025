import { useEffect, useState } from "react";
import "./App.css";
import UsersContext from "./context/UsersContext";
import Table from "./pages/Table";
import Form from "./pages/Form";
import { NavLink, Route, Routes } from "react-router";
import { Home } from "./pages/Home";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users ")
      .then((response) => response.json())
      .then((json) =>
        localStorage.getItem("users")
          ? setUsers(JSON.parse(localStorage.getItem("users")))
          : localStorage.setItem("users", JSON.stringify(json))
      );
  }, []);

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      <nav className="pages_btns">
        <NavLink to="/">Table</NavLink>
        <NavLink to="/form">Form</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Table />} />
          <Route path="/user/:id?" element={<Form />} />
        </Route>
        <Route path="/form" element={<Form />} />
      </Routes>
    </UsersContext.Provider>
  );
}

export default App;
