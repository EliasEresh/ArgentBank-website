// connexion
// profil
// update
// logout

import { createAsyncThunk } from '@reduxjs/toolkit';
import { logoutUser } from './userSlice';

export const login = createAsyncThunk('user/login', async (credentials) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Mettre le format du Bearer token dans Authorization header
          'Authorization': `Bearer ${credentials.token}`, // vérifier si le token fournit est dans les credentials
        },
        body: JSON.stringify(credentials),
      });
  
      if (!response.ok) {
        const errorResponse = await response.text();
        throw new Error(`Login failed with status ${response.status}: ${errorResponse}`);
      }
  
      const data = await response.json();
      console.log ('data', data)
      return data;
    } catch (error) {
      throw error;
    }
  });
  
  

export const Profile = createAsyncThunk('user/Profile', async (token) => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Error fetching user profile');
    }

    const data = await response.json();
    console.log ('data profile', data)
    return data;
  } catch (error) {
    throw error;
  }
});

export const updateUser = createAsyncThunk('user/updateUser', async ({ token, firstName, lastName, userName }) => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ firstName, lastName, userName }),
    });

    if (!response.ok) {
      throw new Error('Error updating user profile');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
});

export const logOut = () => {
  return (dispatch) => {
    dispatch(logoutUser()); // Dispatch your logout action
    window.location = "/"; // Redirect to the desired URL
  };
};