import React from "react";
import AdminLayout from "../admin/AdminLayout";
import {
  FaCogs,
  FaBriefcase,
  FaBoxOpen,
  FaBlog,
  FaEnvelope,
  FaUsers,
  FaClipboardList,
  FaCalendarAlt,
} from "react-icons/fa";
import {
  FaRocket,
  FaLock,
  FaChartLine
} from "react-icons/fa";
const AdminPage = () => {

  const cards = [
    {
      title: "Services",
      desc: "Create, update and manage IT services offered to clients.",
      extra: "Web Dev || Mobile Apps || Cloud || AI",
      icon: <FaCogs size={34} />,
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "Products",
      desc: "Manage software products, demos and client solutions.",
      extra: "Tally || ERP || CRM Tools",
      icon: <FaBoxOpen size={34} />,
      color: "from-green-500 to-green-700",
    },
    {
      title: "Careers",
      desc: "Publish job openings and manage hiring process.",
      extra: "Full Stack || Frontend || Backend",
      icon: <FaBriefcase size={34} />,
      color: "from-purple-500 to-purple-700",
    },
    {
      title: "Applications",
      desc: "Review and manage job applications from candidates.",
      extra: "Resume Review || Shortlisting",
      icon: <FaClipboardList size={34} />,
      color: "from-pink-500 to-pink-700",
    },
    {
      title: "Blogs",
      desc: "Publish company updates, tech articles and insights.",
      extra: "SEO || Tech News || Tutorials",
      icon: <FaBlog size={34} />,
      color: "from-orange-500 to-orange-700",
    },
    {
      title: "Events",
      desc: "Manage webinars, workshops and company events.",
      extra: "Online || Offline || Training",
      icon: <FaCalendarAlt size={34} />,
      color: "from-red-500 to-red-700",
    },
    {
      title: "Messages",
      desc: "View customer inquiries and contact form submissions.",
      extra: "Support || Leads || Queries",
      icon: <FaEnvelope size={34} />,
      color: "from-indigo-500 to-indigo-700",
    },
    {
      title: "Users",
      desc: "Manage jobseekers, clients and registered users.",
      extra: "Active || Pending || Verified",
      icon: <FaUsers size={34} />,
      color: "from-teal-500 to-teal-700",
    },
  ];

  return (
    <AdminLayout>

      <div className="min-h-screen bg-white p-6">
<div className="bg-gradient-to-r from-gray-600 via-cyan-500 to-cyan-800 rounded-3xl p-10 text-white">

  <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
    <div>

      <h1 className="text-4xl font-bold">
        IT Admin Control Center
      </h1>

      <p className="mt-4 text-gray-200 max-w-xl">
        Welcome back! Manage your IT company operations efficiently.
        Monitor services, handle recruitment, publish blogs,
        track applications, and control your entire business ecosystem
        from one centralized dashboard.
      </p>

    <div className="mt-6 flex gap-3 flex-wrap">

  <span className="bg-white/20 px-4 py-2 rounded-full text-sm flex items-center gap-2">
    <FaRocket /> Fast Management
  </span>

  <span className="bg-white/20 px-4 py-2 rounded-full text-sm flex items-center gap-2">
    <FaLock /> Secure Admin Panel
  </span>

  <span className="bg-white/20 px-4 py-2 rounded-full text-sm flex items-center gap-2">
    <FaChartLine /> Real-time Control
  </span>

</div>

    </div>
    <div className="flex justify-center lg:justify-end">

      <img
        src="/images/admin.jpg"
        alt="Admin Dashboard"
        className="w-[280px] md:w-[350px] lg:w-[420px] object-contain drop-shadow-2xl"
      />

    </div>

  </div>

</div>
        <h2 className="text-2xl font-bold mt-10 mb-2 text-cyan-800">
          Management Modules
        </h2>

        <p className="text-black-500 mb-6">
          Click any module to manage your IT company operations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {cards.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-10 group-hover:opacity-20 transition`}
              ></div>
              <div className="relative p-6">

                <div className="text-gray-700 group-hover:text-black transition">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold mt-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm mt-1">
                  {item.desc}
                </p>
                <p className="text-xs text-gray-400 mt-3">
                  {item.extra}
                </p>

              </div>

            </div>
          ))}

        </div>

        <div className="mt-12 bg-gradient-to-r from-cyan-600 to-cyan-700 rounded-3xl p-10 text-white shadow-xl">

          <h2 className="text-3xl font-bold">
            Smart IT Management System
          </h2>

          <p className="mt-3 text-gray-200 max-w-2xl">
            Automate your IT workflows, manage clients, track hiring,
            and scale your business with a powerful digital admin system.
          </p>

        </div>

      </div>

    </AdminLayout>
  );
};

export default AdminPage;