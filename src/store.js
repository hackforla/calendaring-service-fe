import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './counterSlice';

export default configureStore({
  reducer: {
    data: dataReducer,
  },
});
