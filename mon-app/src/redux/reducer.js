import { createSlice } from '@reduxjs/toolkit';
import { login, Profile, updateUserProfile, logoutUser } from './action';
import { loginUser } from './userSlice'; // Vérifier que loginUser est bien dans UserSlice.js

const initialState = {
  connected: false,
  token: '',
  status: 'void',
  user: {
    firstName: '',
    lastName: '',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload.body.token;
        state.status = 'connexion';

        // Dispatch loginUser action pour réussir l'authentication
        loginUser(state, action);
      })
      .addCase(Profile.fulfilled, (state, action) => {
        state.connected = true;
        state.status = 'connecte';
        state.user.firstName = action.payload.body.firstName;
        state.user.lastName = action.payload.body.lastName;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.user.firstName = action.payload.body.firstName;
        state.user.lastName = action.payload.body.lastName;
      })
      .addCase(logoutUser, (state) => {
        state.connected = false;
        state.token = '';
        state.status = 'void';
        state.user.firstName = '';
        state.user.lastName = '';
      });
  },
});

export default userSlice.reducer;
