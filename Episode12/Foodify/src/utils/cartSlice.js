import { createSlice } from "@reduxjs/toolkit";

const loadCartFromStorage = () => {
  try {
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : {};
  } catch {
    return {};
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: loadCartFromStorage()
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const id = item.card.info.id;

      if (state.items[id]) {
        state.items[id].quantity += 1;
      } else {
        state.items[id] = {
          ...item,
          quantity: 1
        };
      }

      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },

    removeItem: (state, action) => {
      const id = action.payload;

      if (!state.items[id]) return;

      if (state.items[id].quantity === 1) {
        delete state.items[id];
      } else {
        state.items[id].quantity -= 1;
      }

      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },

    clearCart: (state) => {
      Object.keys(state.items).forEach((key) => {
        delete state.items[key];
      });

      localStorage.removeItem("cartItems");
    }
  }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
