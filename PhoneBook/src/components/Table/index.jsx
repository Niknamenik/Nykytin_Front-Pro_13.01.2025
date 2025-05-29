import { useContext } from "react";
import UsersContext from "../../context/UsersContext";
import TableItem from "./TableItem";
import Header from "../Header";

function Table() {
  const { users } = useContext(UsersContext);
  return (
    <table>
      <Header />
      <tbody id="tbody">
        {users.map((user) => (
          <TableItem key={user.id} user={user} />
        ))}
      </tbody>
    </table>
  );
}
export default Table;
