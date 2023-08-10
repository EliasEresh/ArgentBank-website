import { createSlice } from '@reduxjs/toolkit';
import * as userActions from './action';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: false,
    firstName: '',
    lastName: '',
  },
  reducers: {
    loginUser: (state, action) => {
      state.isAuthenticated = true;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
    logoutUser: (state) => {
      state.isAuthenticated = false;
      state.firstName = '';
      state.lastName = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userActions.login.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.firstName = action.payload.body.firstName;
        state.lastName = action.payload.body.lastName;
      })
      .addCase(userActions.Profile.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.firstName = action.payload.body.firstName;
        state.lastName = action.payload.body.lastName;
      })
      .addCase(userActions.updateUser.fulfilled, (state, action) => {
        state.firstName = action.payload.body.firstName;
        state.lastName = action.payload.body.lastName;
      })
      // Mettre la fonction ici au lieu de l'action ?
      .addCase(userActions.logOut, (state) => {
        state.isAuthenticated = false;
        state.firstName = '';
        state.lastName = '';
      });
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
