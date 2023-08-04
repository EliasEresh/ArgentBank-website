import { configureStore } from '@reduxjs/toolkit';
import userReducer from './path/to/userReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
