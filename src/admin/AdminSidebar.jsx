import React, {useState}from "react";
import { useNavigate } from "react-router-dom";

const AdminSidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const navigate = useNavigate();
const [productOpen, setProductOpen] = useState(false);
const [serviceOpen, setserviceOpen] = useState(false);
const [eventOpen, seteventOpen] = useState(false);
const [carreerOpen, setcarreerOpen] = useState(false);
const [blogOpen, setblogOpen] = useState(false);
  return (
    <div>
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-r from-cyan-600 to-cyan-400 text-white p-6 z-40 
        transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-64"}
        md:translate-x-0`}
      >
        <h2 className="text-xl font-bold mb-6">Welcome Admin!</h2>

        <ul className="space-y-4 text-lg">
        <li
  className="cursor-pointer hover:text-yellow-400"
  onClick={() => {
    navigate("/admin-dashboard"); 
    setSidebarOpen(false);       
  }}
>
  Dashboard
</li>
 
        
           {/* <li className="cursor-pointer hover:text-yellow-400" onClick={() => {navigate("/add_services"); setSidebarOpen(false);}}>
            Add Services
          </li>
           <li className="cursor-pointer hover:text-yellow-400" onClick={() => {navigate("/view_services"); setSidebarOpen(false);}}>
            View Services
          </li> */}

           <li>
  <div
    className="flex justify-between items-center cursor-pointer hover:text-yellow-400"
    onClick={() => setserviceOpen(!serviceOpen)}
  >
    <span>Services</span>

    <span>
      {serviceOpen ?<i className="fa-solid fa-minus"></i>: <i className="fa-solid fa-plus"></i>}
    </span>
  </div>

  {serviceOpen && (
    <ul className="ml-5 mt-2 space-y-2 text-base">

      <li
        className="cursor-pointer hover:text-yellow-300"
        onClick={() => {
          navigate("/add_services");
          setSidebarOpen(false);
        }}
      >
        <i className="fa-solid fa-plus"></i> Add Service
      </li>

      <li
        className="cursor-pointer hover:text-yellow-300"
        onClick={() => {
          navigate("/view_services");
          setSidebarOpen(false);
        }}
      >
        <i className="fa-solid fa-eye"></i> View Service
      </li>

    </ul>
  )}
</li>
           <li>
  <div
    className="flex justify-between items-center cursor-pointer hover:text-yellow-400"
    onClick={() => setProductOpen(!productOpen)}
  >
    <span>Products</span>

    <span>
      {productOpen ?<i className="fa-solid fa-minus"></i>: <i className="fa-solid fa-plus"></i>}
    </span>
  </div>

  {productOpen && (
    <ul className="ml-5 mt-2 space-y-2 text-base">

      <li
        className="cursor-pointer hover:text-yellow-300"
        onClick={() => {
          navigate("/add_product");
          setSidebarOpen(false);
        }}
      >
        <i className="fa-solid fa-plus"></i> Add Product
      </li>

      <li
        className="cursor-pointer hover:text-yellow-300"
        onClick={() => {
          navigate("/view_product");
          setSidebarOpen(false);
        }}
      >
        <i className="fa-solid fa-eye"></i> View Product
      </li>

    </ul>
  )}
</li>
         
    <li>
  <div
    className="flex justify-between items-center cursor-pointer hover:text-yellow-400"
    onClick={() => setcarreerOpen(!carreerOpen)}
  >
    <span>Careers</span>

    <span>
      {carreerOpen ?<i className="fa-solid fa-minus"></i>: <i className="fa-solid fa-plus"></i>}
    </span>
  </div>

  {carreerOpen && (
    <ul className="ml-5 mt-2 space-y-2 text-base">

      <li
        className="cursor-pointer hover:text-yellow-300"
        onClick={() => {
          navigate("/add_career");
          setSidebarOpen(false);
        }}
      >
        <i className="fa-solid fa-plus"></i> Add Career
      </li>

      <li
        className="cursor-pointer hover:text-yellow-300"
        onClick={() => {
          navigate("/view_career");
          setSidebarOpen(false);
        }}
      >
        <i className="fa-solid fa-eye"></i> View Career
      </li>

    </ul>
  )}
</li>

    <li>
  <div
    className="flex justify-between items-center cursor-pointer hover:text-yellow-400"
    onClick={() => seteventOpen(!eventOpen)}
  >
    <span>Events</span>

    <span>
      {eventOpen ?<i className="fa-solid fa-minus"></i>: <i className="fa-solid fa-plus"></i>}
    </span>
  </div>

  {eventOpen && (
    <ul className="ml-5 mt-2 space-y-2 text-base">

      <li
        className="cursor-pointer hover:text-yellow-300"
        onClick={() => {
          navigate("/add_event");
          setSidebarOpen(false);
        }}
      >
        <i className="fa-solid fa-plus"></i> Add Event
      </li>

      <li
        className="cursor-pointer hover:text-yellow-300"
        onClick={() => {
          navigate("/view_event");
          setSidebarOpen(false);
        }}
      >
        <i className="fa-solid fa-eye"></i> View Event
      </li>

    </ul>
  )}
</li>
 {/* <li className="cursor-pointer hover:text-yellow-400" onClick={() => {navigate("/add_blog"); setSidebarOpen(false);}}>
            Add Blog
          </li>

           <li className="cursor-pointer hover:text-yellow-400" onClick={() => {navigate("/view_blog"); setSidebarOpen(false);}}>
            View Blog
          </li> */}
         <li>
  <div
    className="flex justify-between items-center cursor-pointer hover:text-yellow-400"
    onClick={() => setblogOpen(!blogOpen)}
  >
    <span>Blogs</span>

    <span>
      {blogOpen ?<i className="fa-solid fa-minus"></i>: <i className="fa-solid fa-plus"></i>}
    </span>
  </div>

  {blogOpen && (
    <ul className="ml-5 mt-2 space-y-2 text-base">

      <li
        className="cursor-pointer hover:text-yellow-300"
        onClick={() => {
          navigate("/add_blog");
          setSidebarOpen(false);
        }}
      >
        <i className="fa-solid fa-plus"></i> Add Blog
      </li>

      <li
        className="cursor-pointer hover:text-yellow-300"
        onClick={() => {
          navigate("/view_blog");
          setSidebarOpen(false);
        }}
      >
        <i className="fa-solid fa-eye"></i> View Blog
      </li>

    </ul>
  )}
</li>   
            <li className="cursor-pointer hover:text-yellow-400" onClick={() => {navigate("/messages"); setSidebarOpen(false);}}>
             Messages
          </li>
           <li className="cursor-pointer hover:text-yellow-400" onClick={() => {navigate("/view_jobseekers"); setSidebarOpen(false);}}>
             Jobseekers list
          </li>
           <li className="cursor-pointer hover:text-yellow-400" onClick={() => {navigate("/application"); setSidebarOpen(false);}}>
             Career Applications
          </li>
          </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;
