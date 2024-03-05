// Courses.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import courseData from '../user_profile/CourseData';
import ProfilePage from './ProfilePage';


const Courses = () => {
  return (
    <div className="flex">
    <ProfilePage/>
    <section className="flex-1 p-4 mt-0">
    <div className="container mx-auto">
        <div className="flex flex-wrap -m-7">
          {courseData.map((course, index) => (
            <div className="lg:w-1/3 md:w-1/3 p-4 w-full" key={index}>
              <div>
                <Link to={`/profile/e-courses/${encodeURIComponent(course.slug)}`}>
                  <div className="block relative rounded overflow-hidden">
                    <img alt="Course" className="block" src={course.image} />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">{course.title}</h2>
                    <p className="mt-1">{course.price}</p>
                    <button className="bg-Teal hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-2">Details</button>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default Courses;
