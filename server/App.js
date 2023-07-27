import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Home from './pages/home';
import Login from './pages/login'; 
import Profile from './pages/user';
import '../css/main.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<Profile />} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;