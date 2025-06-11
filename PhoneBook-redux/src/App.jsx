import { useEffect } from "react";
import "./App.css";
import Table from "./pages/Table";
import Form from "./pages/Form";
import { NavLink, Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { useDispatch } from "react-redux";
import { setUsers } from "./store/slices/usersSlice";

function App() {
  const dispatch = useDispatch();
  const usersFromLS = JSON.parse(localStorage.getItem("users"));
  if (usersFromLS) {
    dispatch(setUsers(usersFromLS));
  } else {
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users ")
        .then((response) => response.json())
        .then((json) => {
          localStorage.setItem("users", JSON.stringify(json));
          dispatch(setUsers(json));
        });
    }, []);
  }

  return (
    <>
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
    </>
  );
}

export default App;
