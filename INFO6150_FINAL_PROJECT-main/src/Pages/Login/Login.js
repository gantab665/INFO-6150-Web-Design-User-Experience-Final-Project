import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Auth-Context/Auth-Context';

const Login = () => {
  const { onLogin } = useAuth()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate();

  const handleLogin = () => {
    fetch('http://localhost:4000/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          console.log(data, '***')
          // Token received, pass it to the parent component
          onLogin(data);
          setSuccessMessage('Login successful');
          setErrorMessage('');
          navigate('/my-trips'); // Navigate to My Trips page
        } else {
          setErrorMessage(data.errors.map((error) => error.msg).join(', '));
          setSuccessMessage('');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setErrorMessage('An error occurred. Please try again.');
      });
  };

  return (
    <div className="container login-container">
      <div className="row mt-5">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <h2 className="mb-4">Login</h2>
          <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="button" className="btn btn-primary" onClick={handleLogin}>
            Login
          </button>
          {errorMessage && (
            <div className="mt-3 alert alert-danger">{errorMessage}</div>
          )}
          {successMessage && (
            <div className="mt-3 alert alert-success">{successMessage}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
