import React, { useState } from 'react';

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
  const [values, setUsername] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
    mobileNumber: "", // New field
  });

  const [selectedRole, setSelectedRole] = useState("");
  const [roleError, setRoleError] = useState("");
  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
    setRoleError(""); 
  };
  
  const handleLoginClick = () => {
    if (selectedRole !== "") {
      const redirectUrl = selectedRole === 'admin' ? '/ownerLogin' : '/login';
      window.location.href = redirectUrl;
    } else {
      setRoleError("Please select a role");
    }
  };

  const inputs = [
    {
      id: 1,
      name: "username",
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
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
    },
    {
      id: 4,
      name: "mobileNumber",
      type: "text",
      placeholder: "Mobile Number",
      errorMessage: "Please enter a valid mobile number",
      pattern: "^[0-9]{10}$",
      required: true,
    },
    {
      id: 5,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number, and 1 special character!",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 6,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      pattern: values.password,
      required: true,
    },
  ];

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (selectedRole === "") {
  //     setRoleError("Please select a role");
  //     return; // Prevent form submission if the role is not selected
  //   }
  //   const redirectUrl = selectedRole === 'admin' ? '/adminlog' : '/login';
  //   window.location.href = redirectUrl;
  // };
     
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (selectedRole === "") {
      setRoleError("Please select a role");
      return; // Prevent form submission if the role is not selected
    }
  
    try {
      const response = await fetch('http://localhost:8080/api/users/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: values.username,
          email: values.email,
          birthday: values.birthday,
          mobileNumber: values.mobileNumber,
          password: values.password,
          confirmPassword: values.confirmPassword,
          role: selectedRole,
        }),
      });
  
      if (response.ok) {
        const responseData = await response.json();
        // Handle successful registration
        console.log('Registration successful:', responseData);
  
        // Check if the backend response indicates successful saving
        if (responseData && responseData.id) {
          console.log('Details saved in the backend successfully!');
        } else {
          console.error('Details not saved in the backend as expected.');
        }
  
        // Update the redirection logic here
        const redirectUrl = selectedRole === 'admin' ? '/ownerLogin' : '/login';
        window.location.href = redirectUrl;
      } else {
        // Handle registration error, e.g., show an error message
        console.error('Registration failed:', response.statusText);
      }
    } catch (error) {
      // Handle any unexpected errors
      console.error('Error during registration:', error);
    }
  };
  
  
  const onChange = (e) => {
    const { name, value } = e.target;

    if (name === 'mobileNumber' && !/^[0-9]{0,10}$/.test(value)) {
      // Validate for only digits and maximum length of 10
      return;
    }
    setUsername({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);

  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
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
