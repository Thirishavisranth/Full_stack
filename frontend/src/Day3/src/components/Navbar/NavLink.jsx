// import React from "react";
// import { Link } from "react-scroll";
// const NavLink = ({ path, link }) => {
//   return (
//     <li className="list-none cursor-pointer mr-8">
//       <Link
//         to={path}
//         spy={true}
//         smooth={true}
//         duration={500}
//         offset={-50}
//         className="font-bold transition-all duration-300"
//       >
//         {link}
//       </Link>
//     </li>
//   );
// };

// export default NavLink;


import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
const NavLink = ({ path, link }) => {
  const location = useLocation();
  if (location.pathname === '/uprofile' || location.pathname === '/login' || location.pathname === '/validate') {
    return null; // Don't render NavBar for these routes
  }

  return (
    <li className="list-none cursor-pointer mr-8">
      <Link
        to={path}
        className="font-bold transition-all duration-300"
      >
        {link}
      </Link>
    </li>
  );
};

export default NavLink;
