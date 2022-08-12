import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getPizzas = createAsyncThunk('pizzas/fetchStatus', async (params) => {
  const { categoryId, sortValue } = params;
  const response = await axios.get(
    `https://62e395043c89b95396cb6c94.mockapi.io/items?${
      categoryId > 0 ? `category=${categoryId}` : ''
    }&sortBy=${sortValue}`,
  );
  return response.data;
});

const initialState = {
  items: [],
};
export const pizzaSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    addPizzas: (state, action) => {
      state.pizzas = action.payload;
    },
  },
  extraReducers: {
    [getPizzas.fulfilled]: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { addPizzas } = pizzaSlice.actions;

export default pizzaSlice.reducer;
