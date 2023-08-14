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
      console.log('loginData:', loginData);
  
      // Assuming loginData.success indicates successful login
      if (loginData.payload.message === "User successfully logged in") {
        const token = loginData.payload.body.token;
        console.log('Dispatching Profile action from SignIn component');
        const profileData = await dispatch(Profile(token));
        
        console.log('profileData success:', profileData.success);
        
        console.log('profileData success:', profileData.success);
  
        if (profileData.success) {
          navigate('/profile'); // Redirect to profile page
        } else {
          setError(true); // Handle failure to fetch profile data
        }
      } else {
        console.log('Login failed');
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
