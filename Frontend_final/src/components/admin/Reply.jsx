// ReplyEnquiry.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import backgroundImg from '../../assets/background.jpg';

const Reply = () => {
  const { id } = useParams();
  const [adminReply, setAdminReply] = useState('');
  
  const handleChange = (e) => {
    setAdminReply(e.target.value);
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

      const response = await axios.post(`http://localhost:8080/api/enquiries/reply/${id}`, { adminReply }, { headers });

      console.log('Server response:', response.data);

      // Optionally, you can redirect the user or perform other actions after successful submission
    } catch (error) {
      console.error('Error submitting reply:', error);
      // Handle error, show a message to the user, etc.
    }
  };

  return (
    <div className="flex items-center justify-center h-screen" style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="bg-white p-4 shadow-md rounded-xl max-w-md border border-green-600">
        <h1 className="text-lg font-bold mb-4 text-green-700 text-center">Reply to Enquiry</h1>
        <form onSubmit={handleSubmit} className="bg-white p-4 shadow-md rounded-xl max-w-xs bg-Teal">
          <div className="mb-3">
            <textarea
              name="adminReply"
              value={adminReply}
              onChange={handleChange}
              placeholder="Enter your response..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <button type="submit" className="bg-green-700 text-white px-4 py-2 font-bold rounded-md mx-auto block">
            Submit Reply
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reply;
