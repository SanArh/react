import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  items: [],
};

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addPizza: (state, action) => {
      let findItem = state.items.find((item) => item.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
    },
    addTotalPrice: (state, action) => {
      state.totalPrice = state.totalPrice + action.payload;
    },
    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addPizza, addTotalPrice, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
