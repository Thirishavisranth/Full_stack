

// CourseDetails.jsx
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import courseData from '../user_profile/CourseData';
import EditProfile from './EditeProfile';

const CourseDetails = () => {
  const { slug } = useParams();
  const [showPaymentHistory, setShowPaymentHistory] = useState(false);

  // Find the course that matches the slug
  const course = courseData.find((course) => encodeURIComponent(course.slug) === slug);

  if (!course) {
    return <div>Course not found</div>;
  }

  const { title, description, price, image } = course;

  return (
    <div>
  <div className="container mx-auto">
    <div>
      <h1>{title}</h1>
      <img src={image} alt={title} style={{ width: '35%', height: '35%' }} /> {/* Approximately 1 inch for all sides */}
      <p>{description}</p>
      <p>Price: {price}</p>
      <button onClick={() => setShowPaymentHistory(true)}>Show Payment History</button>
    </div>
  </div>
  {showPaymentHistory && <EditProfile />}
</div>


  );
};

export default CourseDetails;
