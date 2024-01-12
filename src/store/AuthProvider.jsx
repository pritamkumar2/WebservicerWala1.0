import React, { useEffect, useState, createContext, useContext } from "react";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");

  const storeTokenInLs = (key) => {
    setToken(key);
    return localStorage.setItem("token", key);
  };

  let isLoggedIn = !!token;

  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  // jwt Authentication to get the current user data
  const userAuthentication = async () => {
    try {
    
      const axiosConfig = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.get(
        "http://localhost:3000/api/UserJwt",
        axiosConfig
      );

      if (response.status === 200) {
        const data = response.data;
        setUser(data.userData);
        console.log("Success from user Auth:", data.userData);
      } else {
        console.log("Error from user Auth:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching user data:", error.message);
    }
  };

  useEffect(() => {
    userAuthentication();
  }, []); // Removed unnecessary dependency from useEffect

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, storeTokenInLs, LogoutUser, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const AuthContextValue = useContext(AuthContext);
  if (!AuthContextValue) {
    throw new Error("useAuth used outside of the provider");
  }
  return AuthContextValue;
};

export default AuthProvider;

