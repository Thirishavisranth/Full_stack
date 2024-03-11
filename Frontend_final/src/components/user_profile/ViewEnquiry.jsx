// ViewEnquiry.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {FaTrash} from 'react-icons/fa';


const ViewEnquiry = () => {
  const [userEnquiries, setUserEnquiries] = useState([]);
  const authToken = localStorage.getItem('authToken');
  const [successMessage, setSuccessMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const fetchUserEnquiries = async () => {
    try {
      // Replace 'userId' with the actual user ID you want to fetch enquiries for
      const userId = 17; // Replace with the actual user ID
      const response = await axios.get(`http://localhost:8080/api/enquiries/user/${userId}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      setUserEnquiries(response.data);
    } catch (error) {
      console.error('Error fetching user enquiries:', error.message);
    }
  };

  const handleDelete = async (enquiryId) => {
    try {
      const response = await axios.delete(`http://localhost:8080/api/enquiries/${enquiryId}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      setSuccessMessage('Enquiry successfully deleted!');
      // Update the state to reflect the updated list of enquiries
      setUserEnquiries((prevEnquiries) => prevEnquiries.filter((enquiry) => enquiry.id !== enquiryId));
      setShowModal(true);
    } catch (error) {
      console.error('Error deleting enquiry:', error.message);
    }
  };

  useEffect(() => {
    fetchUserEnquiries();
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div style={{ marginLeft: '3in' }}>
      <h1 className="text-lg font-bold mb-4 text-green-800 text-center">Your Enquiries</h1>
      {showModal && (
        <div className="modal text-center">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <p>{successMessage}</p>
          </div>
        </div>
      )}
      <table className="mt-20 m-10">
        <thead className="border-green-600">
          <tr className="bg-Teal text-white">
            <th className="border px-2 py-2">id</th>
            <th className="border px-2 py-2">Course Name</th>
            <th className="border px-2 py-2">Student Email</th>
            <th className="border px-2 py-2">Type of Enquiry</th>
            <th className="border px-2 py-2">Description</th>
            <th className="border px-2 py-2">Status</th>
            <th className="border px-2 py-2">Response</th>
            <th className="border px-2 py-2">Delete</th>
          </tr>
        </thead>
        <tbody>
          {userEnquiries.map((enquiry) => (
            <tr key={enquiry.id}>
              <td className="border px-2 py-2">{enquiry.id}</td>
              <td className="border px-2 py-2">{enquiry.courseName}</td>
              <td className="border px-2 py-2">{enquiry.studentEmail}</td>
              <td className="border px-2 py-2">{enquiry.typeOfEnquiry}</td>
              <td className="border px-2 py-2">{enquiry.description}</td>
              <td className="border px-2 py-2">{enquiry.status === null ? 'No Response' : enquiry.status}</td>
              <td className="border px-2 py-2">{enquiry.adminReply === null ? 'No Response' : enquiry.adminReply}</td>
              <td className="border px-2 py-2">
                <button onClick={() => handleDelete(enquiry.id)}><FaTrash /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewEnquiry;
