import { Route, Routes } from "react-router";
import Login from "./pages/Login";
import { Table } from "./pages/Products_Table";
import { Preview_Tabel } from "./pages/Products_preview";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/product_table" element={<Table />} />
      <Route path="/preview_table" element={<Preview_Tabel />} />
    </Routes>
  );
}

export default App;
