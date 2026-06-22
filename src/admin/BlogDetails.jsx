import React, { useEffect, useState } from "react";
import config from "../utils/config";
import AdminLayout from "./AdminLayout";

const BlogDetails = () => {

  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");

  const [showModal, setShowModal] =
    useState(false);

  const [editBlog, setEditBlog] =
    useState(null);

  const filteredBlogs = blogs.filter(
    (blog) => {

      const value =
        search.toLowerCase();
 const formattedDate = blog.date
    ? (() => {
        const d = new Date(blog.date);
        const day = String(d.getDate()).padStart(2, "0");
        const month = String(d.getMonth() + 1).padStart(2, "0");
        const year = d.getFullYear();
        return `${day}/${month}/${year}`;
      })()
    : "";
      return (
        blog.title
          ?.toLowerCase()
          .includes(value) ||
        blog.category
          ?.toLowerCase()
          .includes(value) ||
        blog.description
          ?.toLowerCase()
          .includes(value)||
            formattedDate.includes(value)
      );
    }
  );

  useEffect(() => {

    fetch(
      `${config.baseurl}/blogs-list/`
    )
      .then((res) => res.json())
      .then((data) =>
        setBlogs(data)
      )
      .catch((err) =>
        console.log(err)
      );

  }, []);

  const openEditModal = (blog) => {

    setEditBlog(blog);

    setShowModal(true);

  };

  const handleUpdate = async () => {

    try {

      const formData =
        new FormData();

      formData.append(
        "category",
        editBlog.category
      );

      formData.append(
        "date",
        editBlog.date
      );

      formData.append(
        "title",
        editBlog.title
      );

      formData.append(
        "description",
        editBlog.description
      );

      const res = await fetch(
        `${config.baseurl}/blog/update/${editBlog.id}/`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data =
        await res.json();

      if (
        data.status === "success"
      ) {

        alert(
          "Blog Updated Successfully"
        );

        window.location.reload();

      }

    } catch (error) {

      console.log(error);

    }

  };

  const deleteBlog = async (id) => {

    const confirmDelete =
      window.confirm(
        "Delete this blog?"
      );

    if (!confirmDelete) return;

    try {

      const res = await fetch(
        `${config.baseurl}/blog/delete/${id}/`,
        {
          method: "DELETE",
        }
      );

      const data =
        await res.json();

      if (
        data.status === "success"
      ) {

        alert("Blog Deleted");

        setBlogs((prev) =>
          prev.filter(
            (blog) =>
              blog.id !== id
          )
        );

      }

    } catch (error) {

      console.log(error);

    }

  };

  return (
    <AdminLayout>

      <div className="p-3">

        <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-5">

          <h1 className="text-3xl font-bold text-cyan-600">
            Blog Details
          </h1>

          <input
            type="text"
            placeholder="Search Blog..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            className="border rounded-lg px-4 py-2 w-full md:w-80"
          />

        </div>

       <div className="overflow-x-auto">
  <table className="min-w-[800px] md:min-w-full border">

            <thead>

              <tr className="bg-gray-100">

              <th className="border px-4 py-2 w-32">Category</th>

<th className="border px-4 py-2 w-32">Date</th>

<th className="border px-4 py-2 w-48">Title</th>

<th className="border px-4 py-2 w-[400px]">Description</th>

<th className="border px-4 py-2 w-32">Actions</th>
              </tr>

            </thead>

            <tbody>

              {filteredBlogs.map(
                (blog) => (

                  <tr
                    key={blog.id}
                    className="text-center"
                  >

                    <td className="border px-4 py-2">
                      {blog.category}
                    </td>

                    <td className="border px-4 py-2">
                      {blog.date
  ? (() => {
      const d = new Date(blog.date);
      const day = String(d.getDate()).padStart(2, "0");
      const month = String(d.getMonth() + 1).padStart(2, "0");
      const year = d.getFullYear();
      return `${day}/${month}/${year}`;
    })()
  : ""}
                     
                    </td>

                    <td className="border px-4 py-2">
                      {blog.title}
                    </td>

                    <td className="border px-4 py-2">
                      {blog.description}
                    </td>

                    <td className="border px-4 py-2 space-x-2">

                      <button
                        onClick={() =>
                          openEditModal(
                            blog
                          )
                        }
                        className="bg-blue-600 text-white px-3 py-1 rounded m-2"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          deleteBlog(
                            blog.id
                          )
                        }
                        className="bg-red-600 text-white px-3 py-1 rounded"
                      >
                        Delete
                      </button>

                    </td>

                  </tr>
                )
              )}

            </tbody>

          </table>

        </div>

      </div>

      {showModal && editBlog && (

        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 p-4 ">
      <div className="bg-white p-6 rounded-lg w-full max-w-[500px] max-h-[95vh] overflow-y-auto">


            <h2 className="text-2xl font-bold text-blue-700 mb-5">
              Edit Blog
            </h2>

            <div className="mb-4">

              <label className="font-semibold block mb-2">
                Category
              </label>

              <input
                type="text"
                value={
                  editBlog.category
                }
                onChange={(e) =>
                  setEditBlog({
                    ...editBlog,
                    category:
                      e.target.value,
                  })
                }
                className="w-full border p-2 rounded"
              />

            </div>

            <div className="mb-4">

              <label className="font-semibold block mb-2">
                Date
              </label>

              <input
                type="date"
                value={
                  editBlog.date
                }
                onChange={(e) =>
                  setEditBlog({
                    ...editBlog,
                    date:
                      e.target.value,
                  })
                }
                className="w-full border p-2 rounded"
              />

            </div>

            <div className="mb-4">

              <label className="font-semibold block mb-2">
                Title
              </label>

              <input
                type="text"
                value={
                  editBlog.title
                }
                onChange={(e) =>
                  setEditBlog({
                    ...editBlog,
                    title:
                      e.target.value,
                  })
                }
                className="w-full border p-2 rounded"
              />

            </div>

            <div className="mb-4">

              <label className="font-semibold block mb-2">
                Description
              </label>

              <textarea
                rows="5"
                value={
                  editBlog.description
                }
                onChange={(e) =>
                  setEditBlog({
                    ...editBlog,
                    description:
                      e.target.value,
                  })
                }
                className="w-full border p-2 rounded"
              />

            </div>

            <div className="flex justify-end gap-3">

              <button
                onClick={() =>
                  setShowModal(false)
                }
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>

              <button
                onClick={handleUpdate}
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                Update Blog
              </button>

            </div>

          </div>

        </div>

      )}

    </AdminLayout>
  );
};

export default BlogDetails;