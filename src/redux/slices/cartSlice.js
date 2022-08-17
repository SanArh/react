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
      state.items.push(action.payload);
    },
    addTotalPrice: (state, action) => {
      state.totalPrice = state.totalPrice + action.payload;
    },
  },
});

export const { addPizza, addTotalPrice } = cartSlice.actions;
export default cartSlice.reducer;
