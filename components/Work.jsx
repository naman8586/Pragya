import React from "react";
import Image from "next/image";
import { assets, workData } from "@/assets/assets";

const Work = ({ isDarkMode }) => {
  return (
    <div
      id="work"
      className={`w-full px-[12%] py-16 scroll-mt-20 ${
        isDarkMode ? "bg-darkTheme text-white" : "bg-gray-50 text-gray-800"
      }`}
    >
      <h4
        className={`text-lg text-center font-Ovo mb-2 ${
          isDarkMode ? "text-gray-400" : "text-gray-600"
        }`}
      >
        My Portfolio
      </h4>
      <h2 className="text-5xl text-center font-Ovo mb-20">Featured Works</h2>
      

      <div className="grid grid-cols-auto my-10 gap-5 m-10">
        {workData.map((project, index) => (
          <div
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            
          </div>
        ))}
      </div>

      <a 
                href="/PORtfolio.pdf" 
                download 
                className='px-10 py-3 border border-gray-500 rounded-full text-gray-500 hover:bg-gray-100
                 w-56 relative left-[30rem] top-12 mb-20 transition-all duration-300 ease-in-out flex items-center gap-2'
              >
                My Portfolio
                <Image src={assets.download_icon} alt='' className='w-4' />
              </a>
    </div>
  );
};

export default Work;
