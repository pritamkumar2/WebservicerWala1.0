
import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-black text-white p-4 md:p-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <h2 className="text-lg font-bold mb-2 md:mb-4">Contact Us</h2>
            <p className="mb-2">123 Web Development Street</p>
            <p className="mb-2">City, Country</p>
            <p className="mb-2">Email: info@example.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <h2 className="text-lg font-bold mb-2 md:mb-4">Services</h2>
            <ul>
              <li>Web Design</li>
              <li>Web Development</li>
              <li>E-commerce Solutions</li>
              {/* Add more services as needed */}
            </ul>
          </div>
          <div className="w-full mb-4 md:mb-0">
            <h2 className="text-lg font-bold mb-2 md:mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-white">
                Facebook
              </a>
              <a href="#" className="text-white">
                Twitter
              </a>
              <a href="#" className="text-white">
                LinkedIn
              </a>
              {/* Add more social media links as needed */}
            </div>
          </div>
        </div>
        <div className="mt-4 md:mt-8">
          <p className="text-center text-xs">
            &copy; 2023 Web Development Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};


