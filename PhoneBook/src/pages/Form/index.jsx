import { useContext } from "react";
import UsersContext from "../../context/UsersContext";
import { Link, useParams } from "react-router";

function Form() {
  const { users, setUsers } = useContext(UsersContext);
  const { id } = useParams();
  const usersFromLS = JSON.parse(localStorage.getItem("users"));
  const currUser = usersFromLS
    ? [...usersFromLS].filter((user) => user.id == id)[0]
    : "";

  function onSubmit(event) {
    event.preventDefault();
    const newUser = {
      name: `${event.target.name.value} ${event.target.surname.value}`,
      phone: event.target.number.value,
      email: event.target.email.value,
      id: id ? id : +new Date(),
    };
    let updatedUsers;
    if (id) {
      const indexOfCurrUser = usersFromLS.indexOf(currUser);
      usersFromLS[indexOfCurrUser] = newUser;
      updatedUsers = usersFromLS;
    } else {
      updatedUsers = [...usersFromLS, newUser];
    }
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    event.target.reset();
    window.history.back();
  }
  return (
    <form onSubmit={onSubmit}>
      <h2>{id ? `Edit user ${currUser.name}` : "Add User"}</h2>
      <label htmlFor="name">
        Name:<br></br>
        <input
          required
          type="text"
          id="name"
          defaultValue={id ? currUser.name.split(" ")[0] : ""}
        />
      </label>
      <label htmlFor="surname">
        Surname:<br></br>
        <input
          required
          type="text"
          id="surname"
          defaultValue={id ? currUser.name.split(" ")[1] : ""}
        />
      </label>
      <label htmlFor="number">
        Phone number:<br></br>
        <input
          required
          type={id ? "text" : "number"}
          id="number"
          defaultValue={id ? currUser.phone : ""}
        />
      </label>
      <label htmlFor="email">
        E-mail:<br></br>
        <input
          required
          type="email"
          id="email"
          defaultValue={id ? currUser.email : ""}
        />
      </label>
      <div className="btns">
        <button type="submit">Save</button>
        <Link to={"/"}>Cancel</Link>
      </div>
    </form>
  );
}
export default Form;
