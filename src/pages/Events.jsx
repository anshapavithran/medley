import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../utils/config";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
export default function Events() {

  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(true);
 const navigate = useNavigate();
  useEffect(() => {
    fetchEvents();

    window.scrollTo(0, 0);
  }, []);
useEffect(() => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "instant",
  });
}, []);
  const fetchEvents = async () => {
    try {
      const res = await axios.get(
        `${config.baseurl}/events-list/`
      );

      setEvents(res.data);

    } catch (err) {

      console.log(err);

    } finally {

      setLoading(false);

    }
  };

  return (
    // <div className="relative min-h-screen overflow-hidden">
<div className="relative min-h-screen flex flex-col overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed inset-0 w-full h-full object-cover -z-20"
      >
        <source src="/videos/bg.mp4" type="video/mp4" />
      </video>

      <div className="fixed inset-0 bg-black/40 -z-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-10">

        <div className="mb-6">


          <h1 className="text-cyan-500 text-4xl font-bold mt-8 text-center py-4">
            CHECK OUR EVENTS
          </h1>
        </div>

        {loading ? (
          <h1 className="text-center text-white text-3xl">
            Loading...
          </h1>
        ) : events.length === 0 ? (
          <h1 className="text-center text-white text-3xl">
            No Events Available
          </h1>
        ) : (
          <div className="flex flex-wrap justify-center gap-8">

            {events.map((event) => (

              <div
                key={event.id}
                className="
                  bg-gradient-to-r
                  from-cyan-900
                  to-cyan-700
                  rounded-xl
                  p-10
                  shadow-xl
                  hover:scale-105
                  transition
                "
              >
                <h2 className="text-white text-2xl font-bold mb-8">
                  {event.title}
                </h2>

                <button
                  onClick={() => setSelectedEvent(event)}
                  className="flex items-center justify-center gap-2 text-yellow-300 text-xl hover:text-yellow-400 transition-colors"
                >
                Learn More <FaArrowRight />
                </button>

              </div>

            ))}

          </div>
        )}

      </div>

     {selectedEvent && (
  <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">

    <div
      className="
        bg-gray-900
        w-full
        max-w-4xl
        rounded-xl
        overflow-hidden
        max-h-[90vh]
        overflow-y-auto
      "
    >

      <div className="flex justify-between items-center p-4 border-b border-gray-700">

        <h2 className="text-lg md:text-2xl font-bold text-white">
          Event Details
        </h2>

        <button
          onClick={() => setSelectedEvent(null)}
          className="text-white text-3xl leading-none"
        >
          ×
        </button>

      </div>

      <img
        src={selectedEvent.images}
        alt={selectedEvent.title}
        className="
          w-full
          h-[200px]
          md:h-[350px]
          object-cover
        "
      />

      <div className="p-4 md:p-8">

        <h2 className="text-2xl md:text-4xl font-bold text-cyan-400 mb-5">
          {selectedEvent.title}
        </h2>

        <p className="text-gray-300 text-base md:text-lg leading-7 md:leading-8 break-words">
          {selectedEvent.description}
        </p>

      </div>

    </div>

  </div>
)}
    <div className="bg-black/70 backdrop-blur-md py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-5">

          <div className="grid md:grid-cols-3 gap-10">

            <div>

              <h3 className="text-xl font-bold text-cyan-400 mb-3">
                Kerala Branch
              </h3>

              <p className="leading-7 text-white">
                1st Floor - JK Building
                <br />
                Kannur, Kannur 670684
                <br />
                Phone: +91 90000 90000
              </p>

              <h3 className="text-xl font-bold text-cyan-400 mt-6 mb-3">
                Tamil Nadu Branch
              </h3>

              <p className="leading-7 text-white">
                First Floor, D Block,
                <br />
                JK Park, chennai,
                <br />
                Chennai, Tamil Nadu 600100
                <br />
                Phone: +91 70000 80000
                <br />
                Email: jk@gmail.com
              </p>

            </div>

            <div>

              <h3 className="text-xl font-bold text-cyan-400 mb-5">
                Quick Links
              </h3>

              <ul className="space-y-3 text-white">

                <li  className="cursor-pointer" onClick={() => navigate("/home")}>Home</li>
                <li  className="cursor-pointer" onClick={() => navigate("/about")}>About Us</li>
                <li className="cursor-pointer"  onClick={() => navigate("/services")}>Services</li>
                <li  className="cursor-pointer" onClick={() => navigate("/product")}>Products</li>
             

              </ul>

            </div>

            <div>

              <h3 className="text-xl font-bold text-cyan-400 mb-5">
                More Links
              </h3>

              <ul className="space-y-3 text-white">

                <li  className="cursor-pointer" onClick={() => navigate("/careers")}>Career</li>
                <li className="cursor-pointer"  onClick={() => navigate("/events")}>Events</li>
                <li  className="cursor-pointer" onClick={() => navigate("/blogs")}>Blogs</li>

              </ul>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}