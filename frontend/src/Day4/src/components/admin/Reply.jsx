import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Sample data for demonstration
const enquiries = [
  {
    id: 1,
    slug: 'enquiry-1',
    studentId: 'S123',
    studentEmail: 'student1@example.com',
    enquiryType: 'General Inquiry',
    description: 'I have some questions about the course.',
    status: 'Pending',
  },
  {
    id: 2,
    slug: 'enquiry-2',
    studentId: 'S456',
    studentEmail: 'student2@example.com',
    enquiryType: 'Admission Inquiry',
    description: 'I want to know about the admission process.',
    status: 'Pending',
  },
  // Add more sample enquiries as needed
];

const Reply = () => {
  const { slug } = useParams();
  const [enquiry, setEnquiry] = useState({
    studentId: '',
    studentEmail: '',
    enquiryType: '',
    description: '',
    status: '',
  });

  useEffect(() => {
    // Simulate fetching enquiry details based on the slug
    const existingEnquiry = enquiries.find((e) => e.slug === slug);

    if (existingEnquiry) {
      setEnquiry(existingEnquiry);
    } else {
      console.error(`Enquiry not found for slug: ${slug}`);
    }
  }, [slug]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEnquiry((prevEnquiry) => ({
      ...prevEnquiry,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission logic here
    console.log('Replied to enquiry:', enquiry);
    // You can add logic to save the reply or perform other actions
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-4 shadow-md rounded-xl max-w-md border border-green-600">
        <h1 className="text-lg font-bold mb-4 text-green-700 text-center">Reply to Enquiry</h1>
        <form onSubmit={handleSubmit} className="bg-white p-4 shadow-md rounded-xl max-w-xs bg-Teal">
          <div className="mb-3">
            <label htmlFor="studentId" className="block text-sm font-medium text-white">
              Student ID
            </label>
            <input
              type="text"
              id="studentId"
              name="studentId"
              value={enquiry.studentId}
              readOnly
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-green-700"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="studentEmail" className="block text-sm font-medium text-white">
              Student Email
            </label>
            <input
              type="text"
              id="studentEmail"
              name="studentEmail"
              value={enquiry.studentEmail}
              readOnly
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-green-700"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="enquiryType" className="block text-sm font-medium text-white">
              Enquiry Type
            </label>
            <input
              type="text"
              id="enquiryType"
              name="enquiryType"
              value={enquiry.enquiryType}
              readOnly
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-green-700"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="block text-sm font-medium text-white">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={enquiry.description}
              readOnly
              placeholder="Enter your reply here..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-green-700"
            />
          </div>
          <button
            type="submit"
            className="bg-green-700 text-white px-4 py-2 font-bold rounded-md mx-auto block"
          >
            Send Reply
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reply;
