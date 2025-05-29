import { useContext } from "react";
import UsersContext from "../../context/UsersContext";

function Form({ onClick }) {
  const { users, setUsers } = useContext(UsersContext);
  function onSubmit(event) {
    event.preventDefault();
    const newUser = {
      name: `${event.target.name.value} ${event.target.surname.value}`,
      phone: event.target.number.value,
      email: event.target.email.value,
      id: +new Date(),
    };
    const usersFromLs = JSON.parse(localStorage.getItem("users"));
    const updatedUsers = [...usersFromLs, newUser];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    event.target.reset();
  }
  return (
    <form onSubmit={onSubmit}>
      <h2>Add a user</h2>
      <label htmlFor="name">
        Name:<br></br>
        <input required type="text" id="name" />
      </label>
      <label htmlFor="surname">
        Surname:<br></br>
        <input required type="text" id="surname" />
      </label>
      <label htmlFor="number">
        Phone number:<br></br>
        <input required type="number" id="number" />
      </label>
      <label htmlFor="email">
        E-mail:<br></br>
        <input required type="email" id="email" />
      </label>
      <div className="btns">
        <button type="submit" onClick={onClick}>
          Save
        </button>
        <button type="button" onClick={onClick}>
          Cancel
        </button>
      </div>
    </form>
  );
}
export default Form;
