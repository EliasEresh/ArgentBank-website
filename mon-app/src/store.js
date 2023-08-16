import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './redux/userSlice';

const userPersistConfig = {
  key: 'user',
  storage,
  whitelist: ['isAuthenticated', 'token', 'firstName', 'lastName', 'connected', 'status'],
};

const persistedUserReducer = persistReducer(userPersistConfig, userReducer);

const store = configureStore({
  reducer: {
    user: persistedUserReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check
    }).concat(thunk),
});

const persistor = persistStore(store);

export { store, persistor };
