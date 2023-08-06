import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: false,
    firstName: '',
  },
  reducers: {
    loginUser: (state, action) => {
      state.isAuthenticated = true;
      state.firstName = action.payload.firstName;
    },
    logoutUser: (state) => {
      state.isAuthenticated = false;
      state.firstName = '';
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
