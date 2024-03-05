import React, { Fragment } from "react";
import Navbar from './../Navbar/Navbar';
import Footer from './../container/Footer';
import Routers from "../../router/Routers";
import { useLocation } from "react-router-dom";
import Profile from "./../user_profile/ProfilePage";
import AdminDashboard from "../admin/AdminDashboard";
import AddCourse from "../admin/AddCourse";
import Owner from "../AdminLog";
//import AdminDashboard from "../admin/AdminDashboard";


const Layout = () => {
  const location = useLocation();

  // Check if the current route is under the ProfilePage section
  const isProfilePage = location.pathname.includes("/profile");
  const isAdminDashboard = location.pathname.includes("/admin");
  const isOwner = location.pathname.includes("/owner");

  return (
    <Fragment>
      {isProfilePage && <Profile/>}
      {isAdminDashboard && <AdminDashboard/>}
      {!isProfilePage && !isAdminDashboard && !isOwner && <Navbar />}
      <div>
        <Routers />
      </div>
      {!isProfilePage && !isAdminDashboard && !isOwner && <Footer />}
    </Fragment>
  );
};

export default Layout;

// Layout.jsx


// import React, { Fragment } from "react";
// import Navbar from './../Navbar/Navbar';
// import Footer from './../container/Footer';
// import Routers from "../../router/Routers";
//import ProfilePage from './../user_profile/ProfilePage';

// const Layout = () => {
//   return (
//     <Fragment>
//       <Navbar />
//       <div>
//         <Routers/>
//       </div>
//       <Footer />
//     </Fragment>
//   );
// };

//export default Layout;
