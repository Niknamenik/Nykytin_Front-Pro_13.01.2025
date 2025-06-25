import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    user: { username: "", password: "" },
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    setUsername(state, action) {
      state.user.username = action.payload;
    },
    setPassword(state, action) {
      state.user.password = action.payload;
    },
    setProducts(state, action) {
      state.items = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setProducts, setLoading, setError, setUsername, setPassword } =
  productsSlice.actions;
export default productsSlice;
