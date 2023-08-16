import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import { store } from './store'; // Import store using named import
import Home from './pages/home';
import Login from './pages/login'; 
import Profile from './pages/user';
import '../src/assets/main.css';

const PrivateRoute = ({ element }) => {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);

  if (!isAuthenticated) {
    // If not authenticated, prevent rendering and navigate to login
    return <Navigate to="/login" />;
  }

  // If authenticated, render the requested element
  return element;
};

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
          <Route path='/*' element={<Login />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;