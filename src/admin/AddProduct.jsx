import React, { useState } from "react";
import config from "../utils/config";
import AdminLayout from "./AdminLayout";

export default function AddProduct() {

  const [title, setTitle] = useState("");

  const [description, setDescription] =
    useState("");

  const [image, setImage] =
    useState(null);

  const handleSubmit = async (e) => {

    e.preventDefault();

    const formData = new FormData();

    formData.append("title", title);

    formData.append(
      "description",
      description
    );

    formData.append(
      "image",
      image
    );

    const res = await fetch(
      `${config.baseurl}/add-product/`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();

    if (data.status === "success") {

      alert("Product Added Successfully");

      setTitle("");

      setDescription("");

      setImage(null);

      document.getElementById(
        "productImage"
      ).value = "";

    } else {

      alert(data.message);

    }

  };

  return (

    <AdminLayout>

      <div className="max-w-2xl mx-auto p-5">

        <h2 className="text-3xl font-bold text-cyan-600 text-center mb-6">
          Add Product
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-lg p-6 space-y-5"
        >

          <div>

            <label className="block text-sm font-semibold mb-2">
              Product Title
            </label>

            <input
              type="text"
              placeholder="Enter Product Title"
              value={title}
              onChange={(e) =>
                setTitle(
                  e.target.value
                )
              }
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

          </div>

          <div>

            <label className="block text-sm font-semibold mb-2">
              Product Description
            </label>

            <textarea
              rows={5}
              placeholder="Enter Product Description"
              value={description}
              onChange={(e) =>
                setDescription(
                  e.target.value
                )
              }
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

          </div>

          <div>

            <label className="block text-sm font-semibold mb-2">
              Product Image
            </label>

            <input
              id="productImage"
              type="file"
              accept="image/*"
              onChange={(e) =>
                setImage(
                  e.target.files[0]
                )
              }
              className="w-full border border-gray-300 p-2 rounded-lg"
              required
            />

          </div>
<div className="flex justify-end">
          <button
            type="submit"
            className="bg-cyan-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg"
          >
            Save Product
          </button>
</div>
        </form>

      </div>

    </AdminLayout>

  );

}