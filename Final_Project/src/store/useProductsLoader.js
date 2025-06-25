import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setError, setLoading, setProducts } from "./slices/productsSlice";

export function useProductsLoader() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    const fetchProducts = async () => {
      const productsFromLS = JSON.parse(localStorage.getItem("products"));

      if (productsFromLS) {
        dispatch(setProducts(productsFromLS));
        dispatch(setLoading(false));
      } else {
        try {
          const response = await axios.get(
            "http://localhost:3000/Table_Products"
          );
          const data = response.data;
          localStorage.setItem("products", JSON.stringify(data));
          dispatch(setProducts(data));
        } catch (err) {
          dispatch(setError(err.message));
        } finally {
          dispatch(setLoading(false));
        }
      }
    };

    fetchProducts();
  }, [dispatch]);
}
