import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart = [action.payload, ...state.cart];
      const storage = localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    deleteToCart: (state, action) => {
      const pid = action.payload;
      // Filter out the item matching the provided id
      state.cart = state.cart.filter((item) => item.id !== pid);
      const storage = localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    changeQty: (state, action) => {
      const { pId, type } = action.payload;
      state.cart = state.cart
        .map((item) => {
          if (item.id === pId) {
            const newQty = type === "+" ? item.qty + 1 : item.qty - 1;
            return { ...item, qty: newQty };
          }
          return item;
        })
        .filter((item) => item.qty > 0);

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export const { addToCart, deleteToCart, changeQty } = CartSlice.actions;
export default CartSlice.reducer;
