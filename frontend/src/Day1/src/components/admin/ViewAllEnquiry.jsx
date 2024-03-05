// ViewEnquiry.jsx
import React, { useState } from 'react';
import { FaReply, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ViewAllEnquiry = () => {
  // Sample data for demonstration
  const enquiries = [
    {
      slug: 'enquiry-1',
      studentId: '1',
      studentEmail: 'example1@example.com',
      enquiryType: 'General Inquiry',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      status: 'Pending',
    },
    {
      slug: 'enquiry-2',
      studentId: '2',
      studentEmail: 'example2@example.com',
      enquiryType: 'Technical Support',
      description: 'Nulla facilisi. Ut ac turpis sed ipsum interdum fermentum.',
      status: 'Pending',
    },
    // Add more sample data as needed
  ];

  const handleReply = (slug) => {
    // Implement your reply logic here
    console.log(`Replying to enquiry with slug ${slug}`);
  };

  const handleDelete = (slug) => {
    // Implement your delete logic here
    console.log(`Deleting enquiry with slug ${slug}`);
    setEnquiriesList((prevEnquiries) => prevEnquiries.filter((enquiry) => enquiry.slug !== slug));
  };

  return (
    <div className="" style={{ marginLeft: '3in' }}>
      <h1 className="text-lg font-bold mb-4 text-green-800 text-center">View Enquiries</h1>
      <table className="mt-20 m-10">
        <thead className="border-green-600">
          <tr className="bg-Teal text-white">
            <th className="border px-2 py-2">Slug</th>
            <th className="border px-2 py-2">Student ID</th>
            <th className="border px-2 py-2">Student Email</th>
            <th className="border px-2 py-2">Enquiry Type</th>
            <th className="border px-2 py-2">Description</th>
            <th className="border px-2 py-2">Status</th>
            <th className="border px-2 py-2">Reply</th>
            <th className="border px-2 py-2">Delete</th>
          </tr>
        </thead>
        <tbody>
          {enquiries.map((enquiry) => (
            <tr key={enquiry.slug}>
              <td className="border px-2 py-2">{enquiry.slug}</td>
              <td className="border px-2 py-2">{enquiry.studentId}</td>
              <td className="border px-2 py-2">{enquiry.studentEmail}</td>
              <td className="border px-2 py-2">{enquiry.enquiryType}</td>
              <td className="border px-2 py-2">{enquiry.description}</td>
              <td className="border px-2 py-2">{enquiry.status}</td>
              <td className="border px-2 py-2">
                {enquiry.status === 'Pending' && (
                  <span>
                    <Link to={`/admin/reply/${enquiry.slug}`}>
                      <button onClick={() => handleReply(enquiry.slug)}><FaReply /></button>
                    </Link>
                  </span>
                )}
              </td>
              <td className="border px-2 py-2">
                <button onClick={() => handleDelete(enquiry.slug)}><FaTrash /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewAllEnquiry;
