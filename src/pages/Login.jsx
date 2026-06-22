import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import config from "../utils/config";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${config.baseurl}/login_api/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await res.json();

      console.log("data is", data);

      if (data.status === "error") {
        alert(data.message);
        return;
      }

      if (data.role === "superadmin") {
        navigate("/admin-dashboard");
      }

    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };
useEffect(() => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "instant",
  });
}, []);
  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/home.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 min-h-screen flex items-center justify-center">

        <div className="bg-white/10 backdrop-blur-md border border-yellow-500/30 shadow-2xl rounded-2xl p-8 max-w-md w-full m-2">

          <h2 className="text-3xl font-bold text-center text-yellow-400 mb-6">
            Login
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            <div>
              <label className="block text-white font-semibold mb-1">
                User Name
              </label>

              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-white/10 text-white border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-1">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/10 text-white border border-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-lg transition"
            >
              Login
            </button>

          </form>

        </div>

      </div>
      <div className="relative z-10 bg-black/70 backdrop-blur-md py-12">

        <div className="max-w-7xl mx-auto px-5">

          <div className="grid md:grid-cols-3 gap-10 text-white">

            <div>
              <h3 className="text-xl font-bold text-yellow-400 mb-3">
                Kerala Branch
              </h3>

              <p className="leading-7">
                1st Floor - JK Building<br />
                Kannur, 670684<br />
                Phone: +91 90000 90000
              </p>

            
            </div>

            <div>
              <h3 className="text-xl font-bold text-yellow-400 mb-5">
                Quick Links
              </h3>

              <ul className="space-y-3">
                <li className="cursor-pointer" onClick={() => navigate("/home")}>Home</li>
                <li className="cursor-pointer" onClick={() => navigate("/about")}>About Us</li>
                <li className="cursor-pointer" onClick={() => navigate("/services")}>Services</li>
                <li className="cursor-pointer" onClick={() => navigate("/product")}>Products</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-yellow-400 mb-5">
                More Links
              </h3>

              <ul className="space-y-3">
                <li className="cursor-pointer" onClick={() => navigate("/careers")}>Career</li>
                <li className="cursor-pointer" onClick={() => navigate("/events")}>Events</li>
                <li className="cursor-pointer" onClick={() => navigate("/blogs")}>Blogs</li>
              </ul>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default LoginPage;