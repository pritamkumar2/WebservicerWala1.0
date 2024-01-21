import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/AuthProvider";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isLoggedIn, user } = useAuth();



  return (
    <header>
      <div className=" nav text-white p-4 ">
        <div className="flex justify-between items-center">
          <div className="logo">
            <NavLink to="/" className="text-xl font-bold">
              devloper pritam
            </NavLink>
          </div>

          {/* Hamburger Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className={`text-white focus:outline-none hamburger-button ${
                isMobileMenuOpen ? "open" : ""
              }`}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

          {/* Navigation Links */}
          <nav
            className={`lg:flex ${
              isMobileMenuOpen ? "block" : "hidden"
            } animated-menu`}
          >
            <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4">
              <li>
                <NavLink to="/" className="hover:text-gray-300">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="hover:text-gray-300">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:text-gray-300">
                  Contact
                </NavLink>
              </li>

              <li>
                <NavLink to="/service" className="hover:text-gray-300">
                  Services
                </NavLink>
              </li>
              {user.isAdmin ? (
                <li>
                  <NavLink to="/admin" className="hover:text-gray-300 navAdmin">
                    Admin
                  </NavLink>
                </li>
              ) : null}
              {isLoggedIn ? (
                <li>
                  <NavLink to="/Logout" className="hover:text-gray-300">
                    Logout
                  </NavLink>
                </li>
              ) : (
                <>
                  {" "}
                  <li>
                    <NavLink to="/register" className="hover:text-gray-300">
                      Register
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/login" className="hover:text-gray-300">
                      Login
                    </NavLink>
                  </li>{" "}
                </>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
