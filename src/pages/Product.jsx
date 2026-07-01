
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState,useRef } from "react";


export default function Product() {
  const navigate = useNavigate();
  const modalRef = useRef(null);
  const [showLincolnModal, setShowLincolnModal] = useState(false);
const openModal = () => {
  setShowModal(true);

  setTimeout(() => {
    modalRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    const body = document.getElementById("modalBody");
    if (body) body.scrollTop = 0;
  }, 100);
};
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);
const [showModal, setShowModal] = useState(false);
const lincolnProducts = [
  {
    name: "Single Line Lubrication Systems",
    description:
      "Automatic lubrication systems designed to deliver precise amounts of lubricant to multiple lubrication points from a single pump. Ideal for machine tools, steel plants, paper mills, mining equipment, and industrial machinery.",
    file: "/pdfs/single line lubrication system.pdf",
    image: "/images/single.png",
  },

  {
    name: "Progressive Lubrication Systems",
    description:
      "Lincoln Quicklub and SKF ProFlex progressive lubrication systems provide accurate lubricant distribution for medium-sized machines with multiple lubrication points. Suitable for construction, agriculture, mining, and transportation industries.",
    file: "/pdfs/progressive Lubrication system.pdf",
    image: "/images/pro.jpg",
  },

  {
    name: "P 205 Pump Unit",
    description:
      "High-pressure electrically operated piston pump capable of supplying grease or oil directly to lubrication points or centralized lubrication systems. Modular design with up to five pump elements.",
    file: "/pdfs/progressive Lubrication system.pdf",
    image: "/images/p20.png",
  },

  {
    name: "P 203 Pump Unit",
    description:
      "Compact piston pump designed for centralized lubrication applications requiring high reliability, low maintenance, and continuous operation.",
    file: "/pdfs/progressive Lubrication system.pdf",
    image: "/images/p203.png",
  },

  {
    name: "P 253 Smart Pump",
    description:
      "Smart lubrication pump with programmable control functions, ideal for industrial automation and centralized lubrication systems.",
    file: "/pdfs/progressive Lubrication system.pdf",
    image: "/images/p25.jpg",
  },

  {
    name: "KFG Pump Unit",
    description:
      "Electrically operated piston pump suitable for progressive lubrication systems using grease up to NLGI Grade 2 with excellent pressure performance.",
    file: "/pdfs/progressive Lubrication system.pdf",
    image: "/images/kfg.avif",
  },

  {
    name: "SSV Metering Devices",
    description:
      "Progressive metering devices that accurately distribute lubricant to multiple lubrication points while allowing system monitoring and reliable operation.",
    file: "/pdfs/progressive Lubrication system.pdf",
    image: "/images/ssv.webp",
  },

  {
    name: "CLP Smart Controller",
    description:
      "Electronic lubrication controller for monitoring pump cycles, lubrication intervals, alarms, and maintenance schedules.",
    file: "/pdfs/progressive Lubrication system.pdf",
    image: "/images/smart.png",
  },

  {
    name: "Pressure Sensors",
    description:
      "Pressure monitoring devices including DSA, DSB, DSD and DSC series for automatic lubrication systems, ensuring proper lubricant delivery and system safety.",
    file: "/pdfs/single line lubrication system.pdf",
    image: "/images/pre.png",
  },

  {
    name: "Flow Monitoring Devices",
    description:
      "Flow sensors and monitoring devices used to verify lubricant flow and detect blockages in centralized lubrication systems.",
    file: "/pdfs/single line lubrication system.pdf",
    image: "/images/flow.png",
  },

  {
    name: "Solenoid Valves",
    description:
      "High-performance lubrication solenoid valves designed to control lubricant flow in automatic lubrication systems with excellent reliability.",
    file: "/pdfs/single line lubrication system.pdf",
    image: "/images/val.png",
  },

  {
    name: "Control Units",
    description:
      "Advanced lubrication controllers including LMC 101, LMC 2, LMC 301, EXZT, ST-102 and ST-2240 for complete lubrication system automation.",
    file: "/pdfs/single line lubrication system.pdf",
    image: "/images/cu.png",
  },
];
const pdfDocuments = [
  {
    name: "Memolub EPS",
    description:
      "Electrically driven automatic lubricator designed for continuous lubrication in industrial environments.",

    features: [
      "24V DC powered operation",
      "Supports grease and oil lubrication",
      "Precise lubrication control",
      "Low maintenance design",
      "Suitable for single and multipoint lubrication",
    ],

    applications:
      "Steel plants, cement industries, conveyors, crushers, pumps, motors and industrial machinery.",

    file: "/pdfs/Memolub_EPS.pdf",
  },

  {
    name: "Memolub HPS",

    description:
      "High pressure lubrication solution developed for demanding industrial applications requiring reliable grease delivery.",

    features: [
      "High pressure output",
      "Long service life",
      "Automatic lubrication cycles",
      "Reduces maintenance downtime",
      "Simple installation",
    ],

    applications:
      "Mining equipment, heavy machinery, bearings, conveyors, cement plants and steel industries.",

    file: "/pdfs/Memolub_HPS.pdf",
  },

  {
    name: "Memolub ONE",

    description:
      "Compact automatic lubricator ideal for bearings, motors and chain drives requiring consistent lubrication.",

    features: [
      "Compact design",
      "Easy installation",
      "Reliable lubricant dispensing",
      "Battery operated",
      "Reduced maintenance cost",
    ],

    applications:
      "Electric motors, pumps, fans, chain drives, bearings and industrial production equipment.",

    file: "/pdfs/Memolub_ONE.pdf",
  },
];

