import React, { useState,useEffect } from "react";

import { useNavigate } from "react-router-dom";
export default function Contact() {
  const navigate = useNavigate();
const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  altPhone: "",
  subject: "",
  message: "",
});
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

  const whatsappNumber = "918330063380";

  const message = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Alternate Phone: ${formData.altPhone}
Subject: ${formData.subject}

Message:
${formData.message}
  `;

  // ✅ WhatsApp
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank");

  // ✅ Email (opens default email client)
  const emailSubject = encodeURIComponent(formData.subject);
  const emailBody = encodeURIComponent(message);

  const email = "anshakpavithran@gmail.com"; // change this

  const mailtoUrl = `mailto:${email}?subject=${emailSubject}&body=${emailBody}`;
  window.open(mailtoUrl, "_blank");

  // reset form
  setFormData({
    name: "",
    email: "",
    phone: "",
    altPhone: "",
    subject: "",
    message: "",
  });
};
const handleWhatsApp = () => {
  const whatsappNumber = "919560558606";

  const message = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Alternate Phone: ${formData.altPhone}
Subject: ${formData.subject}

Message:
${formData.message}
  `;

  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};
const handleEmail = () => {
  const email = "anshakpavithran@gmail.com";

  const subject = encodeURIComponent(formData.subject);
  const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Alternate Phone: ${formData.altPhone}

Message:
${formData.message}
  `);

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;

  window.open(gmailUrl, "_blank");
};
  return (
  <div className="relative min-h-screen text-white">

     <div className="fixed top-0 left-0 w-full h-full -z-20">
  <img
    src="/images/bg3.jpg"
    alt="Background"
    className="w-full h-full object-cover"
  />
</div>
    <div className="fixed inset-0 bg-black/40 -z-10" />


    <div className="relative z-10 py-3">
<h1 className="text-center p-6 font-bold text-5xl  text-yellow-400">Contact Us</h1>
      <div className="max-w-5xl mx-auto px-5">

    <form onSubmit={handleSubmit}
  className="bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-white/20"
>
  <div className="grid md:grid-cols-2 gap-5">

    <div>
      <label className="block mb-2 text-yellow-400 font-semibold">
        Name
      </label>
      <input
        type="text"
        name="name"
        placeholder="Enter Your Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full border border-gray-400 bg-transparent p-4 rounded-lg"
        required
      />
    </div>

    <div>
      <label className="block mb-2 text-yellow-400 font-semibold">
        Email Address
      </label>
      <input
        type="email"
        name="email"
        placeholder="Enter Your Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full border border-gray-400 bg-transparent p-4 rounded-lg"
        required
      />
    </div>
<div>
  <label className="block mb-2 text-yellow-400 font-semibold">
    Phone Number
  </label>
  <input
    type="tel"
    name="phone"
    placeholder="Enter Phone Number"
    value={formData.phone}
    onChange={handleChange}
    className="w-full border border-gray-400 bg-transparent p-4 rounded-lg"
    required
  />
</div>

<div>
  <label className="block mb-2 text-yellow-400 font-semibold">
    Alternate Phone Number
  </label>
  <input
    type="tel"
    name="altPhone"
    placeholder="Enter Alternate Phone"
    value={formData.altPhone}
    onChange={handleChange}
    className="w-full border border-gray-400 bg-transparent p-4 rounded-lg"
  />
</div>
  </div>

  <div className="mt-5">
    <label className="block mb-2 text-yellow-400 font-semibold">
      Subject
    </label>
    <input
      type="text"
      name="subject"
      placeholder="Enter Subject"
      value={formData.subject}
      onChange={handleChange}
      className="w-full border border-gray-400 bg-transparent p-4 rounded-lg"
      required
    />
  </div>

  <div className="mt-5">
    <label className="block mb-2 text-yellow-400 font-semibold">
      Message
    </label>
    <textarea
      rows="6"
      name="message"
      placeholder="Enter Your Message"
      value={formData.message}
      onChange={handleChange}
      className="w-full border border-gray-400 bg-transparent p-4 rounded-lg"
      required
    />
  </div>

  <div className="text-center mt-5">
   <div className="flex flex-col md:flex-row gap-4 justify-center mt-5">

  <button
    type="button"
    onClick={handleWhatsApp}
    className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-lg font-semibold"
  >
    Send via WhatsApp
  </button>

  <button
    type="button"
    onClick={handleEmail}
    className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg font-semibold"
  >
    Send via Gmail
  </button>

</div>
  </div>

</form>

      </div>

      <div className="max-w-7xl mx-auto px-5 py-16">

        <div className="grid md:grid-cols-2 gap-8">

          <iframe
            title="Kannur"
            src="https://maps.google.com/maps?q=Kannur&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[350px] rounded-xl"
          />

          <iframe
            title="Chennai"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248756.13131228788!2d80.04385969043571!3d13.04747331623444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1781085221630!5m2!1sen!2sin"
            className="w-full h-[350px] rounded-xl"
          />

        </div>

      </div>

   
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

  </div>
);
}