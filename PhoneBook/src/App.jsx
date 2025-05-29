import { useEffect, useState } from "react";
import "./App.css";
import UsersContext from "./context/UsersContext";
import Table from "./components/Table";
import Form from "./components/Form";
import Button from "./components/Button";

function App() {
  const [users, setUsers] = useState([]);
  const [classes, setClasses] = useState({});
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users ")
      .then((response) => response.json())
      .then((json) =>
        localStorage.getItem("users")
          ? setUsers(JSON.parse(localStorage.getItem("users")))
          : localStorage.setItem("users", JSON.stringify(json))
      );
    setClasses({
      sliderClassForTable: "table",
      sliderClassForForm: "form",
    });
  }, []);
  function showForm() {
    setClasses({
      sliderClassForForm: "form",
    });
  }
  function showTable() {
    setClasses({
      sliderClassForTable: "table",
    });
  }

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      <div className="slide_btns">
        <Button onClick={showTable} title={"Table"}></Button>
        <Button onClick={showForm} title={"Add User"}></Button>
      </div>
      <div
        className={`slider ${
          classes.sliderClassForTable
            ? classes.sliderClassForTable
            : classes.sliderClassForForm
        }`}
      >
        <Table />
        <Form onClick={showTable} />
      </div>
    </UsersContext.Provider>
  );
}

export default App;
