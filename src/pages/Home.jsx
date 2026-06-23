import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

import {
  FaTools,
  FaOilCan,
  FaCogs,
  FaIndustry,
  FaCheckCircle,
  FaUsers,
  FaAward,
} from "react-icons/fa";
  const heroSlides = [
    {
      title: "Industrial Lubrication Systems",
      description:
        "Advanced automatic lubrication solutions for machine efficiency and reliability.",
      image: "/images/g2.png",
    },
    {
      title: "Sales & Service Support",
      description:
        "Installation, maintenance & complete lubrication system solutions.",
      image: "/images/lub.jpg",
    },
    {
      title: "Spare Parts Supply",
      description:
        "Genuine industrial lubrication components & Memolub systems.",
      image: "/images/sp.png",
    },
    {
      title: "Smart Maintenance Solutions",
      description:
        "Reduce downtime with advanced automated lubrication systems.",
      image: "/images/g1.jpg",
    },
  ];
const Home = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);



  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="bg-black text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative h-screen flex items-center justify-center text-center">

        {/* SLIDES */}
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
               alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}

        {/* TEXT */}
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-4xl px-6"
        >
          <h2 className="text-yellow-400 tracking-[6px] uppercase mb-4">
            Medley Lube Solutions
          </h2>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {heroSlides[currentSlide].title}
          </h1>

          <p className="text-gray-300 mb-8 text-lg">
            {heroSlides[currentSlide].description}
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-10 py-4 rounded-xl font-bold"
          >
            Get Service Quote
          </button>
        </motion.div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-20 bg-gradient-to-b from-black via-[#111] to-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-center">

          {[
            { icon: FaIndustry, value: "500+", label: "Projects" },
            { icon: FaUsers, value: "300+", label: "Clients" },
            { icon: FaCheckCircle, value: "100%", label: "Quality" },
            { icon: FaAward, value: "10+ Yrs", label: "Experience" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <item.icon className="text-yellow-400 text-4xl mx-auto mb-3" />
              <h3 className="text-3xl font-bold">{item.value}</h3>
              <p className="text-gray-400">{item.label}</p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="relative py-24 text-center"
        style={{
    backgroundImage: "url('/images/bg3.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}>

        {/* DARK GOLD INDUSTRIAL OVERLAY */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-yellow-400 mb-6">
            Why Choose Us
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto mb-12">
            We deliver industrial lubrication systems designed to improve machine life,
            reduce downtime, and increase production efficiency.
          </p>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              { icon: FaCogs, title: "System Installation" },
              { icon: FaTools, title: "Maintenance" },
              { icon: FaOilCan, title: "Lubrication Supply" },
              { icon: FaIndustry, title: "Spare Support" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-black/70 border border-yellow-500/30 p-6 rounded-xl hover:scale-105 transition"
              >
                <item.icon className="text-yellow-400 text-4xl mx-auto mb-3" />
                <h3 className="text-white font-semibold">{item.title}</h3>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 text-center bg-black/40 border-t border-yellow-500/20">

        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">
          Improve Machine Performance with Us
        </h2>

        <p className="text-white mt-4 mb-8">
          Professional lubrication solutions for industrial applications.
        </p>

        <button
          onClick={() => navigate("/contact")}
          className="bg-yellow-500 hover:bg-yellow-600 text-black px-10 py-4 rounded-xl font-bold"
        >
          Contact Now
        </button>

      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-black/80 backdrop-blur-md text-white pt-16 pb-8">

  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

    {/* BRAND */}
    <div>
      <h2 className="text-2xl font-bold text-yellow-400 mb-4">
        Medley Lube Solutions
      </h2>

      <p className="text-gray-300 leading-7 text-sm">
        Industrial lubrication systems provider specializing in automatic
        lubrication solutions, spare parts supply, and maintenance services
        for heavy industries.
      </p>

      <div className="mt-4 text-sm text-gray-400">
        📧 medleylube@gmail.com <br />
        📞 +91 90000 90000
      </div>
    </div>

    {/* QUICK LINKS */}
    <div>
      <h3 className="text-xl font-bold text-yellow-400 mb-5">
        Quick Links
      </h3>

      <ul className="space-y-3 text-gray-300">
        <li className="cursor-pointer hover:text-yellow-400" onClick={() => navigate("/home")}>
          Home
        </li>
        <li className="cursor-pointer hover:text-yellow-400" onClick={() => navigate("/about")}>
          About Us
        </li>
        <li className="cursor-pointer hover:text-yellow-400" onClick={() => navigate("/services")}>
          Services
        </li>
        <li className="cursor-pointer hover:text-yellow-400" onClick={() => navigate("/product")}>
          Products
        </li>
        <li className="cursor-pointer hover:text-yellow-400" onClick={() => navigate("/contact")}>
          Contact
        </li>
      </ul>
    </div>

    {/* SERVICES */}
    <div>
      <h3 className="text-xl font-bold text-yellow-400 mb-5">
        Our Services
      </h3>

      <ul className="space-y-3 text-gray-300 text-sm">
        <li>Automatic Lubrication Systems</li>
        <li>Centralized Lubrication Systems</li>
        <li>Installation & Commissioning</li>
        <li>Maintenance & Repair</li>
        <li>Spare Parts Supply</li>
      </ul>
    </div>

    {/* CONTACT CTA */}
    <div>
      <h3 className="text-xl font-bold text-yellow-400 mb-5">
        Get Support
      </h3>

      <p className="text-gray-300 text-sm leading-7">
        Need industrial lubrication solutions? Contact our technical team
        for expert consultation and service support.
      </p>

      <button
        onClick={() => navigate("/contact")}
        className="mt-5 bg-yellow-500 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition"
      >
        Contact Us
      </button>
    </div>

  </div>

  {/* BOTTOM BAR */}
  <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-500 text-sm">
    © {new Date().getFullYear()} Medley Lube Solutions. All Rights Reserved.
  </div>

</footer>
    </div>
  );
};

export default Home;