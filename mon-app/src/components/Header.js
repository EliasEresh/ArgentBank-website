import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../redux/userSlice';

function Header() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);
  const firstName = useSelector(state => state.user.firstName);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <header>
      <nav className='main-nav'>
        <Link to="/" className='main-nav-logo'>
          <img src="../assets/argentBankLogo.png" alt="Argent Bank Logo" className='main-nav-logo-image' />
        </Link>
        {isAuthenticated ? (
          <div className="main-nav-user">
            <Link to="/profile" className="main-nav-item">
              <i className="fa fa-user-circle" />
              <p> {firstName} </p>
            </Link>
            <Link to="/" onClick={handleLogout} className="main-nav-item">
              <i className="fa fa-sign-out" />
              <p> Sign Out </p>
            </Link>
          </div>
        ) : (
          <Link to="/login" className="main-nav-item">
            <i className="fa fa-user-circle" />
            <p> Sign In </p>
          </Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
