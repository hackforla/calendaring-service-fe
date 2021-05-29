import { createSlice } from '@reduxjs/toolkit';

export const formSlice = createSlice({
  name: 'counter',
  counter: 0,
  initialState: {
    value: 0,
    formData: {
      name: '',
      meeting: false,
    },
  },
  reducers: {
    increment: (state) => {
      console.log(state);
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      console.log(action);
      state.value += action.payload;
    },
    setName: (state, action) => {
      console.log(action.payload);
      state.formData.name = action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, setName } =
  formSlice.actions;

export default formSlice.reducer;
