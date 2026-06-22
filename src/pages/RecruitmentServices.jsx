import Navbar from "../Components/Navbar";
import React, { useState, useRef,useEffect } from "react";
import {
  FaBriefcase,
  FaUserPlus,
  FaFileAlt,
  FaBell,
  FaHandHoldingUsd,FaGraduationCap
} from "react-icons/fa";
import {
  FaCouch,
  FaBorderAll,
  FaWindowMaximize,
  FaPaintRoller,
  FaHome,
  FaTools
} from "react-icons/fa";

import { useNavigate, useLocation } from "react-router-dom";
export default function RecruitmentServices() {
    const [selectedType, setSelectedType] = useState("");
   const [formData, setFormData] = useState({
  first_name: "",
  last_name: "",
  phone_number: "",
  email: "",
  place: "",
  service: "Tiling",
});
 const navigate = useNavigate();
 useEffect(() => {
   window.scrollTo({
     top: 0,
     left: 0,
     behavior: "instant",
   });
 }, []);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = (e) => {
  e.preventDefault();

  const message = `
*New Interior Enquiry*

Name: ${formData.first_name} ${formData.last_name}

Phone: ${formData.phone_number}

Email: ${formData.email}

Place: ${formData.place}

Service Required: ${formData.service}
`;

  const whatsappNumber = "918330063380";

  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsappURL, "_blank");
};
const formRef = useRef(null);

