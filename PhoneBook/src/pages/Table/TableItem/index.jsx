import { Link } from "react-router";
import Button from "./Button";

function TableItem({ user }) {
  return (
    <tr id={user.id} className="item">
      <td>{user.name.split(" ")[0]}</td>
      <td>{user.name.split(" ")[1]}</td>
      <td>{user.phone}</td>
      <td>
        <Button id={user.id} user={user} title={"Delete"}></Button>
        <Link to={`/user/${user.id}`}>Edit</Link>
      </td>
    </tr>
  );
}
export default TableItem;
