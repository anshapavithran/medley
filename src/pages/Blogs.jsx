import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../utils/config";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export default function Blogs() {
useEffect(() => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "instant",
  });
}, []);
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [loading, setLoading] = useState(true);
 const navigate = useNavigate();
  useEffect(() => {
    fetchBlogs();
    window.scrollTo(0, 0);
  }, []);

  const fetchBlogs = async () => {
    try {

      const res = await axios.get(
        `${config.baseurl}/blogs-list/`
      );

      setBlogs(res.data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">

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

        <h1 className="text-5xl  text-center font-bold text-cyan-500 mb-4">
          Latest Blogs
        </h1>

        <p className="text-gray-300 text-xl mb-10 text-center">
          Explore our newest articles on technology,
          marketing and career growth.
        </p>

        {loading ? (

          <h1 className="text-center text-white text-3xl">
            Loading...
          </h1>

        ) : blogs.length === 0 ? (

          <div className="flex justify-center items-center h-[30vh]">
            <h1 className="text-3xl font-bold text-white">
              No Blogs Available
            </h1>
          </div>

        ) : (

          <div className="space-y-8">

            {blogs.map((blog) => (

              <div
                key={blog.id}
                className="
                bg-black/60
                backdrop-blur-sm
                rounded-xl
                p-8
                border border-blue-500/20
                "
              >

                <p className="text-gray-300 mb-4 text-lg">

                  {blog.category}

                  <span className="mx-2">||</span>

                  {blog.date}

                </p>

                <h2 className="text-white text-2xl font-bold mb-4">
                  {blog.title}
                </h2>

                <p className="text-gray-300 text-lg mb-6">

                  {blog.description.length > 150
                    ? blog.description.substring(0, 150) + "..."
                    : blog.description}

                </p>

                <button
                  onClick={() => setSelectedBlog(blog)}
                  className="
    flex
    items-center
    gap-2
    text-green-400
    text-lg
    font-semibold
    hover:text-green-500
    transition-colors
  "
                >
                  Read More <FaArrowRight />
                </button>

              </div>

            ))}

          </div>

        )}

      </div>

    {selectedBlog && (
  <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
    
    <div className="bg-gray-900 w-full max-w-4xl rounded-xl max-h-[90vh] overflow-y-auto">

      <div className="flex justify-between items-center p-4 md:p-5 border-b border-gray-700">
        <h2 className="text-lg md:text-2xl font-bold text-white">
          Blog Details
        </h2>

        <button
          onClick={() => setSelectedBlog(null)}
          className="text-white text-3xl leading-none"
        >
          ×
        </button>
      </div>

      <div className="p-4 md:p-8 space-y-5 md:space-y-6">

        <div>
          <label className="text-cyan-400 font-bold block mb-2">
            Category
          </label>
          <p className="text-white break-words">
            {selectedBlog.category}
          </p>
        </div>

        <div>
          <label className="text-cyan-400 font-bold block mb-2">
            Date
          </label>
          <p className="text-white">
            {selectedBlog.date}
          </p>
        </div>

        <div>
          <label className="text-cyan-400 font-bold block mb-2">
            Title
          </label>
          <p className="text-white break-words">
            {selectedBlog.title}
          </p>
        </div>

        <div>
          <label className="text-cyan-400 font-bold block mb-2">
            Description
          </label>
          <p className="text-gray-300 leading-7 md:leading-8 break-words">
            {selectedBlog.description}
          </p>
        </div>

      </div>

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

              <ul className="space-y-3 text-white" >

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