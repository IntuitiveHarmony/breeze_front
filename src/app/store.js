import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import sequencesReducer from '../features/sequences/sequencesSlice'
import currentReducer from '../features/currentSequence/currentSequenceSlice'

export const store = configureStore({
  //Object containing all the different reducers
  reducer: {
    counter: counterReducer,
    sequences: sequencesReducer,
    currentSequence: currentReducer,
  },
});
