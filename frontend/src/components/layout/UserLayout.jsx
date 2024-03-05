import React, { Suspense } from "react";
import Routers from "../../router/Routers";

const UserLayout = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <Routers />
      </div>
    </Suspense>
  );
};

export default UserLayout;










// UserLayout.jsx
// import PropTypes from 'prop-types';
// import Navbar from '../Navbar/Navbar';
// import Footer from '../container/Footer';

// const UserLayout = ({ children }) => {
//   return (
//     <div>
//       <Navbar />
//       <main>
//         {children}
//       </main>
//       <Footer />
//     </div>
//   );
// };

// UserLayout.propTypes = {
//   children: PropTypes.node.isRequired
// };

// export default UserLayout;
