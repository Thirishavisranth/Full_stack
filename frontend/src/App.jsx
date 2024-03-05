// // App.jsx
// import React from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import { lazy } from 'react';
// import LazyLayout from './components/layout/LazyLayout';
// //const LazyLogin = lazy(() => import("../pages/auth/Login"));
// const LazyRegister = lazy(() => import("./components/container/Validate"));
// import Routers from './router/Routers';

// function App() {
//   return (
//     <div>
//       <Routes>
//         <Route path='/' element={<Navigate to="/new-app/components/validate" />} />
//         <Route path='/new-app/components/validate' element={<LazyLayout component={LazyRegister} />} />
//         {/* <Route path='/bec-app/auth/register' element={<LazyLayout component={LazyRegister} />} /> */}
//         <Route path="/new-app/components/router/*" element={<Routers/>} />
//       </Routes>
//     </div>
//   );
// }

// export default App;









// import { Routes } from "react-router-dom";
// import { BrowserRouter as Router } from 'react-router-dom';
//import Routes from './router/Routes';
// import {
//   Navbar,
//   Home,
//   About,
//   Teacher,
//   Contact,
//   Courses,
//   Footer,
// } from "./components/index";


// function App() {
  //   return (
    //   // <Router>
    //     <div className="font-Poppins bg-Solitude">
    //       <Navbar />
    //       {/* <Routes/> */}
    //       <Home />
    //       <About />
//       <Courses />
//       <Teacher />
//       <Contact />
//       <Footer />
//     </div>
//   // </Router>
//   );
// }

//export default App;



import Layout from "./components/layout/Layout"
function App() {
  

  return (
    <Layout/>
  )
}

export default App


