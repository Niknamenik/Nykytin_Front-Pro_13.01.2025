export function Table_Item({ product }) {
  <tr>
    <td>{product.id}</td>
    <td>{product.category}</td>
    <td>{product.name}</td>
    <td>{product.quantity}</td>
    <td>{product.price}</td>
    <td>
      <button>Edit</button>
      <button>Delete</button>
    </td>
  </tr>;
}
