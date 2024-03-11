// Profile.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import backgroundImg from '../../assets/background.jpg';
const Profile = () => {
  const [userInfo, setUserInfo] = useState({
    // Update the initial state based on your user data structure
    name: "",
    email: "",
    // Add other user details as needed
  });

  const [editMode, setEditMode] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const fetchUserInfo = async () => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await axios.get('http://localhost:8080/auth/user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserInfo(response.data);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const handleEditClick = () => {
    setEditMode(true);
  };

// ...

const handleSaveClick = async () => {
  try {
    const token = localStorage.getItem('authToken');
    const response = await axios.put('http://localhost:8080/auth/update', userInfo, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setShowSuccessPopup(true);
    setEditMode(false);
  } catch (error) {
    console.error('Error updating user details', error);
  }
};

// ...


  const handleCancelClick = () => {
    setEditMode(false);
    // Refetch user details to reset the form to the original state
    fetchUserInfo();
  };

  const handleChange = (e) => {
    // Update the userInfo state when the form fields change
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center" style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="bg-white p-4 shadow-md rounded-md max-w-xs w-full border border-gray-300">
        <h1 className="text-lg font-bold mb-4 text-green-700 text-center">Profile</h1>
        <div className="mb-4">
          <label htmlFor="name" className="text-sm text-gray-600">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={userInfo.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            disabled={!editMode}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="text-sm text-gray-600">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={userInfo.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            disabled={!editMode}
          />
        </div>

        {/* Add other user details input fields here */}

        <div className='text-center'>
          {editMode ? (
            <>
              <button onClick={handleSaveClick} className="bg-green-700 text-white px-4 py-2 font-bold rounded-md mx-2">
                Save
              </button>
              <button onClick={handleCancelClick} className="bg-red-700 text-white px-4 py-2 font-bold rounded-md mx-2">
                Cancel
              </button>
            </>
          ) : (
            <button onClick={handleEditClick} className="bg-blue-700 text-white px-4 py-2 font-bold rounded-md mx-auto">
              Edit
            </button>
          )}
        </div>
      </div>

      {showSuccessPopup && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-md border border-green-500">
            <p className="text-green-500 text-center">User details updated successfully</p>
            <button className="text-green-500 font-bold mt-2" onClick={() => setShowSuccessPopup(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;














// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import profileImage from "../../assets/profile.jpg";

// const Profile = () => {
//   const [userInfo, setUserInfo] = useState({
//     id: '',
//     name: '',
//     email: '',
//     roles: '',
//   });

//   const [editMode, setEditMode] = useState(false);

//   const handleEditClick = () => {
//     // Enable edit mode
//     setEditMode(true);
//   };

//   const handleSaveClick = async () => {
//     try {
//       const token = localStorage.getItem('authToken');
//       await axios.put('http://localhost:8080/auth/users/update', userInfo, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
  
//       // Disable edit mode and fetch updated user info
//       setEditMode(false);
//       await fetchUserInfo();
//     } catch (error) {
//       // Handle errors as needed
//       console.error('Error updating user details:', error);
//     }
//   };
  
  
  

//   const fetchUserInfo = async () => {
//     try {
//       const token = localStorage.getItem('authToken');
//       const response = await axios.get('http://localhost:8080/auth/user', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setUserInfo(response.data);
//     } catch (error) {
//       console.error('Error fetching user details:', error);
//     }
//   };

//   useEffect(() => {
//     fetchUserInfo();
//   }, []);

//   const handleChange = (e) => {
//     // Update the userInfo state when the form fields change
//     setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="bg-white min-h-screen flex items-center justify-center">
//       <div className="bg-white p-4 shadow-md rounded-md max-w-md w-full border border-gray-300">
//         <h1 className="text-lg font-bold mb-4 text-green-700 text-center">User Profile</h1>

//         <div className="mb-4">
//           {/* Display profile photo (replace with your logic for showing profile photo) */}
//           <img src={profileImage} alt="Profile" className="w-20 h-20 rounded-full mx-auto mb-2" />

//           {/* Display user details or edit form based on editMode */}
//           {editMode ? (
//             <div>
//               <label htmlFor="name">Name:</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={userInfo.name}
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded-md mb-2"
//               />

//               <label htmlFor="email">Email:</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={userInfo.email}
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded-md mb-2"
//               />

//               {/* Add additional fields for other user details */}
//             </div>
//           ) : (
//             <div className='text-center'>
//               <p>Name: {userInfo.name}</p>
//               <p>Email: {userInfo.email}</p>
//               <p>Roles: {userInfo.roles}</p>
//             </div>
//           )}
//         </div>

//         {/* Edit and Save buttons */}
//         <div className='text-center'>
//           {editMode ? (
//             <button
//               className="bg-green-700 text-white px-4 py-2 font-bold rounded-md mx-auto"
//               onClick={handleSaveClick}
//             >
//               Save
//             </button>
//           ) : (
//             <button
//               className="bg-green-700 text-white px-4 py-2 font-bold rounded-md mx-auto"
//               onClick={handleEditClick}
//             >
//               Edit Profile
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;
