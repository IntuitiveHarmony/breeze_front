import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import sequencesReducer from '../features/sequences/sequencesSlice'

export const store = configureStore({
  //Object containing all the different reducers
  reducer: {
    counter: counterReducer,
    sequences: sequencesReducer,
  },
});
