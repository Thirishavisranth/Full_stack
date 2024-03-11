import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from '../components/container/Home';
import Validate from '../components/container/Validate';
import About from '../components/container/About';
import Contact from './../components/container/Contact';
import Teacher from './../components/container/Teacher';
import Courses from './../components/container/Course/Courses';
import Login from "../components/container/Login";
import AdminLog from "../components/AdminLog";
import ProfilePage from "../components/user_profile/ProfilePage";
import EditProfile from "../components/user_profile/EditeProfile";
import AddEnquiry from "../components/user_profile/AddEnquiry";
import ViewEnquiry from "../components/user_profile/ViewEnquiry";
import RCourseDetails from "../components/courses_page/RCourse_Details";
import RCourses from "../components/courses_page/RCourses";
import AdminDashboard from "../components/admin/AdminDashboard";
import AddCourse from "../components/admin/AddCourse";
import ViewCourse from "../components/admin/ViewCourse";
import EditCourse from "../components/admin/EditCourse";
import ViewAllEnquiry from "../components/admin/ViewAllEnquiry";
import Reply from "../components/admin/Reply";
import Profile from "../components/container/Profile";


const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/teacher" element={<Teacher />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/page/courses" element={<RCourses />} />
      <Route path="/page/courses/:id" element={<RCourseDetails />} />
      <Route path="/about" element={<About />} />
      <Route path="/register" element={<Validate />} />
      <Route path="/login" element={<Login />} />
      <Route path="/ownerlogin" element={<AdminLog />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/profile/edituser" element={<EditProfile />} />
      <Route path="/profile/addenquiry" element={<AddEnquiry />} />
      <Route path="/profile/viewenquiry" element={<ViewEnquiry />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/addc" element={<AddCourse/>} />
      <Route path="/admin/viewc" element={<ViewCourse/>} />
      <Route path="/profile/pro" element={<Profile/>} />
      <Route path="/admin/editcc" element={<EditCourse/>} />
      <Route path="/admin/editcc/:slug" element={<EditCourse />} />
      <Route path="/admin/enquiry" element={<ViewAllEnquiry/>} />
      <Route path="/admin/reply" element={<Reply/>} />
      <Route path="/admin/reply/:id" element={<Reply/>} />

    </Routes>
  );
};

export default Routers;

{/* <Route path="/profile/e-courses" element={<Course />} />
<Route path="/profile/e-courses/:slug" element={<CourseDetails />} /> */}
// import Course from "../components/user_profile/Course";
// import CourseDetails from "../components/user_profile/CourseDetails";


// import React, { lazy, Suspense } from "react";
// import { Routes, Route, Navigate } from "react-router-dom";

// const Home = lazy(() => import('../components/container/Home'));
// const Validate = lazy(() => import('../components/container/Validate'));
// const About = lazy(() => import('../components/container/About'));
// const Contact = lazy(() => import('../components/container/Contact'));
// const Teacher = lazy(() => import('../components/container/Teacher'));
// const Courses = lazy(() => import('../components/container/Course/Courses'));
// const Login = lazy(() => import('../components/container/Login'));
// const AdminLog = lazy(() => import('../components/AdminLog'));
// const ProfilePage = lazy(() => import('../components/user_profile/ProfilePage'));
// const EditProfile = lazy(() => import('../components/user_profile/EditeProfile'));
// const AddEnquiry = lazy(() => import('../components/user_profile/EnquiryForm'));

// const LazyLayout = React.lazy(() => import('../components/layout/LazyLayout'));
// const UserLayout = React.lazy(() => import('../components/layout/UserLayout'));

// const Routers = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Navigate to="/home" />} />
//       <Route path="/home/*" element={<UserLayout />}>
//         <Route index element={<Home />} />
//         <Route path="contact" element={<Contact />} />
//         <Route path="teacher" element={<Teacher />} />
//         <Route path="courses" element={<Courses />} />
//         <Route path="validate" element={<Validate />} />
//         <Route path="about" element={<About />} />
//       </Route>
//       <Route path="login" element={<LazyLayout />} />
//       <Route path="adminlog" element={<LazyLayout />} />
//       <Route path="uprofile" element={<LazyLayout />} />
//       <Route path="edituser" element={<LazyLayout />} />
//       <Route path="addenquiry" element={<LazyLayout />} />
//     </Routes>
//   );
// };

// export default Routers;

