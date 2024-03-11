// ProfilePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome,FaBook, FaMedal, FaEnvelope, FaEye, FaMoneyBill, FaSignOutAlt } from 'react-icons/fa';
import heroImage from '../../assets/profile.jpg';



const NonScrollablePage = ({ children }) => (
    <div className="non-scrollable md:h-screen overflow-hidden">
      {children}
    </div>
);

  

const ProfilePage = () => {

  return (
    // <NonScrollablePage>
    <aside className="bg-Teal text-white p-3 fixed h-full">
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="bg-Teal text-white p-4 hidden md:block">
        <div className="mb-8">
        <Link to="/profile/pro" className="flex">
          <img src={heroImage} alt="Hero" className="w-16 h-16 rounded-full mb-2 mx-auto" />
        </Link>
        
          <p className="text-center">User Name</p>
        </div>
        <div className="space-y-4">
          <Link to="/home" className="flex items-center">
            <FaHome className="mr-2" />
            Home
          </Link>
          <Link to="/profile/e-courses" className="flex">
            <FaBook className="mr-2" />
            Courses
          </Link>
          <Link to="/badges" className="flex items-center">
            <FaMedal className="mr-2" />
            Badges
          </Link>
          <Link to="/profile/addenquiry" className="flex items-center">
            <FaEnvelope className="mr-2" />
            Add Enquiry
          </Link>
          <Link to="/profile/viewenquiry" className="flex items-center">
            <FaEye className="mr-2" />
            View Enquiry
          </Link>
          <Link to="/payment-history" className="flex items-center">
            <FaMoneyBill className="mr-2" />
            Payment History
          </Link>
          <Link to="/logout" className="flex items-center">
            <FaSignOutAlt className="mr-2" />
            Logout
          </Link>
        </div>
      </div>

      
      
    {/* <EditProfile /> */}
     
    </div>
    </aside>
    // </NonScrollablePage>
  );
};

export default ProfilePage;
