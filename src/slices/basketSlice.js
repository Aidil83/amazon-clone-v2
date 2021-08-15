import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, { payload }) => {
      state.items.push(payload);
    },
    removeFromBasket: (state, { payload }) => {
      const index = state.items.findIndex((i) => i.id === payload);
      if (index >= 0) {
        state.items.splice(index, 1);
      }
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;

export default basketSlice.reducer;
