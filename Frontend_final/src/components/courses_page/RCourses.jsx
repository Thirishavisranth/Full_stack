import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClockCircle, AiOutlineDollarCircle } from "react-icons/ai";
import axios from "axios";
import courses1 from "../../assets/courses1.jpg";
import courses2 from "../../assets/courses2.jpg";
import courses3 from "../../assets/courses3.jpg";
import courses4 from "../../assets/courses4.jpg";
import courses5 from "../../assets/courses5.jpg";
import courses6 from "../../assets/courses6.jpg";
import courses7 from "../../assets/courses7.jpg";
import courses8 from "../../assets/courses8.jpg";

const courseImages = [courses1, courses2, courses3, courses4, courses5, courses6, courses7, courses8];

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/courses/all");
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error.message);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="section" id="courses">
      <div className="grid grid-cols-3 gap-7 mt-4">
        {courses.map((course, index) => (
          <div key={course.id} className="relative overflow-hidden bg-white shadow-md pb-12 hover:shadow-lg rounded-md p-4 transition duration-300 transform hover:-translate-y-1 hover:scale-105 text-Teal">
            <img src={courseImages[index % courseImages.length]} alt={course.courseName} className="w-full h-40 object-cover rounded-md mb-4" />
            <div className="font-bold mb-2 text-center">{course.courseName}</div>
            <div className="mb-2">{course.description}</div>
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center">
                <AiOutlineClockCircle className="mr-2 text-green-500" />
                {course.duration}
              </div>
              <div className="flex items-center">
                <AiOutlineDollarCircle className="mr-2 text-green-500" />
                {course.cost}
              </div>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <Link to={`/page/courses/${course.id}`}>
                <button className="bg-Teal text-white py-2 px-4 rounded-md hover:bg-Teal-dark transition duration-300">
                  Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;

