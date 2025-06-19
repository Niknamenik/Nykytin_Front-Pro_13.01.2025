import { useDispatch } from "react-redux";
import Login from "./pages/Login";
import axios from "axios";
import {
  setError,
  setLoading,
  setProducts,
} from "./store/slices/productsSlice";
import { useEffect } from "react";
import { Table } from "./pages/Products_Table";

function App() {
  const dispatch = useDispatch();
  const productsFromLS = JSON.parse(localStorage.getItem("products"));
  dispatch(setLoading(true));
  if (productsFromLS) {
    dispatch(setProducts(productsFromLS));
    dispatch(setLoading(false));
  } else {
    useEffect(() => {
      const req = async () => {
        try {
          await axios
            .get("http://localhost:3000/Table_Products")
            .then((response) => response.data)
            .then((json) => {
              localStorage.setItem("products", JSON.stringify(json));
              dispatch(setProducts(json));
            });
          dispatch(setLoading(false));
        } catch (err) {
          console.log(err);
          dispatch(setError(err.message));
          dispatch(setLoading(false));
        }
      };
      req();
    }, []);
  }
  return (
    <>
      {/* <Login /> */}
      <Table />
    </>
  );
}

export default App;
