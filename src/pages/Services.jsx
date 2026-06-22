import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import {
  FaOilCan,
  FaCogs,
  FaTools,
  FaIndustry,
  FaBoxes,
  FaWrench,
  FaClock,
  FaHeadset,
} from "react-icons/fa";

export default function Services() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const services = [
    {
      icon: FaOilCan,
      title: "Lubrication System Sales",
      description:
        "We supply premium automatic lubrication systems including Memolub EPS, HPS and single/multi-point systems for industrial machinery.",
    },
    {
      icon: FaCogs,
      title: "System Installation",
      description:
        "Complete installation and commissioning of centralized lubrication systems for steel, cement, mining and manufacturing industries.",
    },
    {
      icon: FaTools,
      title: "Maintenance & Service",
      description:
        "Preventive maintenance, breakdown support, system inspection and performance optimization services.",
    },
    {
      icon: FaBoxes,
      title: "Spare Parts Supply",
      description:
        "Genuine Memolub spare parts, pumps, controllers, fittings, tubes and accessories for all lubrication systems.",
    },
    {
      icon: FaWrench,
      title: "Repair & Upgradation",
      description:
        "Repairing existing lubrication systems and upgrading to advanced automatic lubrication technology.",
    },
    {
      icon: FaIndustry,
      title: "Industrial Solutions",
      description:
        "Customized lubrication solutions for heavy machinery and continuous production industries.",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
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
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-yellow-400"
        >
          Our Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-white mt-6 max-w-4xl mx-auto leading-8"
        >
          Medley Lube Solutions provides complete industrial lubrication systems
          including sales, installation, maintenance, and spare parts support.
        </motion.p>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-8">

          {services.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-black/10 border border-yellow-500/20 p-8 rounded-2xl backdrop-blur-md"
            >
              <item.icon className="text-yellow-400 text-5xl mb-5" />

              <h3 className="text-xl font-bold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-300 text-sm leading-7">
                {item.description}
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* MEMOLUB SUPPORT SECTION */}
      <section className="bg-black/60 py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <motion.img
            src="/images/memo.png"
          
            className="rounded-2xl shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          />

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-yellow-400 mb-5">
              Memolub System Support
            </h2>

            <p className="text-gray-300 leading-8 mb-4">
              We provide complete support for Memolub lubrication systems including
              installation, troubleshooting, refill service and performance optimization.
            </p>

            <p className="text-gray-300 leading-8">
              Our team ensures uninterrupted lubrication performance for steel plants,
              cement factories, mining equipment and industrial machinery.
            </p>

            <button
              onClick={() => navigate("/contact")}
              className="mt-6 bg-yellow-500 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-600"
            >
              Contact Experts
            </button>
          </motion.div>

        </div>
      </section>

      {/* 24/7 SUPPORT SECTION (NEW ADDED) */}
     {/* 24/7 SUPPORT SECTION (WITH IMAGES) */}
<section className="relative py-24 px-6 overflow-hidden">

  {/* BACKGROUND IMAGE */}
  <div className="absolute inset-0 -z-10">
    <img
      src="/images/bg3.jpg"
      alt="support background"
      className="w-full h-full object-cover"
    />
  </div>

  {/* DARK + GOLD OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-yellow-900/20"></div>

  <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT TEXT */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <FaClock className="text-yellow-400 text-6xl mb-6" />

      <h2 className="text-4xl font-bold text-yellow-400 mb-6">
        We Offer 24/7 Service Support
      </h2>

      <p className="text-gray-300 leading-8 mb-6">
        At Medley Lube Solutions, our service team is available 24/7 to support you
        with technical expertise, troubleshooting, maintenance planning and emergency assistance.
      </p>

      <p className="text-gray-300 leading-8 mb-8">
        From installation to diagnostics, overhaul and condition monitoring,
        we ensure your lubrication systems run at maximum efficiency — anytime, anywhere.
      </p>

      <button
        onClick={() => navigate("/contact")}
        className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-600"
      >
        Get 24/7 Support
      </button>
    </motion.div>

    {/* RIGHT IMAGE GRID */}
    <div className="grid grid-cols-2 gap-4">

      <motion.img
        src="/images/eng.jpg"
        alt="service team"
        className="rounded-xl h-48 w-full object-cover border border-yellow-500/30"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      />

      <motion.img
        src="/images/ind.jpg"
        alt="industrial support"
        className="rounded-xl h-48 w-full object-cover border border-yellow-500/30 mt-8"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      />

      <motion.img
        src="/images/en1.jpg"
        alt="maintenance work"
        className="rounded-xl h-48 w-full object-cover border border-yellow-500/30"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      />

      <motion.img
        src="/images/ser.jpg"
        alt="engineer support"
        className="rounded-xl h-48 w-full object-cover border border-yellow-500/30 mt-8"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      />

    </div>

  </div>
</section>
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
}