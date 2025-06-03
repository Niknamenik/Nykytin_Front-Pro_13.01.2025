import { useContext } from "react";
import UsersContext from "../../../../context/UsersContext";

function Button({ id, title }) {
  const { users, setUsers } = useContext(UsersContext);
  function deleteItem() {
    if (confirm(`Confirm deleting user from PhoneBook`)) {
      const usersFromLS = JSON.parse(localStorage.getItem("users"));
      const newUsers = usersFromLS.filter((user) => user.id !== id);
      const currentUser = usersFromLS.filter((user) => user.id === id)[0];
      setUsers(newUsers);
      localStorage.setItem("users", JSON.stringify(newUsers));
      alert(`User with name: ${currentUser.name} got deleted`);
    } else {
      alert(`Deleting declined`);
    }
  }
  return <button onClick={deleteItem}>{title}</button>;
}
export default Button;
