import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./Components/Navbar";

import LoginPage from "./pages/Login";
import AdminPage from "./pages/AdminPage";

import AddProduct from "./admin/AddProduct";

import RecruitmentServices from "./pages/RecruitmentServices";
import ViewJobseekers from "./admin/ViewJobseekers";
import AddService from "./admin/AddService";
import Services from "./pages/Services";
import ServiceDetails from "./admin/ServiceDetails";
import ProductDetails from "./admin/ProductDetails";
import AddCareer from "./admin/AddCareer";
import CareerDetails from "./admin/CareerDetails";
import AddEvent from "./admin/AddEvent";
import EventDetails from "./admin/EventDetails";
import AddBlog from "./admin/AddBlog";
import BlogDetails from "./admin/BlogDetails";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Product from "./pages/Product";
import Events from "./pages/Events";
import Blogs from "./pages/Blogs";
import Careers from "./pages/Careers";
import CareerApplication from "./admin/CareerApplication";
import ContactMessages from "./admin/ContactMessages";


function AppWrapper() {
  const location = useLocation();

 const hideNavbar = location.pathname.startsWith("/admin") 
                                              ||location.pathname.startsWith("/view_jobseekers")
                                             ||location.pathname.startsWith("/add_services")
                                             ||location.pathname.startsWith("/add_product")  
                                              // ||location.pathname.startsWith("/services") 
                                              ||location.pathname.startsWith("/view_services") 
                                               ||location.pathname.startsWith("/view_product")
                                                ||location.pathname.startsWith("/add_career")  
                                                 ||location.pathname.startsWith("/view_career") 
                                                  ||location.pathname.startsWith("/add_event")  
                                                 ||location.pathname.startsWith("/view_event")
                                                  ||location.pathname.startsWith("/add_blog")  
                                                 ||location.pathname.startsWith("/view_blog") 
                                                  ||location.pathname.startsWith("/about") 
                                                    ||location.pathname.startsWith("/application")
                                                     ||location.pathname.startsWith("/messages") ;
  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />    
        <Route path="/home" element={<Home />} /> 
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin-dashboard" element={<AdminPage />} />

 <Route path="/view_jobseekers" element={<ViewJobseekers />}/>
  <Route path="/recruitment-services"element={<RecruitmentServices />}/>
   <Route path="/add_services"element={<AddService />}/>
     <Route path="/add_product"element={<AddProduct />}/>
       <Route
          path="/services"
          element={<Services />}
        />
         <Route
          path="/view_services"
          element={<ServiceDetails />}
        />
        <Route
          path="/view_product"
          element={<ProductDetails />}
        />  
          <Route path="/add_career"element={<AddCareer />}/> 
           <Route path="/view_career"element={<CareerDetails />}/>
            <Route path="/add_event"element={<AddEvent/>}/> 
           <Route path="/view_event"element={<EventDetails />}/>
               <Route path="/add_blog"element={<AddBlog/>}/> 
           <Route path="/view_blog"element={<BlogDetails />}/>
            <Route path="/contact"element={<Contact />}/>
             <Route path="/about"element={<About />}/>
              <Route path="/product" element={<Product />} />
              <Route path="/events" element={<Events />} />
               <Route path="/blogs" element={<Blogs />} />
                <Route path="/careers" element={<Careers />} />
                 <Route path="/application" element={<CareerApplication />} />
                  <Route path="/messages" element={<ContactMessages />} />
      </Routes>
      
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}