const scrollToForm = () => {
  formRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
  return (
    <>
    <section className="relative min-h-screen text-white overflow-hidden">

  <div className="fixed inset-0 bg-black/40 -z-10"></div>
  <video
    autoPlay
    muted
    loop
    playsInline
    className="fixed inset-0 w-full h-full object-cover -z-10"
    // className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/videos/home.mp4" type="video/mp4" />
  </video>

    <div className="fixed inset-0 bg-black/40 -z-10"></div>

  <div className="relative z-10">

    <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">

      <div className="text-center mb-16">
        <h1 className="text-xl md:text-5xl font-bold mb-6 text-yellow-500">
        JK Furnishing, Tiling & Curtaining Solutions
        </h1>

       <p className="max-w-5xl mx-auto text-lg text-gray-300">
  Transform your home, office, showroom, or commercial space with
  premium tiling, furnishing, curtaining, blinds, upholstery, and
  interior finishing services. We deliver elegant interiors with
  superior craftsmanship and modern designs.
</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">

        <div>
          <h2 className="text-4xl font-bold mb-10">
            Why Choose Us
          </h2>

       <div className="space-y-6">

  <div>
    <h3 className="text-xl font-semibold text-yellow-400">
      Premium Quality Materials
    </h3>
    <p className="text-gray-300 mt-2">
      We use only high-quality tiles, fabrics, blinds, and furnishing materials.
    </p>
  </div>

  <div>
    <h3 className="text-xl font-semibold text-yellow-400">
      Expert Installation Team
    </h3>
    <p className="text-gray-300 mt-2">
      Skilled professionals ensure flawless installation and finishing.
    </p>
  </div>

  <div>
    <h3 className="text-xl font-semibold text-yellow-400">
      Customized Designs
    </h3>
    <p className="text-gray-300 mt-2">
      Tailor-made solutions that perfectly match your interior style.
    </p>
  </div>

  <div>
    <h3 className="text-xl font-semibold text-yellow-400">
      Affordable Pricing
    </h3>
    <p className="text-gray-300 mt-2">
      Premium services at competitive prices without compromising quality.
    </p>
  </div>

  <div>
    <h3 className="text-xl font-semibold text-yellow-400">
      End-to-End Interior Solutions
    </h3>
    <p className="text-gray-300 mt-2">
      From tiling to curtaining and furnishing, we handle everything.
    </p>
  </div>

</div>
        </div>

        <div className="flex justify-center">
          <img
            src="/images/img.webp"
            alt="Recruitment"
            className="w-full max-w-lg rounded-2xl shadow-2xl"
          />
        </div>

      </div>
    </div>

    <div className="max-w-6xl mx-auto px-4 mb-20">

      <div className="bg-black/40 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10">

       <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
  Ready To Transform Your Space?
</h2>

     <p className="text-center text-gray-300 max-w-4xl mx-auto">
  Whether it's a new home, office renovation, showroom setup,
  or luxury furnishing project, our experts are ready to help.
</p>

<div className="flex justify-center mt-8">
  <button
  onClick={scrollToForm}
  className="bg-yellow-500 hover:bg-yellow-600 px-8 py-3 rounded-lg font-semibold transition"
>
  Get Free Consultation
</button>
</div>
      </div>

    </div>
    <div className="max-w-7xl mx-auto px-4 mb-20">

      <div className="text-center mb-12">
       <h2 className="text-4xl font-bold mb-4">
  Our Premium Interior Services
</h2>

<p className="text-gray-300 max-w-5xl mx-auto">
  We provide complete furnishing, tiling, curtaining and interior
  finishing solutions for residential, commercial and hospitality
  projects with exceptional craftsmanship and attention to detail.
</p>
      </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

  <div className="bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-yellow-500/20">
    <FaBorderAll className="text-yellow-400 text-5xl mb-4" />
    <h3 className="text-xl font-semibold mb-3">
      Floor & Wall Tiling
    </h3>
    <p className="text-gray-300">
      Designer ceramic, marble, granite and vitrified tile installation.
    </p>
  </div>

  <div className="bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-yellow-500/20">
    <FaWindowMaximize className="text-yellow-400 text-5xl mb-4" />
    <h3 className="text-xl font-semibold mb-3">
      Curtains & Blinds
    </h3>
    <p className="text-gray-300">
      Customized curtains, blinds, motorized blinds and window solutions.
    </p>
  </div>

  <div className="bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-yellow-500/20">
    <FaCouch className="text-yellow-400 text-5xl mb-4" />
    <h3 className="text-xl font-semibold mb-3">
      Home Furnishing
    </h3>
    <p className="text-gray-300">
      Upholstery, sofa fabrics, carpets, rugs and decorative furnishings.
    </p>
  </div>

  <div className="bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-yellow-500/20">
    <FaPaintRoller className="text-yellow-400 text-5xl mb-4" />
    <h3 className="text-xl font-semibold mb-3">
      Interior Finishing
    </h3>
    <p className="text-gray-300">
      Wall panels, false ceilings and premium finishing solutions.
    </p>
  </div>

  <div className="bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-yellow-500/20">
    <FaHome className="text-yellow-400 text-5xl mb-4" />
    <h3 className="text-xl font-semibold mb-3">
      Residential Projects
    </h3>
    <p className="text-gray-300">
      Complete interior solutions for villas, apartments and homes.
    </p>
  </div>

  <div className="bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-yellow-500/20">
    <FaTools className="text-yellow-400 text-5xl mb-4" />
    <h3 className="text-xl font-semibold mb-3">
      Commercial Interiors
    </h3>
    <p className="text-gray-300">
      Office, showroom and retail space furnishing & finishing works.
    </p>
  </div>

</div>
    </div>
<div className="max-w-7xl mx-auto px-4 mt-28 mb-24">

  <h2 className="text-center text-4xl font-bold mb-14">
    Our Working Process
  </h2>

  <div className="grid md:grid-cols-4 gap-8">

    <div className="text-center">
      <div className="w-20 h-20 mx-auto rounded-full bg-yellow-500 flex items-center justify-center text-3xl font-bold">
        1
      </div>

      <h3 className="text-xl font-semibold mt-5">
        Consultation
      </h3>

      <p className="text-gray-300 mt-3">
        Understand client requirements and project goals.
      </p>
    </div>

    <div className="text-center">
      <div className="w-20 h-20 mx-auto rounded-full bg-yellow-500 flex items-center justify-center text-3xl font-bold">
        2
      </div>

      <h3 className="text-xl font-semibold mt-5">
        Design Planning
      </h3>

      <p className="text-gray-300 mt-3">
        Customized furnishing and interior design concepts.
      </p>
    </div>

    <div className="text-center">
      <div className="w-20 h-20 mx-auto rounded-full bg-yellow-500 flex items-center justify-center text-3xl font-bold">
        3
      </div>

      <h3 className="text-xl font-semibold mt-5">
        Installation
      </h3>

      <p className="text-gray-300 mt-3">
        Professional tiling, curtaining and furnishing execution.
      </p>
    </div>

    <div className="text-center">
      <div className="w-20 h-20 mx-auto rounded-full bg-yellow-500 flex items-center justify-center text-3xl font-bold">
        4
      </div>

      <h3 className="text-xl font-semibold mt-5">
        Final Delivery
      </h3>

      <p className="text-gray-300 mt-3">
        Quality inspection and customer satisfaction assurance.
      </p>
    </div>

  </div>

</div>
    <div ref={formRef}  className="max-w-5xl mx-auto px-4 pt-24 pb-24">

      <div className="bg-black/40 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-cyan-500/20">

     <h2 className="text-center text-4xl font-bold mb-10">
  Request Free Consultation
</h2>
        <form onSubmit={handleSubmit}>
         <div className="grid md:grid-cols-2 gap-6">

  <div>
    <label className="block mb-2 text-sm font-semibold text-yellow-400">
      First Name
    </label>
    <input
      type="text"
      name="first_name"
      placeholder="Enter First Name"
      value={formData.first_name}
      onChange={handleChange}
      required
      className="w-full bg-transparent border border-gray-600 rounded-lg p-3"
    />
  </div>

  <div>
    <label className="block mb-2 text-sm font-semibold text-yellow-400">
      Last Name
    </label>
    <input
      type="text"
      name="last_name"
      placeholder="Enter Last Name"
      value={formData.last_name}
      onChange={handleChange}
      required
      className="w-full bg-transparent border border-gray-600 rounded-lg p-3"
    />
  </div>

  <div>
    <label className="block mb-2 text-sm font-semibold text-yellow-400">
      Phone Number
    </label>
    <input
      type="text"
      name="phone_number"
      placeholder="Enter Phone Number"
      value={formData.phone_number}
      onChange={handleChange}
      required
      className="w-full bg-transparent border border-gray-600 rounded-lg p-3"
    />
  </div>

  <div>
    <label className="block mb-2 text-sm font-semibold text-yellow-400">
      Email Address
    </label>
    <input
      type="email"
      name="email"
      placeholder="Enter Email Address"
      value={formData.email}
      onChange={handleChange}
      required
      className="w-full bg-transparent border border-gray-600 rounded-lg p-3"
    />
  </div>

  <div>
    <label className="block mb-2 text-sm font-semibold text-yellow-400">
      Place
    </label>
    <input
      type="text"
      name="place"
      placeholder="Enter Place"
      value={formData.place}
      onChange={handleChange}
      required
      className="w-full bg-transparent border border-gray-600 rounded-lg p-3"
    />
  </div>

 <div>
  <label className="block mb-2 text-sm font-semibold text-yellow-400">
    Service Required
  </label>

  <select
  name="service"
  value={formData.service}
  onChange={handleChange}
  className="w-full bg-black/30 border border-gray-600 rounded-lg p-3"
>
  <option value="Tiling">Tiling</option>
  <option value="Curtains & Blinds">Curtains & Blinds</option>
  <option value="Home Furnishing">Home Furnishing</option>
  <option value="Interior Finishing">Interior Finishing</option>
  <option value="Complete Interior Solution">
    Complete Interior Solution
  </option>
</select>
</div>

</div>

          <div className="text-center mt-8">
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 px-8 py-3 rounded-lg font-semibold transition"
            >
              Send to WhatsApp
            </button>
          </div>

        </form>

      </div>

    </div>
  <div className="bg-black/70 backdrop-blur-md py-12">

        <div className="max-w-7xl mx-auto px-5">

          <div className="grid md:grid-cols-3 gap-10">

            <div>

              <h3 className="text-xl font-bold text-yellow-400 mb-3">
                Kerala Branch
              </h3>

              <p className="leading-7">
                1st Floor - JK Building
                <br />
                Kannur, Kannur 670684
                <br />
                Phone: +91 90000 90000
              </p>

            

            </div>

            <div>

              <h3 className="text-xl font-bold text-yellow-400 mb-5">
                Quick Links
              </h3>

              <ul className="space-y-3">

                <li  className="cursor-pointer" onClick={() => navigate("/home")}>Home</li>
                <li  className="cursor-pointer" onClick={() => navigate("/about")}>About Us</li>
                <li className="cursor-pointer"  onClick={() => navigate("/services")}>Services</li>
                <li  className="cursor-pointer" onClick={() => navigate("/product")}>Products</li>
             

              </ul>

            </div>

            <div>

              <h3 className="text-xl font-bold text-yellow-400 mb-5">
                More Links
              </h3>

              <ul className="space-y-3">

                <li  className="cursor-pointer" onClick={() => navigate("/careers")}>Career</li>
                <li className="cursor-pointer"  onClick={() => navigate("/events")}>Events</li>
                <li  className="cursor-pointer" onClick={() => navigate("/blogs")}>Blogs</li>

              </ul>

            </div>

          </div>

        </div>

      </div>
  </div>

</section>
    </>
  );
}