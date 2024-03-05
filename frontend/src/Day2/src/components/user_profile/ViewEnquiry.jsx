// ViewEnquiry.jsx
import React from 'react';
import { FaTrash } from 'react-icons/fa';

const ViewEnquiry = () => {
  // Sample data for demonstration
  const enquiries = [
    {
      id: 1,
      email: "example1@example.com",
      type: "General Inquiry",
      enquiry: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      status: "Pending"
    },
    {
      id: 2,
      email: "example2@example.com",
      type: "Technical Support",
      enquiry: "Nulla facilisi. Ut ac turpis sed ipsum interdum fermentum.",
      status: "Pending"
    },
    {
      id: 3,
      email: "example3@example.com",
      type: "Billing Inquiry",
      enquiry: "Sed fringilla, ex id ultricies vehicula, libero magna tristique quam, eu fermentum felis ante ac eros.",
      status: "Pending"
    },
    // Add more sample data as needed
  ];
  const handleDelete = (id) => {
    // Implement your delete logic here
    console.log(`Deleting entry with ID ${id}`);
  };
  return (
    <div className="" style={{ marginLeft: '3in'}}>
      <h1 className="text-lg font-bold mb-4 text-green-800 text-center">View Enquiries</h1>
      <table className="mt-20 m-10">
        <thead className='border-green-600'>
          <tr className='bg-Teal text-white'>
            <th className="border px-2 py-2">ID</th>
            <th className="border px-2 py-2">Email</th>
            <th className="border px-2 py-2">Type of Enquiry</th>
            <th className="border px-2 py-2">Description</th>
            <th className="border px-2 py-2">Status</th>
            <th className="border px-2 py-2">Edit</th>
          </tr>
        </thead>
        <tbody>
          {enquiries.map(enquiry => (
            <tr key={enquiry.id}>
              <td className="border px-2 py-2">{enquiry.id}</td>
              <td className="border px-2 py-2">{enquiry.email}</td>
              <td className="border px-2 py-2">{enquiry.type}</td>
              <td className="border px-2 py-2">{enquiry.enquiry}</td>
              <td className="border px-2 py-2">{enquiry.status}</td>
              <td className="border px-2 py-2">
                {enquiry.status === "Pending" && (
                  <span>
                     <button onClick={() => handleDelete(enquiry.id)}><FaTrash /></button>
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewEnquiry;
