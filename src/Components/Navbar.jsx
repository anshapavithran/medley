import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      const navbarHeight = 80;

      const y =
        section.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  const goToSection = (sectionId) => {
    if (location.pathname !== "/") {
      navigate(`/?section=${sectionId}`);
    } else {
      scrollToSection(sectionId);
    }
    setMenuOpen(false);
  };

  const handleNav = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
   <nav className="w-full  bg-[#121212] shadow-md py-4 sticky top-0 z-50 h-20">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 h-full">

     <div
  className="flex items-center cursor-pointer"
  onClick={() => goToSection("home")}
>
  <img
    src="/images/logo1.png"
    alt="JK Interior Logo"
     className="h-14 md:h-20 w-auto object-contain"
  />
</div>

        <div className="hidden md:flex items-center gap-8 text-yellow-400 font-medium">
          <span className="cursor-pointer hover:text-white" onClick={() => handleNav("/home")}>Home</span>
          <span className="cursor-pointer hover:text-white" onClick={() => handleNav("/about")}>About</span>
          <span className="cursor-pointer hover:text-white" onClick={() => handleNav("/services")}>Services</span>
          <span className="cursor-pointer hover:text-white" onClick={() => handleNav("/product")}>Product</span>
          {/* <span className="cursor-pointer hover:text-white" onClick={() => handleNav("/events")}>Events</span> */}
          {/* <span className="cursor-pointer hover:text-white" onClick={() => handleNav("/blogs")}>Blogs</span> */}
          {/* <span className="cursor-pointer hover:text-white" onClick={() => handleNav("/careers")}>Careers</span> */}
          <span className="cursor-pointer hover:text-white" onClick={() => handleNav("/contact")}>Contact</span>
          {/* <span className="cursor-pointer hover:text-white" onClick={() => handleNav("/recruitment-services")}>
            Recruitment Services
          </span> */}
        </div>

        <div className="md:hidden text-yellow-400 text-2xl">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-black text-yellow-400 px-6 py-4 space-y-4 border-t border-gray-700">
          <p onClick={() => goToSection("home")} className="cursor-pointer">Home</p>
          <p onClick={() => handleNav("/about")} className="cursor-pointer">About</p>
          <p onClick={() => handleNav("/services")} className="cursor-pointer">Services</p>
          <p onClick={() => handleNav("/product")} className="cursor-pointer">Product</p>
          {/* <p onClick={() => handleNav("/events")} className="cursor-pointer">Events</p>
          <p onClick={() => handleNav("/blogs")} className="cursor-pointer">Blogs</p>
          <p onClick={() => handleNav("/careers")} className="cursor-pointer">Careers</p> */}
          <p onClick={() => handleNav("/contact")} className="cursor-pointer">Contact</p>
          {/* <p onClick={() => handleNav("/recruitment-services")} className="cursor-pointer">
            Recruitment Services
          </p> */}
        </div>
      )}
    </nav>
  );
}