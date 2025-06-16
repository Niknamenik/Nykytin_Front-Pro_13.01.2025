export function Table() {
  const products = [];
  return (
    <table>
      <tbody>
        <Header />
        {products.map((product) => (
          <Table_Item key={product.id} product={product} />
        ))}
      </tbody>
    </table>
  );
}
