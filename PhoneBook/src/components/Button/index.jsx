import { useContext } from "react";
import UsersContext from "../../context/UsersContext";

function Button({ title, onClick }) {
  return <button onClick={onClick}>{title}</button>;
}
export default Button;
