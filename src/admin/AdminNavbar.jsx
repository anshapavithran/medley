import React from "react";
import { FaSignOutAlt, FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AdminNavbar = ({ setSidebarOpen }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="w-full bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-4 px-6 flex items-center justify-between shadow-md">

      <div className="flex items-center gap-3">

        <button
          className="md:hidden text-white text-xl"
          onClick={() => setSidebarOpen((prev) => !prev)}
        >
          <FaBars />
        </button>

      

      </div>
      <button
        onClick={handleLogout}
        className="flex items-center gap-2 bg-cyan-700 px-4 py-2 rounded hover:bg-red-500 transition text-sm"
      >
        <FaSignOutAlt  />
        <span className="hidden sm:block text-white ">Sign Out</span>
      </button>

    </nav>
  );
};

export default AdminNavbar;