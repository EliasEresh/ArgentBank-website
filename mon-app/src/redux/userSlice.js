import { createSlice } from '@reduxjs/toolkit';
import { login, Profile, updateUser } from './action';

const initialState = {
  isAuthenticated: false,
  token: '',
  firstName: '',
  lastName: '',
  connected: false,
  status: 'void',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.isAuthenticated = false;
      state.token = '';
      state.firstName = '';
      state.lastName = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.token = action.payload.body.token;
        state.status = 'connexion';
        // Use the navigate function to redirect to the profile page
      })
      .addCase(Profile.fulfilled, (state, action) => {
        state.connected = true;
        state.status = 'connecte';
        state.firstName = action.payload.body.firstName;
        state.lastName = action.payload.body.lastName;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.firstName = action.payload.body.firstName;
        state.lastName = action.payload.body.lastName;
      });
  },
});

export const { logoutUser } = userSlice.actions;
export default userSlice.reducer;
