import React from "react";

import PMDC from '../assets/PMDC-80.jpg';
import CUSIT from '../assets/CUSIT-80.jpg'
import LWE from '../assets/LWE-80.jpg';
import Xtreme from '../assets/Xtreme-80.jpg';

function About() {
  return (
    <div name="about" className="w-full md:h-screen bg-[#1e293b]  text-white">
      <div className=" max-w-[1000px] mx-auto p-4 w-full h-full flex flex-col justify-center">
        <div className="sm:text-center pb-8 py-2 px-4">
          <p className="text-4xl text-center font-bold inline border-b-4 border-pink-600 text-white">
            About
          </p>
          <p className=" py-6 text-4xl font-bold  text-[#ccd6f6]">
            {" "}
            Hi, I'm Ihtesham Khattak. Please take a look around.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-col-4 gap-4 text-center py-9">
          <div className="shadow-md shadow-[#032c161] hover:scale-110 duration-500">
            <p>
              Looking for a challenging position at a reputable firm where I can
              put my software development abilities to good use while also
              expanding my knowledge by learning new things.
            </p>
          </div>
        </div>

        <div className="w-full grid grid-cols-3 sm:grid-col-4 gap-4 text-center py-9">

          <div className="shadow-md shadow-[#048c161] hover:scale-110 duration-500">
            <img src={CUSIT} className="w-10 mx-auto" alt="City University of Science and information Technology Peshawar, Pakistan" />
            <p>City University of Science and information Technology Peshawar, Pakistan</p>
          </div>
          <div className="shadow-md shadow-[#048c161] hover:scale-110 duration-500">
            <img src={PMDC} className="w-10 mx-auto" alt="Peshawar Model Degree College Peshawar, Pakistan" />
            <p>Peshawar Model Degree College Peshawar, Pakistan</p>
          </div>
          <div className="shadow-md shadow-[#048c161] hover:scale-110 duration-500">
            <img src={LWE} className="w-10 mx-auto" alt="Learning With Earning" />
            <p>Learning With Earning</p>
          </div>

        </div>

        <div className="w-full grid grid-cols-1 sm:grid-col-4 gap-4 text-center py-9">
          <div className="shadow-md shadow-[#032c161] hover:scale-110 duration-500">
          <img src={Xtreme} className="w-10 mx-auto" alt="Xtreme Software Services Pvt Ltd" />
            <p>Xtreme Software Services Pvt Ltd</p>
            <p>Worked as a Front-end developer and Front-end developer</p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default About;
