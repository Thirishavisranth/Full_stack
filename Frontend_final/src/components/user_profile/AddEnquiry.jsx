import React, { useState } from 'react';
import axios from 'axios';
import backgroundImg from '../../assets/background.jpg';

const AddEnquiry = () => {
  const [enquiry, setEnquiry] = useState({
    userId: '', // Add the userId field
    courseName: '',
    studentEmail: '',
    typeOfEnquiry: '',
    description: '',
    status: 'Pending',
    adminReply: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEnquiry((prevEnquiry) => ({
      ...prevEnquiry,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const authToken = localStorage.getItem('authToken');

      // Include necessary headers in the request
      const headers = {
        Authorization: `Bearer ${authToken}`,
        'Content-Type': 'application/json',
      };

      const response = await axios.post(
        'http://localhost:8080/api/enquiries/post',
        enquiry,
        { headers }
      );

      console.log('Server response:', response.data);

      // Optionally, you can reset the form fields after submission
      setEnquiry({
        userId: '',
        courseName: '',
        studentEmail: '',
        typeOfEnquiry: '',
        description: '',
        status: 'Pending',
        adminReply: '',
      });
    } catch (error) {
      console.error('Error submitting enquiry:', error);
      // Handle error, show a message to the user, etc.
    }
  };

  return (
    <section>
      <div
        className="flex items-center justify-center h-screen"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="bg-white p-4 shadow-md rounded-xl max-w-md border border-green-600">
          <h1 className="text-lg font-bold mb-4 text-green-700 text-center">
            Add Enquiry
          </h1>
          <form
            onSubmit={handleSubmit}
            className="bg-white p-4 shadow-md rounded-xl max-w-xs bg-Teal"
          >
            <div className="mb-3">
              <input
                type="text"
                name="userId"
                value={enquiry.userId}
                onChange={handleChange}
                placeholder="User ID"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="courseName"
                value={enquiry.courseName}
                onChange={handleChange}
                placeholder="Course Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="studentEmail"
                value={enquiry.studentEmail}
                onChange={handleChange}
                placeholder="Student Email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="typeOfEnquiry"
                value={enquiry.typeOfEnquiry}
                onChange={handleChange}
                placeholder="Type of Enquiry"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-3">
              <textarea
                name="description"
                value={enquiry.description}
                onChange={handleChange}
                placeholder="Description"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <button
              type="submit"
              className="bg-green-700 text-white px-4 py-2 font-bold rounded-md mx-auto block"
            >
              Add Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddEnquiry;
