import React from "react";
import teacher1 from "../../assets/teacher1.avif";
import teacher2 from "../../assets/teacher2.avif";
import { accordions } from "../../data/Data";
import Accordion from "./Accordion";
const Teacher = () => {
  return (
    <div className="section" id="teacher">
      <div className="grid sm:grid-cols-2 place-items-center gap-8">
        <div className="pl-5">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            Become <span className="text-Teal">An Instructor</span> <br /> of
            Our Platform
          </div>
          <p className="text-sm leading-7 text-gray mb-5">
          Hi i'm Nicky!<br></br>Share your knowledge and expertise with students around the world. 
          Join our platform and start creating impactful courses today.
          </p>
          <button className="py-3 px-4 bg-Teal text-white rounded-lg text-sm font-bold ">
            Start Teaching
          </button>
        </div>
        <div className="md:w-3/4 sm:row-start-1 mr-10">
          <img src={teacher1} alt="" style={{ height: '270px' }}/>
        </div>
        <div className="pl-5 ml-5">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            Become <span className="text-Teal">An Instructor</span> <br /> of
            Our Platform
          </div>
          <p className="text-sm leading-7 text-gray mb-5">
          Hi i'm carel! <br></br>Join our community of educators and make a difference. 
          Create and sell your courses online with ease.
          </p>
          <button className="py-3 px-4 bg-Teal text-white rounded-lg text-sm font-bold ">
            Get Started
          </button>
        </div>
        <div className="p-10 md:w-3/4 mr-20 md:w-[90%]" >
          <img src={teacher2} alt="" style={{ height: '270px' }}/>
        </div>
      </div>
      <div className="text-center my-8 font-bold sm:text-[1.875rem] text-[1.5rem]">
        Frequently <span className="text-Teal">Asked Questions</span>
      </div>
      <div className="mt-12 max-w-[700px] mx-auto">
        {accordions.map((accordion) => {
          return <Accordion key={accordion.id} {...accordion} />;
        })}
      </div>
    </div>
  );
};

export default Teacher;
