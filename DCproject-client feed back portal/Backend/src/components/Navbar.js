// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import { login, logout, getCurrentUser } from "./services authService";

const Navbar = () => {
  const handleLogout = () => {
    logout();
    window.location.href = "/login";  // Redirect to login page after logout
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/dashboard" className="text-white text-lg font-bold">Home</Link>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white py-2 px-4 rounded-md"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;