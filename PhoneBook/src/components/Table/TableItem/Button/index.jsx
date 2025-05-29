import { useContext } from "react";
import UsersContext from "../../../../context/UsersContext";

function Button({ id, title }) {
  const { users, setUsers } = useContext(UsersContext);
  function deleteItem() {
    const usersFromLS = JSON.parse(localStorage.getItem("users"));
    const newUsers = usersFromLS.filter((user) => user.id !== id);
    setUsers(newUsers);
    localStorage.setItem("users", JSON.stringify(newUsers));
  }
  return <button onClick={deleteItem}>{title}</button>;
}
export default Button;
