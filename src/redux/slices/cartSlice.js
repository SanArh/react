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
      state.totalPrice = state.items.reduce((summ, item) => summ + item.price * item.count, 0);
    },
    removeItems: (state, action) => {
      let isDelete = window.confirm('Ты действительно желаешь удалить товар?');
      if (isDelete) {
        state.items = state.items.filter((obj) => obj.id !== action.payload);
        state.totalPrice = state.items.reduce((summ, item) => summ + item.price * item.count, 0);
      }
    },
    minusItem: (state, action) => {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      findItem.count--;
      state.totalPrice = state.items.reduce((summ, item) => summ + item.price * item.count, 0);
    },
    plusItem: (state, action) => {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      findItem.count++;
      state.totalPrice = state.items.reduce((summ, item) => summ + item.price * item.count, 0);
    },
    clearCart: (state) => {
      let isDelete = window.confirm('Очистить корзину?');
      if (isDelete) {
        state.items = [];
        state.totalPrice = 0;
      }
    },
  },
});

export const { addPizza, addTotalPrice, clearCart, removeItems, minusItem, plusItem } =
  cartSlice.actions;
export default cartSlice.reducer;
