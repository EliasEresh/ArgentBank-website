import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, Profile } from '../redux/action';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false); // Reset error state

    if (email.trim() === '' || password.trim() === '') {
      setError(true); // Display error message
    } else {
      // Dispatch loginUser action with email and password
      const loginData = await dispatch(login({ email, password, token: '' }));

      // Assuming loginData.success indicates successful login
      if (loginData.success) {
        const token = loginData.token; // Assuming loginData includes the token
        // Fetch user profile information
        const profileData = await dispatch(Profile(token));
        
        console.log('profileData success:', profileData.success);

        if (profileData.success) {
          navigate('/profile'); // Redirect to profile page
        } else {
          setError(true); // Handle failure to fetch profile data
        }
      } else {
        setError(true); // Handle login failure here
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
