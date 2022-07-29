import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getPizzas = createAsyncThunk('pizzas/fetchStatus', async () => {
  const response = await axios.get('https://62e395043c89b95396cb6c94.mockapi.io/items');
  console.log(response.data);
  return response.data;
});

const initialState = {
  items: [],
};
console.log(initialState);
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
