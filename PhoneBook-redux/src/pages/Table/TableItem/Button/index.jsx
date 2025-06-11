import { useDispatch } from "react-redux";
import { setUsers } from "../../../../store/slices/usersSlice";

function Button({ id, title }) {
  const dispatch = useDispatch();
  function deleteItem() {
    if (confirm(`Confirm deleting user from PhoneBook`)) {
      const usersFromLS = JSON.parse(localStorage.getItem("users"));
      const newUsers = usersFromLS.filter((user) => user.id !== id);
      const currentUser = usersFromLS.filter((user) => user.id === id)[0];
      localStorage.setItem("users", JSON.stringify(newUsers));
      dispatch(setUsers(newUsers));
      alert(`User with name: ${currentUser.name} got deleted`);
    } else {
      alert(`Deleting declined`);
    }
  }
  return <button onClick={deleteItem}>{title}</button>;
}
export default Button;
