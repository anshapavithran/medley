import React, { useState } from "react";
import config from "../utils/config";
import AdminLayout from "./AdminLayout";

export default function AddBlog() {

  const [category, setCategory] =
    useState("");

  const [date, setDate] =
    useState("");

  const [title, setTitle] =
    useState("");

  const [description, setDescription] =
    useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    const formData = new FormData();

    formData.append(
      "category",
      category
    );

    formData.append(
      "date",
      date
    );

    formData.append(
      "title",
      title
    );

    formData.append(
      "description",
      description
    );

    const res = await fetch(
      `${config.baseurl}/add-blog/`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();

    if (data.status === "success") {

      alert("Blog Added Successfully");

      setCategory("");
      setDate("");
      setTitle("");
      setDescription("");

    } else {

      alert(data.message);

    }

  };

  return (

    <AdminLayout>

      <div className="max-w-3xl mx-auto p-5">

        <h2 className="text-3xl font-bold text-cyan-600 text-center mb-6">
          Add Blog
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-lg p-6 space-y-5"
        >

          <div>

            <label className="block text-sm font-semibold mb-2">
              Category
            </label>

            <input
              type="text"
              placeholder="Enter Category"
              value={category}
              onChange={(e) =>
                setCategory(e.target.value)
              }
              className="w-full border border-gray-300 p-3 rounded-lg"
              required
            />

          </div>

          <div>

            <label className="block text-sm font-semibold mb-2">
              Blog Date
            </label>

            <input
              type="date"
              value={date}
              onChange={(e) =>
                setDate(e.target.value)
              }
              className="w-full border border-gray-300 p-3 rounded-lg"
              required
            />

          </div>

          <div>

            <label className="block text-sm font-semibold mb-2">
              Blog Title
            </label>

            <input
              type="text"
              placeholder="Enter Blog Title"
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
              className="w-full border border-gray-300 p-3 rounded-lg"
              required
            />

          </div>

          <div>

            <label className="block text-sm font-semibold mb-2">
              Blog Description
            </label>

            <textarea
              rows={6}
              placeholder="Enter Blog Description"
              value={description}
              onChange={(e) =>
                setDescription(
                  e.target.value
                )
              }
              className="w-full border border-gray-300 p-3 rounded-lg"
              required
            />

          </div>
<div className="flex justify-end pt-4">

          <button
            type="submit"
            className="bg-cyan-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg"
          >
            Save Blog
          </button>
</div>
        </form>

      </div>

    </AdminLayout>

  );
}