import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import backgroundImg from '../../assets/background.jpg';
// import AddCourseForm from "./AddCourseForm";
// import ViewCourseTable from "./ViewCourseTable";
// import ViewEnquiriesTable from "./ViewEnquiriesTable";
// import ViewPaymentsTable from "./ViewPaymentsTable";
// import Logout from "./Logout";
import Img from '../../assets/profile.jpg'

const AdminDashboard = () => {
  return (
    
      <aside className="bg-Teal text-white fixed h-full"  style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="flex h-screen bg-gray-100">
      <div className="bg-Teal text-white p-2 hidden md:block">
      {/* Sidebar */}
        {/* Admin profile photo */}
        <div className="mb-9 text-white ml-12">
          {/* Add your admin profile photo here */}
          <img
            src={Img}
            alt="Admin Profile"
            className="w-16 h-16 rounded-full"
          />
          <p className="m-2">Robin</p>
        </div>

        
        {/* Sidebar links */}
        <nav>
          <ul className="space-y-4 text-white">
            <li className="hover:bg-green-700 border p-2">
              <Link to="/home">Home</Link>
            </li>
            <li className="hover:bg-green-700 border p-2">
              <Link to="/admin/addc">Add Course</Link>
            </li>
            <li className="hover:bg-green-700 border p-2">
              <Link to="/admin/viewc">View Course</Link>
            </li>
            <li className="hover:bg-green-700 border p-2">
              <Link to="/admin/enquiry">View All Enquiries</Link>
            </li>
            <li className="hover:bg-green-700 border p-2">
              <Link to="">View Payment History</Link>
            </li>
            <li className="hover:bg-green-700 border p-2">
              <Link to="">Logout</Link>
            </li>
          </ul>
        </nav>
    </div>
    </div>
    </aside>
  );
};

export default AdminDashboard;
