import TableItem from "./TableItem";
import Header from "../Form/Header";
import { useSelector } from "react-redux";

function Table() {
  const users = useSelector((state) => state.users);
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
