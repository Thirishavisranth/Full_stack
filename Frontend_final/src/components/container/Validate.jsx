import React, { useState,useEffect } from 'react';
import axios from 'axios';
import backgroundImg from '../../assets/back.png';

const Register = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, showError, ...inputProps } = props;

  const handleFocus = () => {
    setFocused(true);
  };
  
  return (
    <div className='flex flex-col mb-4'>
      <label className="text-gray-600 mb-1">{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() => inputProps.name === 'confirmPassword' && setFocused(true)}
        className={`border ${showError ? 'border-red-500' : 'border-gray-300'} p-2 rounded ${focused ? 'border-green-700 focus:ring-2 focus:ring-green-200' : ''}`}
      />
      {showError && <span className="text-red-500">{errorMessage}</span>}
    </div>
  );
};


const Validate = () => {

  useEffect(() => {
    // Apply the style to the body element to prevent scrolling
    document.body.style.overflow = 'hidden';

    // Cleanup the style when the component is unmounted
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [selectedRole, setSelectedRole] = useState('');
  const [roleError, setRoleError] = useState('');

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
    setRoleError('');
  };

  const handleLoginClick = () => {
    if (selectedRole !== '') {
      const redirectUrl = selectedRole === 'admin' ? '/ownerLogin' : '/login';
      window.location.href = redirectUrl;
    } else {
      setRoleError('Please select a role');
    }
  };

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Username",
      errorMessage: "Username should be 3-16 characters and shouldn't include any special character!",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number, and 1 special character!",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      pattern: values.password,
      required: true,
    },
  ];


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedRole === '') {
      setRoleError('Please select a role');
      return;
    }

    try {
      // Use Axios instead of fetch
      const response = await axios.post('http://localhost:8080/auth/new', {
        name: values.name,
        email: values.email,
        password: values.password,
        roles: selectedRole.toUpperCase(),
      });

      if (response.status === 200) {
        // Check if the response is valid JSON
        try {
          const responseData = response.data;
          console.log('Registration successful:', responseData);

          // Redirect logic here
          const redirectUrl = selectedRole === 'admin' ? '/ownerLogin' : '/login';
          window.location.href = redirectUrl;
        } catch (jsonError) {
          console.error('Error parsing JSON:', jsonError);
        }
      } else {
        // Handle non-JSON response (e.g., error message)
        try {
          const textResponse = response.data;
          console.log('Non-JSON response:', textResponse);

          // You may want to display an error message or handle it based on your backend response
        } catch (textError) {
          console.error('Error reading non-JSON response:', textError);
        }
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };
  
  
  

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  console.log(values);

  return (
   
    <div className="bg-white min-h-screen flex items-center justify-center" style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <form onSubmit={handleSubmit} className="bg-white p-4 shadow-md rounded-xl max-w-xs border border-green-600">
        <h1 className="text-lg font-bold mb-4 text-green-700 text-center">Register</h1>

        <div className="mb-3 pl-12">
          <div className="flex items-center">
            <input
              type="radio"
              id="userRole"
              name="role"
              value="user"
              checked={selectedRole === 'user'}
              onChange={handleRoleChange}
              className="mr-2"
            />
            <label htmlFor="userRole" className="mr-4">User</label>

            <input
              type="radio"
              id="adminRole"
              name="role"
              value="admin"
              checked={selectedRole === 'admin'}
              onChange={handleRoleChange}
              className="mr-2"
            />
            <label htmlFor="adminRole">Admin</label>
          </div>
          {roleError && <span className="text-red-500">{roleError}</span>}
        </div>

        {inputs.map((input) => (
          <Register
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
            showError={
              (values[input.name] && !RegExp(input.pattern).test(values[input.name])) ||
              (input.required && input.name === 'confirmPassword' && values.password !== values.confirmPassword)
            }
          />
        ))}

        <button type="submit" className="bg-green-700 text-white px-4 py-2 font-bold rounded-md mx-auto block">
          SUBMIT
        </button>

        <p className="text-center mt-4">
          Already have an account?{' '}
            <span className="text-green-700 underline" onClick={() => handleLoginClick()}>
            Login here
            </span>
        </p>
      </form>
    </div>
   
  );
};

export default Validate;
