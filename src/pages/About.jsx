import React from "react";
import { NavLink } from "react-router-dom";
import { Counter } from "../components/Counter";
export const About = () => {
  return (
    <>
      <section className="text-center w-full mb-8 section1">
        <div className="container about ">
          <div className="mb-8">
            <p>Welcome to Pritam Developer Wala</p>
            <h1 className="text-3xl lg:text-5xl font-bold">Why Choose Us</h1>
            <p>
              Expertise: Our team consists of experienced IT professionals who
              are passionate about staying up-to-date with the latest industry
              trends. Customization: We understand that every business is
              unique. That's why we create solutions that are tailored to your
              specific needs and goals. Customer-Centric Approach: We prioritize
              your satisfaction and provide top-notch support to address your IT
              concerns. Affordability: We offer competitive pricing without
              compromising on the quality of our services. Reliability: Count on
              us to be there when you need us. We're committed to ensuring your
              IT environment is reliable and available 24/7.
            </p>
            <div className="flex justify-center mt-4">
              <button
                type="button"
                className="bg-blue-600 text-white py-2 px-3 rounded-full mr-4"
              >
                <NavLink to="/contact">Contact</NavLink>
              </button>
              <button
                type="button"
                className="bg-gray-300 text-gray-700 py-2 px-3 rounded-full"
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="mb-8 hidden lg:block">
            {/* Hidden in mobile view, visible on medium screens and above */}
            <img
              src="./images/about.png"
              alt="Home image"
              className="w-full h-auto"
            />
          </div>
        </div>
        
      </section>
      <Counter />
    </>
  );
};

export default About;
