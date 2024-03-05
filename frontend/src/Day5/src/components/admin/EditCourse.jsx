import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EditCourse = () => {
  const { slug } = useParams();
  const [course, setCourse] = useState({
    courseName: "",
    description: "",
    duration: "",
    cost: ""
  });
  const [successMessage, setSuccessMessage] = useState(null);
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        // Fetch course details by ID using the slug parameter
        const response = await axios.get(`http://localhost:8080/api/courses/${slug}`);
        setCourse(response.data);
      } catch (error) {
        console.error(`Error fetching course details: ${error.message}`);
      }
    };

    fetchCourse();
  }, [slug]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Perform the PUT operation to update the course details
      await axios.put(`http://localhost:8080/api/courses/${slug}`, course);
      setSuccessMessage('Course details edited successfully!');
    } catch (error) {
      console.error(`Error saving changes: ${error.message}`);
    }
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-4 shadow-md rounded-xl max-w-md border border-green-600">
        <h1 className="text-lg font-bold mb-4 text-green-700 text-center">Edit Course</h1>
        {successMessage && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-md mb-4" role="alert">
            <p className="font-bold">Success!</p>
            <p>{successMessage}</p>
          </div>
        )}
        <form onSubmit={handleSubmit} className="bg-white p-4 shadow-md rounded-xl max-w-xs bg-Teal">
          <div className="mb-3">
            <input
              type="text"
              name="courseName"
              value={course.courseName}
              onChange={handleChange}
              placeholder="Course Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-green-700" // Add text-green-700 class
            />
          </div>
          <div className="mb-3">
            <textarea
              name="description"
              value={course.description}
              onChange={handleChange}
              placeholder="Description"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-green-700" // Add text-green-700 class
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="duration"
              value={course.duration}
              onChange={handleChange}
              placeholder="Duration"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-green-700" // Add text-green-700 class
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="cost"
              value={course.cost}
              onChange={handleChange}
              placeholder="Cost"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-green-700" // Add text-green-700 class
            />
          </div>
          <button
            type="submit"
            className="bg-green-700 text-white px-4 py-2 font-bold rounded-md mx-auto block"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditCourse;