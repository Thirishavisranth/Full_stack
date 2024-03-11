// RCourseDetails.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import courses1 from "../../assets/courses1.jpg";
import courses2 from "../../assets/courses2.jpg";
import courses3 from "../../assets/courses3.jpg";
import courses4 from "../../assets/courses4.jpg";
import courses5 from "../../assets/courses5.jpg";
import courses6 from "../../assets/courses6.jpg";
import courses7 from "../../assets/courses7.jpg";
import courses8 from "../../assets/courses8.jpg";

const courseImages = [courses1, courses2, courses3, courses4, courses5, courses6, courses7, courses8];

const RCourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        if (!id) {
          console.error("Course slug is undefined");
          return;
        }

        const response = await axios.get(`http://localhost:8080/api/courses/${id}`);

        if (response.data) {
          setCourse(response.data);
        } else {
          console.error("Course details not found for slug:", id);
        }
      } catch (error) {
        console.error("Error fetching course details:", error.message);
      }
    };

    fetchCourseDetails();
  }, [id]);

  if (!id || !course) {
    return <div>Loading...</div>;
  }

  // Adjusted the logic to start from the previous image
  const selectedImageIndex = id > 0 ? (id - 1) % courseImages.length : courseImages.length - 1;
  const selectedImage = courseImages[selectedImageIndex];

  return (
    <div className="section">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">{course.courseName}</h2>

        <div className="relative h-48 mb-4 overflow-hidden rounded-md shadow-md cursor-pointer transform hover:scale-105 transition duration-300 m-8" style={{width:"350px", height:"300px",marginLeft:"280px"}}>
          <img
            src={selectedImage}
            alt={course.courseName}
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        <div className="flex justify-center mb-4">
          <Link to={`/profile`}>
          <button className="bg-Teal text-white py-2 px-4 rounded-md hover:bg-Teal-dark transition duration-300 mr-2 cursor-pointer transform hover:scale-105 transition duration-300 ">
            Add Course
          </button>
          </Link>
          <Link to={`/admin`}>
          <button className="bg-Teal text-white py-2 px-9 rounded-md hover:bg-Teal-dark transition duration-300 cursor-pointer transform hover:scale-105 transition duration-300 ">
            Enroll
          </button>
          </Link>
              
        </div>

        <div className="grid grid-cols-2 gap-3 text-left mb-4" style={{marginLeft:"250px"}}>
          <div className="text-Teal font-bold">
            Duration:
          </div>
          <div className="text-gray">{course.duration}</div>

          <div className="text-Teal font-bold">
            Cost:
          </div>
          <div className="text-gray">{course.cost}</div>
        <div className="text-Teal font-bold mb-2">Description:</div>
        <div className="text-gray text-left">{course.description}</div>
        <div className="text-Teal font-bold mb-2">Mentor:</div>
        <div className="text-gray text-left">Melvin</div>
        <div className="text-Teal font-bold mb-2">About:</div>
        <div className="text-gray text-left">Prof.B.Ed,ph.d,working in IIT Madaras</div>
        <div className="text-Teal font-bold mb-2">Ratings:</div>
        <div className="text-gray text-left flex items-center">
         {Array.from({ length: 4 }).map((_, index) => (
         <AiFillStar key={index} className="text-green-400 mr-1" />
          ))}
          <AiOutlineStar className="text-green-500 mr-1" />
        </div>
        </div>

      </div>
    </div>
  );
};

export default RCourseDetails;



























// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { AiOutlineClockCircle, AiOutlineDollarCircle } from "react-icons/ai";

// const RCourseDetails = () => {
//   const { id } = useParams();
//   console.log("slug:", id);
//   const [course, setCourse] = useState(null);

//   useEffect(() => {
//     const fetchCourseDetails = async () => {
//       try {
//         if (!id) {
//           console.error("Course slug is undefined");
//           return;
//         }

//         const response = await axios.get(`http://localhost:8080/api/courses/${id}`);
        
//         // Check if response.data exists before updating the state
//         if (response.data) {
//           setCourse(response.data);
//         } else {
//           console.error("Course details not found for slug:", id);
//         }
//       } catch (error) {
//         console.error("Error fetching course details:", error.message);
//       }
//     };

//     fetchCourseDetails();
//   }, [id]);

//   if (!id || !course) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="section">
//       <div className="max-w-4xl mx-auto text-center">
//         <h2 className="text-3xl font-bold mb-4">{course.courseName}</h2>
//         <img src={course.image} alt={course.courseName} className="w-full h-64 object-cover rounded-md mb-4" />

//         <div className="grid grid-cols-2 gap-3 text-center mb-4">
//           <div className="text-Teal font-bold">
//             <AiOutlineClockCircle className="text-Teal mr-2" />
//             Duration:
//           </div>
//           <div className="text-gray">{course.duration}</div>

//           <div className="text-Teal font-bold">
//             <AiOutlineDollarCircle className="text-Teal mr-2" />
//             Cost:
//           </div>
//           <div className="text-gray">{course.cost}</div>
//         </div>

//         <div className="text-Teal font-bold">Description:</div>
//         <div className="text-gray text-left">{course.description}</div>
//       </div>
//     </div>
//   );
// };

// export default RCourseDetails;


















// import React from "react";
// import { useParams ,Link} from "react-router-dom";
// import { courses } from "../../data/Data";

// const RCourseDetails = () => {
//   const { slug } = useParams();
//   const course = courses.find((course) => course.title === slug);

//   if (!course) {
//     return <div>Course not found</div>;
//   }

//   return (
//     <div className="section">
//       <div className="max-w-4xl mx-auto">
//         <h2 className="text-3xl font-bold mb-4 text-center">{course.title}</h2>

//         <div className="p-0 bg-white rounded-xl" style={{ maxWidth: "5in", marginLeft: "20%" }}>
//           <div className="mb-6 rounded-xl p-5">
//             <img
//               src={course.image}
//               alt={course.title}
//               className="w-4/5 h-auto rounded mb-1 mx-auto"
//               style={{ maxWidth: "5in", maxHeight: "6in" }}
//             />

//             <div className="text-center">
//             <Link to="/profile" className="flex-1">
//               <button className="bg-Teal hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-1">
//                 Add Course
//               </button>
//             </Link>
//             <Link to="/profile" className="flex-1">
//               <button className="bg-Teal hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-1">
//                 Enroll Course
//               </button>
//             </Link>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-2 gap-3 text-center">
//           <div className="text-Teal font-bold">Category:</div>
//           <div className="text-gray">{course.category}</div>

//           <div className="text-Teal font-bold">Rating:</div>
//           <div className="text-gray">{course.rating}</div>

//           <div className="text-Teal font-bold">Participants:</div>
//           <div className="text-gray">{course.participants}</div>

//           <div className="text-Teal font-bold">Price:</div>
//           <div className="text-gray">${course.price}</div>

//           <div className="text-Teal font-bold">Description:</div>
//           <div className="text-gray text-left">{course.description}</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RCourseDetails;

