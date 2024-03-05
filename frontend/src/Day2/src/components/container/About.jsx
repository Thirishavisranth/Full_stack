import React from "react";
import about from "../../assets/About.avif";

const About = () => {
  return (
    <div className="section" id="about">
      <div className="grid md:grid-cols-2 gap-8 place-items-center">
        <div className="border-[3px] border-solid border-Teal rounded-lg">
          <img src={about} alt="" />
        </div>
        <div className="pl-20">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            We provide the <br /> best{" "}
            <span className="text-Teal">online courses</span>
          </div>
          <p className="text-sm text-gray leading-7 mb-4 text-left">
          Embark on a transformative learning journey with our premier online courses, meticulously crafted to deliver excellence in every lesson. 
          Explore a diverse range of subjects guided by industry experts, ensuring you receive the best education tailored to your goals. 
          Join our community of learners and with our online courses.
          </p>
          <button className="bg-Teal text-white py-3 px-6 text-sm border border-solid border-gray rounded-lg font-bold">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
