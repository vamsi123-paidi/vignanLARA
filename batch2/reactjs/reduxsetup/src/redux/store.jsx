import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import postSlice from './slices/postSlice'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts:postSlice
  }
});

export default store;
