import React, { Suspense } from "react";
import Navbar from './../Navbar/Navbar';
import Footer from './../container/Footer';
import Routers from "../../router/Routers";

const LazyLayout = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      <div>
        <Routers />
      </div>
      <Footer />
    </Suspense>
  );
};

export default LazyLayout;





// import { Suspense } from "react"
// import PropTypes from "prop-types"

// const LazyLayout = ({component: Component,...rest }) => {
//   return (
//     <Suspense fallback="Loading...">
//         <Component {...rest}/>
//     </Suspense>
//   )
// }

// LazyLayout.propTypes={
//     component: PropTypes.elementType
// }

// export default LazyLayout