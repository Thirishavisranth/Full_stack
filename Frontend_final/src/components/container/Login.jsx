
import React, { useState } from 'react';
import axios from 'axios';
import backgroundImg from '../../assets/back.png';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const [loginStatus, setLoginStatus] = useState(null);
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  // Define loginSuccess function
  const loginSuccess = () => {
    // Logic to handle successful login
    console.log('Login successful!');
    window.location.href = "/profile/pro";
    // You can add your logic or redirect the user to another page here
  };
  const loginFailure = () => {
    // Logic to handle failed login
    console.error('Authentication failed');
    setShowErrorPopup(true);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/auth/authenticate', credentials);
      
      const authToken = response.data;
      localStorage.setItem('authToken', authToken);
  
      // Call loginSuccess function upon successful authentication
      loginSuccess();
    } catch (error) {
      loginFailure();
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    setErrors({ username: "", password: "" });
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center" style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <form onSubmit={handleSubmit} className="bg-white p-4 shadow-md rounded-md max-w-xs w-full border border-gray-300">
        <h1 className="text-lg font-bold mb-4 text-green-700 text-center">Login</h1>
        <div className="mb-4">
          <label htmlFor="username" className="text-sm text-gray-600">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your username"
            value={credentials.username}
            onChange={onChange}
            className={`w-full p-2 border rounded-md focus:border-green-700 focus:bg-gray-100 ${errors.username && 'border-red-500'}`}
            required
          />
          {errors.username && <p className="text-xs text-red-500">{errors.username}</p>}
        </div>
        
        <div className="mb-4">
          <label htmlFor="password" className="text-sm text-gray-600">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={credentials.password}
            onChange={onChange}
            className={`w-full p-2 border rounded-md focus:border-green-700 focus:bg-gray-100 ${errors.password && 'border-red-500'}`}
            required
          />
          {errors.password && <p className="text-xs text-red-500">{errors.password}</p>}
        </div>
        <div className='text-center'>
        <button type="submit" className="bg-green-700 text-white px-4 py-2 font-bold rounded-md mx-auto">
          LOGIN
        </button>
        </div>
      </form>

      {showErrorPopup && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-md border border-red-500">
            <p className="text-red-500 text-center">Authentication failed. Please check your credentials.</p>
            <button className="text-green-500 font-bold mt-2" onClick={() => setShowErrorPopup(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;