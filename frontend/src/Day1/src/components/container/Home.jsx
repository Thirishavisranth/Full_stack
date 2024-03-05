import React from "react";
import hero from "../../assets/hero.png";
import { logos } from "../../data/Data";
import { motion } from "framer-motion";
import Helmet from "../helmet/Helmet";
import About from './About';
import Courses from "./Course/Courses";
import Teacher from "./Teacher";
import Contact from "./Contact";
const Home = () => {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <Helmet title="Home">
    <div className="section" id="home">
      <div className="md:flex items-center justify-center">
        <div>
          <div className="font-bold text-md  text-Teal mb-4">
            {" "}
            your e-learning partner
          </div>
          <div className="sm:text-[2.5rem] text-[1.825rem] font-bold">
            This is <br /> the new way <br /> to learn in BEC
          </div>
          <p className="text-sm leading-7 text-gray max-w-sm">
          Explore innovative courses, engage with industry experts, 
          and unlock your potential with our cutting-edge learning platform.
          </p>
          <div className="mt-6">
            <button className="px-6 py-3 font-bold text-white bg-Teal rounded-lg mr-4 text-sm">
              Get Started
            </button>
            <button className="px-6 py-3 font-bold border border-solid border-gray rounded-lg text-sm">
              Discover
            </button>
          </div>
        </div>
        <div className="md:w-[45%]">
        <img src={hero} alt="" className="w-full pl-[4.54cm] pb-[2.54cm]" />
        </div>
      </div>
      <div>
        <p className="text-center text-xl">
          We collaborate with{" "}
          <span className="text-Teal">
            100+ leading universities ans companies
          </span>
        </p>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="flex items-center justify-center flex-wrap gap-8 p-2"
        >
          {logos.map((logo, index) => (
            <motion.div variants={item} className="w-[3cm]" key={index}>
              <img src={logo} alt="" className="w-full object-cover" />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <About/>
      <Courses/>
      <Teacher/>
      <Contact/>
    </div>
   </Helmet>
  );
};

export default Home;
