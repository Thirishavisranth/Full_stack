// AddEnquiry.jsx
import React, { useState } from 'react';

const AddEnquiry = () => {
  const [enquiry, setEnquiry] = useState({
    email: "",
    type: "",
    enquiry: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEnquiry(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission logic here
    console.log("Submitted enquiry:", enquiry);
    // Optionally, you can reset the form fields after submission
    setEnquiry({
      email: "",
      type: "",
      enquiry: ""
    });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-4 shadow-md rounded-xl max-w-md border border-green-600">
      <h1 className="text-lg font-bold mb-4 text-green-700 text-center">Add Enquiry</h1>
      <form onSubmit={handleSubmit} className="bg-white p-4 shadow-md rounded-xl max-w-xs bg-Teal">
        <div className="mb-3">
          <input
            type="email"
            name="email"
            value={enquiry.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="type"
            value={enquiry.type}
            onChange={handleChange}
            placeholder="Type of Enquiry"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-3">
          <textarea
            name="enquiry"
            value={enquiry.enquiry}
            onChange={handleChange}
            placeholder="Enquiry"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <button type="submit" className="bg-green-700 text-white px-4 py-2 font-bold rounded-md mx-auto block">
          Submit Enquiry
        </button>
      </form>
    </div>
  </div>
  );
};

export default AddEnquiry;
