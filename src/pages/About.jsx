import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaOilCan,
  FaCogs,
  FaTools,
  FaIndustry,
} from "react-icons/fa";

export default function About() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const services = [
    {
      icon: <FaOilCan />,
      title: "Automatic Lubrication Systems",
      desc: "Single-point and multi-point lubrication systems for industrial machinery.",
    },
    {
      icon: <FaCogs />,
      title: "Installation & Commissioning",
      desc: "Complete system design, installation and commissioning support.",
    },
    {
      icon: <FaTools />,
      title: "Maintenance Services",
      desc: "Preventive maintenance, repair and troubleshooting support.",
    },
    {
      icon: <FaIndustry />,
      title: "Spare Parts Supply",
      desc: "Genuine lubrication components, pumps, fittings and accessories.",
    },
  ];

  const industries = [
    "Steel Industry",
    "Cement Plants",
    "Mining Equipment",
    "Power Plants",
    "Paper Mills",
    "Heavy Engineering",
    "Manufacturing Units",
    "Automobile Industry",
  ];

  return (
    <>
      <Navbar />

      <div className="relative min-h-screen text-white overflow-hidden">

        {/* BACKGROUND */}
        <div className="fixed inset-0 -z-20">
          <img
           src="/images/bg3.jpg"
            className="w-full h-full object-cover"
            alt="industrial background"
          />
        </div>
        <div className="fixed inset-0 bg-black/60 -z-10" />

        {/* HERO */}
        <section className="text-center py-24 px-6">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-yellow-400"
          >
            Medley Lube Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-300 mt-6 max-w-4xl mx-auto text-lg leading-8"
          >
            Industrial lubrication systems provider specializing in automatic lubrication,
            centralized systems, and spare parts solutions for improving machine reliability
            and reducing downtime.
          </motion.p>
        </section>

        {/* WHO WE ARE */}
        <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">

          <motion.img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
            className="rounded-2xl shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          />

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-yellow-400 mb-5">
              Who We Are
            </h2>

            <p className="text-gray-300 leading-8 mb-4">
              Medley Lube Solutions is a professional industrial engineering company
              focused on delivering advanced lubrication systems for modern industries.
              We provide complete solutions including design, supply, installation,
              commissioning and maintenance.
            </p>

            <p className="text-gray-300 leading-8">
              Our systems are widely used in steel plants, cement industries, mining,
              power plants and heavy machinery sectors where continuous lubrication
              is essential for smooth operation.
            </p>
          </motion.div>
        </section>

        {/* WHY LUBRICATION MATTERS */}
        <section className="max-w-7xl mx-auto px-6 py-16">

          <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">
            Why Industrial Lubrication Matters
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-black/20 p-6 rounded-xl">
              <h3 className="text-yellow-400 font-bold text-xl mb-3">
                Reduce Downtime
              </h3>
              <p className="text-gray-300">
                Prevent unexpected breakdowns and improve machine uptime.
              </p>
            </div>

            <div className="bg-black/20 p-6 rounded-xl">
              <h3 className="text-yellow-400 font-bold text-xl mb-3">
                Increase Machine Life
              </h3>
              <p className="text-gray-300">
                Proper lubrication reduces wear and extends equipment life.
              </p>
            </div>

            <div className="bg-black/20 p-6 rounded-xl">
              <h3 className="text-yellow-400 font-bold text-xl mb-3">
                Improve Efficiency
              </h3>
              <p className="text-gray-300">
                Automated lubrication ensures accuracy and consistency.
              </p>
            </div>

          </div>
        </section>

        {/* SERVICES */}
        <section className="max-w-7xl mx-auto px-6 py-16">

          <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">
            Our Core Services
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            {services.map((item, i) => (
              <motion.div
                key={i}
                className="bg-white/10 p-6 rounded-2xl text-center hover:scale-105 transition"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-yellow-400 text-5xl mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-gray-300 text-sm mt-2">{item.desc}</p>
              </motion.div>
            ))}

          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="max-w-7xl mx-auto px-6 py-16">

          <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">
            Industries We Serve
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">

            {industries.map((item, i) => (
              <motion.div
                key={i}
                className="bg-black/40 p-5 rounded-xl border border-yellow-500/20"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                {item}
              </motion.div>
            ))}

          </div>
        </section>

        {/* TRUST SECTION */}
        <section className="max-w-7xl mx-auto px-6 py-16 text-center">

          <h2 className="text-4xl font-bold text-yellow-400 mb-6">
            Quality & Reliability
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto leading-8">
            We follow strict industrial engineering standards to ensure
            high performance, durability and reliability in all lubrication systems.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-10">

            <div className="bg-black/40 p-6 rounded-xl">Industrial Grade Systems</div>
            <div className="bg-black/40 p-6 rounded-xl">High Performance Design</div>
            <div className="bg-black/40 p-6 rounded-xl">Trusted Engineering Support</div>

          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-20  px-6">

          <h2 className="text-3xl font-bold text-yellow-400">
            Need Reliable Lubrication Solutions?
          </h2>

          <p className="text-gray-300 mt-4">
            Contact Medley Lube Solutions for expert industrial support.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="mt-6 bg-yellow-500 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-600"
          >
            Get Consultation
          </button>

        </section>

      </div>
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
    </>
  );
}