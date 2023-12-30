import React from "react";
import { NavLink } from "react-router-dom";
import { Counter } from "../components/Counter";
const Home = () => {
  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen mt-24">
        <section className="text-center w-full mb-8 section1">
          <div className="container">
            <div className="mb-8">
              <p>My company is the best IT company</p>
              <h1 className="text-3xl lg:text-5xl font-bold">
                Welcome to Pritam Developer Wala
              </h1>
              <p>
                Are you ready to take your business to the sky with cutting-edge
                IT solutions? At Pritam Developer Wala, we specialize in
                providing innovative IT services to meet your unique needs.
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

            <div className="mb-8">
              <img
                src="./images/home.png"
                alt="Home image"
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>
        {/* 
     gray div of coustumer etc
       */}
        <Counter />
        {/* //////////// */}
        <section className="text-center w-full mb-8 section2">
          <div className="container section2">
            <div className="mb-8">
              <img
                src="./images/design.png"
                alt="Design image"
                className="w-full h-auto"
              />
            </div>
            <div className="mb-8">
              <p>We are here to help you</p>
              <h2 className="text-2xl lg:text-4xl font-bold">
                Get Started Today
              </h2>
              <p>
                Ready to take the first step towards a more efficient and secure
                IT infrastructure? Contact us today for a free consultation and
                let's discuss how Pritam Developer Wala can help your business.
              </p>
              <div className="flex justify-center mt-4">
                <button
                  type="button"
                  className="bg-blue-600 text-white py-2 px-4 rounded-full mr-4"
                >
                  <NavLink to="/contact">Contact</NavLink>
                </button>
                <button
                  type="button"
                  className="bg-gray-300 text-gray-700 py-2 px-4 rounded-full"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