const [showSKFModal, setShowSKFModal] = useState(false);

const skfDocuments = [
  {
    name: " Deep Groove Ball Bearings",
    description:
      "High-performance bearings designed for reliability, low friction and long service life.",

    file: "/pdfs/SKF_Deep_Groove_Detailed_new.pdf",
  },

  {
    name: " Plummer Block Housings",
    description:
      "Robust bearing housing solutions suitable for heavy industrial applications.",

    file: "/pdfs/SKF_Plummer_Block_Detailed.pdf",
  },

  {
    name: " Mounted Bearing Units",
    description:
      "Pre-assembled bearing units providing easy installation and reduced maintenance.",

    file: "/pdfs/Mounted_Bearing_Units.pdf",
  },
   
  {
    name: "Angular Contact Ball Bearings",
    description:
      "Designed for combined radial and axial loads in high-speed applications.",
      file: "/pdfs/Angular_Contact_Ball_Bearings.pdf",
  },
  {
    name: "Self-Aligning Ball Bearings",
    description:
      "Automatically compensate for shaft misalignment and shaft deflection.",
      file: "/pdfs/Self_Aligning_Ball_Bearings.pdf",
  },
  {
    name: "Four-Point Contact Ball Bearings",
    description:
      "Support axial loads in both directions with a compact design.",
      file: "/pdfs/Four_Point_Contact_Ball_Bearings.pdf",
  },
  {
    name: "Cylindrical Roller Bearings",
    description:
      "High radial load capacity and excellent performance at high speeds.",
      file: "/pdfs/Cylindrical_Roller_Bearings.pdf",
  },
  {
    name: "Needle Roller Bearings",
    description:
      "Compact bearings with high load carrying capacity in limited space.",
      file: "/pdfs/Needle_Roller_Bearings.pdf",
  },
  {
    name: "Tapered Roller Bearings",
    description:
      "Ideal for combined radial and axial loads in heavy-duty applications.",
      file: "/pdfs/Tapered_Roller_Bearings.pdf",
  },
  {
    name: "Spherical Roller Bearings",
    description:
      "Self-aligning bearings designed for heavy loads and harsh environments.",
      file: "/pdfs/Spherical_Roller_Bearings.pdf",
  },
  {
    name: "CARB Toroidal Roller Bearings",
    description:
      "Accommodate shaft displacement while carrying heavy radial loads.",
      file: "/pdfs/CARB_Toroidal_Roller_Bearings.pdf",
  },
  {
    name: "Thrust Ball Bearings",
    description:
      "Designed primarily for axial load applications at moderate speeds.",
      file: "/pdfs/Thrust_Ball_Bearings.pdf",
  },
  {
    name: "Cylindrical Roller Thrust Bearings",
    description:
      "Handle heavy axial loads in demanding industrial equipment.",
      file: "/pdfs/Cylindrical_Roller_Thrust_Bearings.pdf",
  },
  {
    name: "Spherical Roller Thrust Bearings",
    description:
      "Support extremely heavy axial loads and some radial loads.",
      file: "/pdfs/Spherical_Roller_Thrust_Bearings.pdf",
  },
  {
    name: "Hybrid Bearings",
    description:
      "Ceramic rolling elements provide high speed and electrical insulation.",
      file: "/pdfs/Hybrid_Bearings.pdf",
  },
  {
    name: "INSOCOAT Bearings",
    description:
      "Electrically insulated bearings for motors and generators.",
      file: "/pdfs/INSOCOAT_Bearings.pdf",
  },
  {
    name: "NoWear Bearings",
    description:
      "Special coated bearings offering reduced wear and longer service life.",
      file: "/pdfs/NoWear_Bearings.pdf",
  },
  {
    name: "High Temperature Bearings",
    description:
      "Designed for continuous operation in elevated temperature environments.",
      file: "/pdfs/High_Temperature_Bearings.pdf",
  },
  {
    name: "Mounted Bearing Units",
    description:
      "Pre-assembled bearing and housing units for easy installation.",
      file: "/pdfs/SKF_Mounted_Bearing_Units_Detailed.pdf",
  },
  {
    name: "Bearing Housings",
    description:
      "Support structures that securely mount and protect bearings.",
      file: "/pdfs/SKF_Mounted_Bearing_Units_Detailed.pdf",
  },
  {
    name: "Split Roller Bearings",
    description:
      "Quick installation and replacement without removing surrounding equipment.",
      file: "/pdfs/Split_Roller_Bearings.pdf",
  },
  {
    name: "Slewing Bearings",
    description:
      "Large diameter bearings used in cranes, excavators and rotating platforms.",
      file: "/pdfs/Slewing_Bearings.pdf",
  },
];
  return (
    <>
    <section className="relative py-14 overflow-hidden min-h-[calc(100vh-370px)]">
       
      {/* Background Video */}
     <div className="fixed top-0 left-0 w-full h-full -z-20">
  <img
    src="/images/bg3.jpg"
    alt="Background"
    className="w-full h-full object-cover"
  />
</div>

      <div className="fixed inset-0 bg-black/60 -z-10" />


      <div className="relative z-10">

        {/* Hero Section */}
        <div className="text-center pt-16 pb-10 px-4">
       <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
  Complete Industrial
  <span className="block text-yellow-400">
    Lubrication & Reliability Partner
  </span>
</h1>

<p className="text-xl text-gray-300 max-w-5xl mx-auto leading-8">
  From Memolub automatic lubrication systems and lubrication accessories
  to spare parts, maintenance support and engineering services,
  Medley Solution delivers comprehensive industrial solutions trusted
  by manufacturing, mining, cement, steel and power industries.
</p>
        </div>

        {/* Product Cards */}
  <div className="max-w-7xl mx-auto px-5 mb-16">
  <div className="grid lg:grid-cols-2 gap-10 items-center bg-black/60 backdrop-blur-md rounded-3xl p-8 border border-yellow-500/20">

    <div>
      <h2 className="text-5xl font-bold text-yellow-400 mb-5">
        Memolub Automatic Lubrication Systems
      </h2>

      <p className="text-gray-300 leading-8 mb-6">
        Complete sales, installation, maintenance and spare support
        for Memolub automatic lubrication systems used across
        cement, steel, mining, power plants and manufacturing industries.
      </p>

    <div className="flex flex-wrap gap-4">
  {/* <button
    onClick={openModal}
    className="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-gray-200"
  >
    Know More
  </button> */}

      <button
        onClick={openModal}
        className="
          group
          relative
          overflow-hidden
          px-8 py-4
          rounded-xl
          font-bold
          text-black
          bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500
          shadow-lg shadow-yellow-500/40
          hover:shadow-yellow-400/90
          hover:scale-105
          active:scale-95
          transition-all
          duration-300
          animate-pulse
        "
      >
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:translate-x-full transition-transform duration-1000"></span>

        <span className="relative flex items-center gap-2">
          Know More
          <span className="text-lg group-hover:translate-x-2 transition-transform duration-300">
            →
          </span>
        </span>
      </button>

  <button
    onClick={() => navigate("/contact")}
    className="bg-white hover:bg-yellow-600 text-black px-8 py-4 rounded-xl font-bold"
  >
    Contact Our Experts
  </button>
</div>
    </div>

    <div>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="rounded-2xl shadow-2xl w-full h-[350px] object-cover"
      >
        <source src="/videos/memolub.mp4" type="video/mp4" />
      </video>
    </div>

  </div>
</div>
{/* SKF Bearing & Housing */}

<div className="max-w-7xl mx-auto px-5 mb-16">
<div className="grid lg:grid-cols-2 gap-10 items-center bg-black/60 backdrop-blur-md rounded-3xl p-8 border border-yellow-500/20">

  {/* Left Content */}
  <div>
    <h2 className="text-5xl font-bold text-yellow-400 mb-5">
      Lincoln Automatic Lubrication Systems
    </h2>

    <p className="text-gray-300 leading-8 mb-6">
      Complete supply, installation, commissioning and technical support for
      Lincoln centralized lubrication systems. We provide progressive,
      single-line, multi-line lubrication systems, pumps, metering devices,
      controllers and accessories for industrial and mobile equipment.
    </p>

    <div className="grid grid-cols-2 gap-3 mb-6 text-sm">
      <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3 text-yellow-300">
        ✓ Progressive Systems
      </div>

      <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3 text-yellow-300">
        ✓ Single Line Systems
      </div>

      <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3 text-yellow-300">
        ✓ Lincoln Pumps
      </div>

      <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3 text-yellow-300">
        ✓ Smart Controllers
      </div>
    </div>

    <div className="flex flex-wrap gap-4">

      <button
         onClick={() => setShowLincolnModal(true)}
        className="
          group
          relative
          overflow-hidden
          px-8 py-4
          rounded-xl
          font-bold
          text-black
          bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500
          shadow-lg shadow-yellow-500/40
          hover:shadow-yellow-400/90
          hover:scale-105
          active:scale-95
          transition-all
          duration-300
          animate-pulse
        "
      >
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:translate-x-full transition-transform duration-1000"></span>

        <span className="relative flex items-center gap-2">
          Know More
          <span className="text-lg group-hover:translate-x-2 transition-transform duration-300">
            →
          </span>
        </span>
      </button>

      <button
        onClick={() => navigate("/contact")}
        className="bg-white hover:bg-yellow-600 text-black px-8 py-4 rounded-xl font-bold transition-all duration-300"
      >
        Contact Our Experts
      </button>

    </div>
  </div>

  {/* Right Side Video/Image */}
  <div className="relative w-full h-[350px]">

  {/* Image */}
  <img
    src="/images/lincon.png"
    alt="Lincoln Automatic Lubrication System"
    className="rounded-2xl shadow-2xl w-full h-full object-cover"
  />

  {/* Golden Overlay */}
  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-black/80 via-black/40 to-yellow-700/50" />

  {/* Floating Badge */}
  {/* <div className="absolute top-5 left-5 bg-yellow-500 text-black font-bold px-4 py-2 rounded-full shadow-lg animate-bounce">
    Lincoln Solutions
  </div> */}

  {/* Bottom Info */}
  <div className="absolute bottom-5 left-5 right-5">
    <div className="bg-black/60 backdrop-blur-md rounded-xl p-4 border border-yellow-500/20">
      <h3 className="text-yellow-400 font-bold text-lg mb-2">
        Automatic Lubrication Experts
      </h3>

      <p className="text-gray-300 text-sm">
        Improve machine reliability, reduce maintenance costs and extend
        equipment life with Lincoln lubrication solutions.
      </p>
    </div>
  </div>

</div>

</div>
</div>
<div className="max-w-7xl mx-auto px-5 mb-16">
  <div className="grid lg:grid-cols-2 gap-10 items-center bg-black/60 backdrop-blur-md rounded-3xl p-8 border border-yellow-500/20">

    <div>
      <h2 className="text-5xl font-bold text-yellow-400 mb-5">
        SKF Bearings & Housing Solutions
      </h2>

      <p className="text-gray-300 leading-8 mb-6">
        Complete sales, technical support, installation assistance and spare
        supply for SKF bearings, bearing housings, mounted units and industrial
        rotating equipment solutions.
      </p>

      <div className="flex flex-wrap gap-4">
        {/* <button
          onClick={() => setShowSKFModal(true)}
          className="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-gray-200"
        >
          Know More
        </button> */}
<button
  onClick={() => setShowSKFModal(true)}
  className="
    group
    relative
    overflow-hidden
    px-8 py-4
    rounded-xl
    font-bold
    text-black
    bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500
    shadow-lg shadow-yellow-500/40
    hover:shadow-yellow-400/90
    hover:scale-105
    active:scale-95
    transition-all
    duration-300
    animate-pulse
  "
>
  {/* Shine Effect */}
  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:translate-x-full transition-transform duration-1000"></span>

  <span className="relative flex items-center gap-2">
    Know More
    <span className="text-lg group-hover:translate-x-2 transition-transform duration-300">
      →
    </span>
  </span>
</button>
        <button
          onClick={() => navigate("/contact")}
          className="bg-white hover:bg-yellow-600 text-black px-8 py-4 rounded-xl font-bold"
        >
          Contact Our Experts
        </button>
      </div>
    </div>

   <div className="relative w-full h-[350px]">

  <video
    autoPlay
    muted
    loop
    playsInline
    className="rounded-2xl shadow-2xl w-full h-full object-cover"
  >
    <source src="/videos/bearing.mp4" type="video/mp4" />
  </video>

  {/* Golden Overlay */}
  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-black/80 via-black/40 to-yellow-700/50" />

  {/* Text Overlay */}
 

</div>
  </div>
</div>
      </div>
{showModal && (
  <div className="fixed inset-0 z-[9999]">

    {/* Backdrop */}
    <div
      className="absolute inset-0 bg-black/80 backdrop-blur-sm"
      onClick={() => setShowModal(false)}
    />

    {/* Modal Container */}
 <div className="relative h-full py-6 px-4 flex justify-center items-start">
  <div className="flex justify-center">

    <div
  ref={modalRef}
  className="w-full max-w-5xl bg-[#111] border border-yellow-500/30 rounded-2xl shadow-2xl flex flex-col"
>
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 bg-[#111] border-b border-yellow-500/20 px-6 py-4 flex items-center justify-between rounded-t-2xl">

          <h2 className="text-xl md:text-2xl font-bold text-yellow-400">
            Memolub Product Documents
          </h2>

          <button
            onClick={() => setShowModal(false)}
            className="w-10 h-10 rounded-full hover:bg-white/10 text-white text-2xl"
          >
            ×
          </button>
        </div>

        {/* Scrollable Content */}
        <div
          id="modalBody"
       className="p-6 overflow-y-auto max-h-[75vh] hide-scrollbar"
        >

          {/* Intro */}
          <div className="mb-6 p-5 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
            <h3 className="text-lg font-semibold text-yellow-400 mb-2">
              Product Information Center
            </h3>

            <p className="text-gray-300 leading-7">
              Explore technical datasheets, applications and downloadable
              catalogues for Memolub lubrication systems.
            </p>
          </div>

          {/* Documents */}
      {/* Documents */}
<div className="grid md:grid-cols-2 gap-5">
  {pdfDocuments.map((pdf, index) => (
    <div
      key={index}
      className="rounded-2xl border border-yellow-500/20 bg-black/40 p-5 hover:bg-black/60 hover:border-yellow-400 transition duration-300"
    >
      <h3 className="text-lg font-bold text-yellow-400 mb-2">
        {pdf.name}
      </h3>

      <p className="text-gray-300 text-sm mb-4 leading-6">
        {pdf.description}
      </p>

      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href={pdf.file}
          target="_blank"
          rel="noreferrer"
          className="flex-1 text-center bg-white text-black py-2 rounded-lg font-semibold hover:bg-gray-200"
        >
          Preview
        </a>

        <a
          href={pdf.file}
          download
          className="flex-1 text-center bg-yellow-500 hover:bg-yellow-600 text-black py-2 rounded-lg font-semibold"
        >
          Download
        </a>
      </div>
    </div>
  ))}
</div>

{/* =======================================
    OFFICIAL MEMOLUB SECTION
======================================= */}
<div className="mt-10 rounded-3xl border border-yellow-500/20 bg-gradient-to-br from-[#1b1b1b] to-[#0d0d0d] overflow-hidden">

  <div className="bg-gradient-to-r from-yellow-500/20 to-transparent px-6 py-5 border-b border-yellow-500/20">
    <h3 className="text-2xl md:text-3xl font-bold text-yellow-400">
      Learn More From Official Memolub
    </h3>

    <p className="text-gray-300 mt-2">
      Discover advanced lubrication technologies, industrial applications,
      technical documentation and product innovations from Memolub.
    </p>
  </div>

  <div className="p-6">

    <div className="grid md:grid-cols-3 gap-5 mb-8">

    

    </div>

    <div className="flex flex-wrap gap-4">

      <a
        href="https://www.memolub.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-xl font-bold transition"
      >
        Visit Official Website →
      </a>

      <button
        onClick={() => navigate("/contact")}
        className="bg-white hover:bg-gray-200 text-black px-6 py-3 rounded-xl font-bold transition"
      >
        Contact Our Experts
      </button>

    </div>

  </div>
</div>

        </div>



      </div>
      </div>
    </div>
  </div>
)}
      {/* Footer */}
   {showSKFModal && (
  <div className="fixed inset-0 z-[9999]">

    <div
      className="absolute inset-0 bg-black/80 backdrop-blur-sm"
      onClick={() => setShowSKFModal(false)}
    />

    <div className="relative h-full py-6 px-4 flex justify-center items-start">
      <div className="w-full max-w-5xl bg-[#111] border border-yellow-500/30 rounded-2xl shadow-2xl">

        <div className="sticky top-0 z-20 bg-[#111] border-b border-yellow-500/20 px-6 py-4 flex items-center justify-between rounded-t-2xl">
          <h2 className="text-xl md:text-2xl font-bold text-yellow-400">
            SKF Bearing & Housing Documents
          </h2>

          <button
            onClick={() => setShowSKFModal(false)}
            className="w-10 h-10 rounded-full hover:bg-white/10 text-white text-2xl"
          >
            ×
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[75vh]">

          <div className="mb-6 p-5 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
            <h3 className="text-lg font-semibold text-yellow-400 mb-2">
              SKF Product Information Center
            </h3>

            <p className="text-gray-300 leading-7">
              Explore SKF bearing solutions, mounted units, housing systems,
              industrial reliability products and technical documentation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {skfDocuments.map((pdf, index) => (
              <div
                key={index}
                className="rounded-2xl border border-yellow-500/20 bg-black/40 p-5"
              >
                <h3 className="text-lg font-bold text-yellow-400 mb-2">
                  {pdf.name}
                </h3>

                <p className="text-gray-300 text-sm mb-4 leading-6">
                  {pdf.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={pdf.file}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center bg-white text-black py-2 rounded-lg font-semibold"
                  >
                    Preview
                  </a>

                  <a
                    href={pdf.file}
                    download
                    className="flex-1 text-center bg-yellow-500 hover:bg-yellow-600 text-black py-2 rounded-lg font-semibold"
                  >
                    Download
                  </a>
                </div>
              </div>
            ))}
            
          </div>

          <div className="mt-10 rounded-3xl border border-yellow-500/20 bg-gradient-to-br from-[#1b1b1b] to-[#0d0d0d] overflow-hidden">
            <div className="bg-gradient-to-r from-yellow-500/20 to-transparent px-6 py-5 border-b border-yellow-500/20">
              <h3 className="text-2xl md:text-3xl font-bold text-yellow-400">
                Learn More From SKF
              </h3>

              <p className="text-gray-300 mt-2">
                Discover bearings, housings, mounted units, maintenance tools
                and industrial reliability solutions.
              </p>
            </div>

            <div className="p-6">
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.skf.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-xl font-bold"
                >
                  Visit Official Website →
                </a>

                <button
                  onClick={() => navigate("/contact")}
                  className="bg-white hover:bg-gray-200 text-black px-6 py-3 rounded-xl font-bold"
                >
                  Contact Our Experts
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  </div>
)}
{showLincolnModal && (
  <div className="fixed inset-0 z-[9999]">

    {/* Backdrop */}
    <div
      className="absolute inset-0 bg-black/80 backdrop-blur-sm"
      onClick={() => setShowLincolnModal(false)}
    />

    <div className="relative h-full py-6 px-4 flex justify-center items-start">

      <div className="w-full max-w-6xl bg-[#111] border border-yellow-500/30 rounded-2xl shadow-2xl">

        {/* Header */}
        <div className="sticky top-0 z-20 bg-[#111] border-b border-yellow-500/20 px-6 py-4 flex items-center justify-between rounded-t-2xl">

          <h2 className="text-2xl font-bold text-yellow-400">
            Lincoln Lubrication Products
          </h2>

          <button
            onClick={() => setShowLincolnModal(false)}
            className="w-10 h-10 rounded-full hover:bg-white/10 text-white text-2xl"
          >
            ×
          </button>

        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto max-h-[75vh]">

          {/* Intro */}
          <div className="mb-8 bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6">

            <h3 className="text-xl font-bold text-yellow-400 mb-3">
              Lincoln Automatic Lubrication Systems
            </h3>

            <p className="text-gray-300 leading-7">
              Lincoln provides centralized lubrication solutions for heavy
              industries including steel plants, mining, construction,
              cement, power generation and manufacturing industries.
              Explore our pumps, lubrication systems, controllers and
              accessories below.
            </p>

          </div>

          {/* Product Cards */}

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

            {lincolnProducts.map((product, index) => (

              <div
                key={index}
                className="bg-black/40 border border-yellow-500/20 rounded-2xl overflow-hidden hover:border-yellow-400 transition duration-300"
              >

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-contain bg-white p-5"
                />

                <div className="p-5">

                  <h3 className="text-xl font-bold text-yellow-400 mb-3">
                    {product.name}
                  </h3>

                  <p className="text-gray-300 text-sm leading-6 mb-5">
                    {product.description}
                  </p>

                  <div className="flex gap-3">

                    <a
                      href={product.file}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 bg-white text-black py-2 rounded-lg font-semibold text-center hover:bg-gray-200"
                    >
                      Preview
                    </a>

                    <a
                      href={product.file}
                      download
                      className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-black py-2 rounded-lg font-semibold text-center"
                    >
                      Download
                    </a>

                  </div>

                </div>

              </div>

            ))}

          </div>

          {/* Footer */}

          <div className="mt-10 rounded-2xl bg-gradient-to-r from-yellow-500/20 to-transparent border border-yellow-500/20 p-6">

            <h3 className="text-2xl font-bold text-yellow-400 mb-3">
              Learn More From Lincoln
            </h3>

            <p className="text-gray-300 mb-6">
              Explore Lincoln's complete range of centralized lubrication
              systems, pumps, metering devices, controllers and industrial
              lubrication accessories.
            </p>

            <div className="flex flex-wrap gap-4">

              <a
                href="https://www.skf.com/group/products/lubrication-managemenhttps://www.skf.com/in/products/lubrication-management/lincolnindustrialt"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-xl font-bold"
              >
                Visit Official Website →
              </a>

              <button
                onClick={() => navigate("/contact")}
                className="bg-white hover:bg-gray-200 text-black px-6 py-3 rounded-xl font-bold"
              >
                Contact Our Experts
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>
)}
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
</>
  );
}