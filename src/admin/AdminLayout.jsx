import React, { useState } from "react";
import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";

const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-white ">
      <AdminSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

<div className={`flex-1 transition-all duration-300 overflow-x-hidden w-full 
  ${sidebarOpen ? "ml-64" : "ml-0"} md:ml-64`}>

        <AdminNavbar setSidebarOpen={setSidebarOpen} />

        <div className="p-4 md:p-8">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
