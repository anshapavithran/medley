import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import config from "../utils/config";

export default function Careers() {

  const [jobs, setJobs] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchJobs();
  }, []);
useEffect(() => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "instant",
  });
}, []);
 
const [loading, setLoading] = useState(true);

const fetchJobs = async () => {
  try {
    const res = await axios.get(
      `${config.baseurl}/careers/`
    );

    setJobs(res.data);
  } catch (err) {
    console.log(err);
  } finally {
    setLoading(false);
  }
};
const [showModal, setShowModal] = useState(false);
const [selectedJob, setSelectedJob] = useState(null);
const [formData, setFormData] = useState({
  full_name: "",
  email: "",
  phone: "",
  resume: null,
});
const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData({
    ...formData,
    [name]: value,
  });
};
const submitApplication = async (e) => {
  e.preventDefault();

  const data = new FormData();

  data.append("career", selectedJob.id);
  data.append("full_name", formData.full_name);
  data.append("email", formData.email);
  data.append("phone", formData.phone);
  data.append("resume", formData.resume);

  try {
    const res = await axios.post(
      `${config.baseurl}/career-apply/`,
      data
    );

    alert("Application Submitted Successfully");

    setShowModal(false);

    setFormData({
      full_name: "",
      email: "",
      phone: "",
      resume: null,
    });

  } catch (err) {
    console.log(err);
  }
};
return (
  <div className="relative min-h-screen overflow-hidden">

    <video
      autoPlay
      muted
      loop
      playsInline
      className="fixed top-0 left-0 w-full h-full object-cover -z-20"
    >
      <source src="/videos/bg.mp4" type="video/mp4" />
    </video>

    <div className="fixed inset-0 bg-black/40 -z-10"></div>

    <section className="max-w-7xl mx-auto px-6 pb-20 mt-8">

      <h2 className="text-5xl font-bold text-center text-cyan-500 mb-4">
        Open Positions
      </h2>

      <p className="text-center text-gray-300 mb-14">
        Explore exciting opportunities and grow your career with us.
      </p>

      {loading ? (

        <div className="flex justify-center py-20">
          <div className="h-12 w-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
        </div>

      ) : jobs.length === 0 ? (

        <div className="flex justify-center py-16">

          <div
            className="
            max-w-lg
            w-full
            bg-white/10
            backdrop-blur-md
            border border-white/20
            rounded-3xl
            p-10
            text-center
            "
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              No Jobs Available
            </h3>

            <p className="text-gray-300">
              There are currently no open positions.
              Please check back later for future opportunities.
            </p>
          </div>

        </div>

      ) : (

       <div
  className="
  flex
  flex-wrap
  justify-center
  gap-8
  "
>
          {jobs.map((job) => (

            <div
              key={job.id}
              className="
      w-full
      max-w-sm
      bg-white/10
      backdrop-blur-md
      border border-white/20
      rounded-3xl
      p-7
      hover:-translate-y-2
      hover:shadow-[0_20px_50px_rgba(0,255,255,0.15)]
      transition-all
      duration-300
      "
            >

              <h3 className="text-2xl font-bold text-white mb-4">
                {job.title}
              </h3>

             <div className="mb-6 h-40 overflow-y-auto pr-2 hide-scrollbar">
  <p className="text-gray-300">
    {job.description}
  </p>
</div>

              <div className="flex items-center gap-2 text-cyan-400 mb-3">
                <FaMapMarkerAlt />
                <span>{job.work_mode}</span>
              </div>

              <div className="mb-6">
                <span className="text-red-400 font-semibold">
                  Last Date:
                </span>

                <span className="text-white ml-2">
                  {job.last_date}
                </span>
              </div>

              <button
               onClick={() => {
  setSelectedJob(job);
  setShowModal(true);
}}
                className="
                w-full
                py-3
                rounded-xl
                bg-gradient-to-r
                from-cyan-500
                to-cyan-600
                text-white
                font-semibold
                hover:scale-105
                transition
                "
              >
                Apply Now
              </button>

            </div>

          ))}

        </div>

      )}

    </section>
{showModal && (
  <div className="fixed inset-0  backdrop-blur-sm flex items-center justify-center z-50 p-4">

    <div className="bg-black/50 rounded-3xl w-full max-w-xl p-8 relative">

      <button
        onClick={() => setShowModal(false)}
        className="absolute right-5 top-4 text-2xl text-white"
      >
        ×
      </button>

      <h2 className="text-3xl font-bold mb-4 text-cyan-500">
        Apply for  {selectedJob?.title}
      </h2>

     <form
  onSubmit={submitApplication}
  className="space-y-4"
>

  <div>
    <label className="block mb-2 text-sm font-semibold text-white">
      Full Name
    </label>
    <input
      type="text"
      name="full_name"
      placeholder="Enter Full Name"
      value={formData.full_name}
      onChange={handleChange}
      required
      className="w-full border rounded-lg p-3 bg-gray-50"
    />
  </div>

  <div>
    <label className="block mb-2 text-sm font-semibold text-white">
      Email Address
    </label>
    <input
      type="email"
      name="email"
      placeholder="Enter Email Address"
      value={formData.email}
      onChange={handleChange}
      required
      className="w-full border rounded-lg p-3 bg-gray-50"
    />
  </div>

  <div>
    <label className="block mb-2 text-sm font-semibold text-white">
      Phone Number
    </label>
    <input
      type="text"
      name="phone"
      placeholder="Enter Phone Number"
      value={formData.phone}
      onChange={handleChange}
      required
      className="w-full border rounded-lg p-3 bg-gray-50"
    />
  </div>

  <div>
    <label className="block mb-2 text-sm font-semibold text-white">
      Upload Resume
    </label>
    <input
      type="file"
      required
      className="w-full border rounded-lg p-3 bg-gray-50"
      onChange={(e) =>
        setFormData({
          ...formData,
          resume: e.target.files[0],
        })
      }
    />
  </div>

  <button
    type="submit"
    className="
      w-full
      py-3
      rounded-xl
      bg-gradient-to-r
      from-cyan-500
      to-cyan-600
      text-white
      font-semibold
    "
  >
    Submit Application
  </button>

</form>

    </div>

  </div>
)}
  <div className="bg-black/70 backdrop-blur-md py-12">

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