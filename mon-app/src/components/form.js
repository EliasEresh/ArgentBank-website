import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, Profile } from '../redux/action';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email.trim() === '' || password.trim() === '') {
      setError(true);
    } else {
      // Dispatch loginUser action avec email et password
      const loginData = await dispatch(login({ email, password, token: '' }));
      
      // Quand login réussit, fetch user profile information
      if (loginData.payload && loginData.payload.token) {
        const token = loginData.payload.token;
        dispatch(Profile(token));
      }
    }
  };

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle "></i>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        {error && <div className="input-error">Email or password invalid</div>}
        <input type="submit" value="Sign In" className="sign-in-button" />
      </form>
    </section>
  );
}

export default SignIn;
