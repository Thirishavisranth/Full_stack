// ViewAllEnquiry.jsx
import React, { useState, useEffect } from 'react';
import {FaTrash,FaReply } from 'react-icons/fa';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ViewAllEnquiry = () => {
  const [enquiriesList, setEnquiriesList] = useState([]);
  const authToken = localStorage.getItem('authToken');
  const [successMessage, setSuccessMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const fetchEnquiries = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/enquiries/all', {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      setEnquiriesList(response.data);
    } catch (error) {
      console.error('Error fetching enquiries:', error.message);
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
      setEnquiriesList((prevEnquiries) => prevEnquiries.filter((enquiry) => enquiry.id !== enquiryId));
      setShowModal(true);
    } catch (error) {
      console.error('Error deleting enquiry:', error.message);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div style={{ marginLeft: '3in' }}>
      <h1 className="text-lg font-bold mb-4 text-green-800 text-center">View Enquiries</h1>
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
            <th className="border px-2 py-2">Reply</th>
            <th className="border px-2 py-2">Delete</th>
          </tr>
        </thead>
        <tbody>
          {enquiriesList.map((enquiry) => (
            <tr key={enquiry.id}>
              <td className="border px-2 py-2">{enquiry.id}</td>
              <td className="border px-2 py-2">{enquiry.courseName}</td>
              <td className="border px-2 py-2">{enquiry.studentEmail}</td>
              <td className="border px-2 py-2">{enquiry.typeOfEnquiry}</td>
              <td className="border px-2 py-2">{enquiry.description}</td>
              <td className="border px-2 py-2">{enquiry.status === null ? 'No Response' : enquiry.status}</td>
              <td className="border px-2 py-2">{enquiry.adminReply === null ? 'No Response' : enquiry.adminReply}</td>
              <td className="border px-2 py-2">
                {/* Link to the admin/reply page with the specific enquiry ID */}
                <Link to={`/admin/reply/${enquiry.id}`}>
                  <button><FaReply /></button>
                </Link>
              </td>
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

export default ViewAllEnquiry;
