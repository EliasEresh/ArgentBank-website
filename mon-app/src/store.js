import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './redux/userSlice';

const userPersistConfig = {
  key: 'user', // Key to use for the persisted state
  storage, // Use the imported storage
  whitelist: ['isAuthenticated', 'token', 'firstName', 'lastName', 'connected', 'status'],
 // List of state keys to persist
};

const persistedUserReducer = persistReducer(userPersistConfig, userReducer);

const store = configureStore({
  reducer: {
    user: persistedUserReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

const persistor = persistStore(store); // Create the persistor

export { store, persistor }; // Export both store and persistor
