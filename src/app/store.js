import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  //Object containing all the different reducers
  reducer: {
    counter: counterReducer,
  },
});
