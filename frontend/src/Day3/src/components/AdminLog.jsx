// Login.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const AdminLog = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasErrors = false;

    if (!credentials.email) {
      setErrors((prevErrors) => ({ ...prevErrors, email: "Email is required." }));
      hasErrors = true;
    } else if (!isValidEmail(credentials.email)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: "Invalid email format." }));
      hasErrors = true;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    }

    if (!credentials.password) {
      setErrors((prevErrors) => ({ ...prevErrors, password: "Password is required." }));
      hasErrors = true;
    } else if (!isValidPassword(credentials.password)) {
      setErrors((prevErrors) => ({ ...prevErrors, password: "Invalid password format." }));
      hasErrors = true;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
    }
    if (hasErrors) {
      return;
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    setErrors({ email: "", password: "" });
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPassword = (password) => {
    return password.length >= 8;
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-4 shadow-md rounded-md max-w-xs w-full border border-gray-300">
        <h1 className="text-lg font-bold mb-4 text-green-700">Login</h1>
        <div className="mb-4">
          <label htmlFor="email" className="text-sm text-gray-600">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={credentials.email}
            onChange={onChange}
            className={`w-full p-2 border rounded-md focus:border-green-700 focus:bg-gray-100 ${errors.email && 'border-red-500'}`}
            required
          />
          {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
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
        <Link to="/" className="block mx-auto">
          <button type="submit" className="bg-green-700 text-white px-4 py-2 font-bold rounded-md mx-auto">
              LOGIN
          </button>
        </Link>
      </form>
    </div>
  );
};

export default AdminLog;
