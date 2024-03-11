import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ViewCourse = () => {
  const [courses, setCourses] = useState([]);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/courses/all');
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error.message);
      }
    };

    fetchCourses();
  }, []);

  const handleDelete = async (id) => {
    try {
      const authToken = localStorage.getItem('authToken');
  
      // Delete the course
      await axios.delete(`http://localhost:8080/api/courses/${id}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
  
      // Update the state to remove the deleted course
      setCourses((prevCourses) => prevCourses.filter((course) => course.id !== id));
  
      // Set success message if needed
      setSuccessMessage('Course deleted successfully!');
    } catch (error) {
      console.error('Error deleting course:', error.message);
    }
  };
  
  
  



  return (
    <div className="" style={{ marginLeft: '4in' }}>
      <h1 className="text-lg font-bold mb-6 text-green-800 text-center" style={{ marginRight: '3in' }}>
        View Courses
      </h1>
      {successMessage && (
        <div className="border border-black text-Teal px-4 py-3 rounded-md max-w-xs" role="alert" style={{ marginLeft: '3in' }}>
          <p className="font-bold">Success!</p>
          <p>{successMessage}</p>
        </div>
      )}
      <table className="mt-20 m-10">
        <thead className="border-green-600">
          <tr className="bg-Teal text-white">
            <th className="border px-2 py-2">ID</th>
            <th className="border px-2 py-2">Course Name</th>
            <th className="border px-2 py-2">Description</th>
            <th className="border px-2 py-2">Duration</th>
            <th className="border px-2 py-2">Cost</th>
            <th className="border px-2 py-2">Edit</th>
            <th className="border px-2 py-2">Delete</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td className="border px-2 py-2">{course.id}</td>
              <td className="border px-2 py-2">{course.courseName}</td>
              <td className="border px-2 py-2">{course.description}</td>
              <td className="border px-2 py-2">{course.duration}</td>
              <td className="border px-2 py-2">{course.cost}</td>
              <td className="border px-2 py-2">
                <Link to={`/admin/editcc/${course.id}`}>
                  <button><FaEdit /></button>
                </Link>
              </td>
              <td className="border px-2 py-2">
                <button onClick={() => handleDelete(course.id)}><FaTrash /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewCourse;
