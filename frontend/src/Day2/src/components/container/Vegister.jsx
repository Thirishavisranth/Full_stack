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

export default Register;
