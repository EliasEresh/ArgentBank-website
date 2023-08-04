import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../redux/action';

function Header() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);
  const firstName = useSelector(state => state.user.firstName);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <header>
      <nav>
        <Link to="/">
          <img src="../assets/argentBankLogo.png" alt="Argent Bank Logo" />
        </Link>
        {isAuthenticated ? (
          <div className="connected">
            <Link to="/profile">
              <i className="fa fa-user-circle" />
              <p> {firstName} </p>
            </Link>
            <Link to="/" onClick={handleLogout}>
              <i className="fa fa-sign-out" />
              <p> Sign Out </p>
            </Link>
          </div>
        ) : (
          <Link to="/login" className="notConnected">
            <i className="fa fa-user-circle" />
            <p> Sign In </p>
          </Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
