import { assets, serviceData } from "@/assets/assets";
import React from "react";
import Image from "next/image";

const Services = ({ isDarkMode }) => {
  return (
    <section
      id="services"
      className={`w-full px-[12%] py-16 scroll-mt-20 ${
        isDarkMode ? "bg-darkTheme text-white" : "bg-gray-50 text-gray-800"
      }`}
    >
      <header className="text-center">
        <h4
          className={`text-lg font-Ovo ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          } mb-2`}
        >
          What I Offer
        </h4>
        <h2 className="text-5xl font-Ovo">My Services</h2>
        <p
          className={`max-w-2xl mx-auto mt-5 mb-12 ${
            isDarkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          A frontend developer from Delhi, India, currently in my 3rd year of
          B.Tech, striving to gain valuable experience and contribute
          meaningfully to the field.
        </p>
      </header>

      <div className="grid grid-cols-auto gap-8 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className={`group border rounded-lg px-8 py-12 transform transition duration-500 ${
              isDarkMode
                ? "border-gray-700 hover:bg-darkHover hover:shadow-white"
                : "border-gray-300 hover:bg-lightHover hover:shadow-lg"
            } hover:-translate-y-2`}
          >
            <Image
              src={icon}
              alt={title}
              className="w-10 mb-4 group-hover:scale-110 transition duration-300"
            />

            <h3
              className={`text-xl font-semibold mb-3 transition duration-300 ${
                isDarkMode ? "text-white group-hover:text-lightBlue" : "text-gray-800 group-hover:text-darkTheme"
              }`}
            >
              {title}
            </h3>

            <p
              className={`text-sm leading-relaxed mb-5 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {description}
            </p>

            <a
              href={link}
              className={`flex items-center gap-2 text-sm font-medium group-hover:underline ${
                isDarkMode ? "text-lightBlue" : "text-blue-600"
              }`}
            >
              Read more{" "}
              <Image
                src={assets.right_arrow}
                alt="Arrow Icon"
                className="w-4"
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
