import React, { useEffect, useState } from "react";
import config from "../utils/config";
import AdminLayout from "./AdminLayout";

const ProductDetails = () => {

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  const [showModal, setShowModal] = useState(false);

  const [editProduct, setEditProduct] =
    useState(null);

  const [newImage, setNewImage] =
    useState(null);

  const filteredProducts =
    products.filter((p) => {

      const value = search.toLowerCase();

      return (
        p.title?.toLowerCase().includes(value) ||
        p.description?.toLowerCase().includes(value)
      );
    });

  useEffect(() => {

    fetch(
      `${config.baseurl}/products-list/`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));

  }, []);

  const openEditModal = (product) => {

    setEditProduct(product);

    setNewImage(null);

    setShowModal(true);

  };

  const handleUpdate = async () => {

    try {

      const formData = new FormData();

      formData.append(
        "title",
        editProduct.title
      );

      formData.append(
        "description",
        editProduct.description
      );

      if (newImage) {

        formData.append(
          "image",
          newImage
        );

      }

      const res = await fetch(
        `${config.baseurl}/product/update/${editProduct.id}/`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      if (data.status === "success") {

        alert("Product Updated");

        window.location.reload();

      }

    } catch (error) {

      console.log(error);

    }

  };

  const deleteProduct = async (id) => {

    const confirmDelete =
      window.confirm(
        "Delete this product?"
      );

    if (!confirmDelete) return;

    try {

      const res = await fetch(
        `${config.baseurl}/product/delete/${id}/`,
        {
          method: "DELETE",
        }
      );

      const data = await res.json();

      if (data.status === "success") {

        alert("Product Deleted");

        setProducts((prev) =>
          prev.filter(
            (product) =>
              product.id !== id
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
            Product Details
          </h1>

          <input
            type="text"
            placeholder="Search Product..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="border rounded-lg px-4 py-2 w-full md:w-80"
          />

        </div>

      <div className="overflow-x-auto">
  <table className="min-w-[700px] md:min-w-full border">
            <thead>

              <tr className="bg-gray-100">

                <th className="border px-4 py-2 w-24">
                  Image
                </th>

                <th className="border px-4 py-2 w-40">
                  Title
                </th>

                <th className="border px-4 py-2 w-96">
                  Description
                </th>

                <th className="border px-4 py-2 w-32">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {filteredProducts.map(
                (product) => (
                  <tr
                    key={product.id}
                    className="text-center"
                  >

                    <td className="border px-4 py-2">

                      <img
                        src={`${config.baseurl}${product.image}`}
                        alt=""
                        className="w-20 h-20 object-cover mx-auto rounded"
                      />

                    </td>

                    <td className="border px-4 py-2 w-30">
                      {product.title}
                    </td>

                    <td className="border px-4 py-2">
                      {product.description}
                    </td>

                    <td className="border px-4 py-2 space-x-2 ">

                      <button
                        onClick={() =>
                          openEditModal(product)
                        }
                        className="bg-blue-600 text-white px-3 py-1 rounded m-2"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          deleteProduct(product.id)
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

      {showModal && editProduct && (

      <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 p-4 ">
      <div className="bg-white p-6 rounded-lg w-full max-w-[500px] max-h-[95vh] overflow-y-auto">


            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              Edit Product
            </h2>

            <div className="mb-4">

              <label className="block font-semibold mb-2">
                Product Title
              </label>

              <input
                type="text"
                value={editProduct.title}
                onChange={(e) =>
                  setEditProduct({
                    ...editProduct,
                    title: e.target.value,
                  })
                }
                className="w-full border p-2 rounded"
              />

            </div>

            <div className="mb-4">

              <label className="block font-semibold mb-2">
                Product Description
              </label>

              <textarea
                rows="4"
                value={editProduct.description}
                onChange={(e) =>
                  setEditProduct({
                    ...editProduct,
                    description: e.target.value,
                  })
                }
                className="w-full border p-2 rounded"
              />

            </div>

            {!newImage && (

              <div className="mb-4">

                <label className="block font-semibold mb-2">
                  Current Image
                </label>

                <img
                  src={`${config.baseurl}${editProduct.image}`}
                  alt=""
                  className="w-40 h-40 object-cover rounded border"
                />

              </div>

            )}

            <div className="mb-4">

              <label className="block font-semibold mb-2">
                Change Image
              </label>

              <input
                type="file"
                onChange={(e) =>
                  setNewImage(
                    e.target.files[0]
                  )
                }
              />

            </div>

            {newImage && (

              <div className="mb-4">

                <label className="block font-semibold mb-2 text-green-600">
                  New Image Preview
                </label>

                <img
                  src={URL.createObjectURL(newImage)}
                  alt=""
                  className="w-40 h-40 object-cover rounded border"
                />

              </div>

            )}

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
                Update Product
              </button>

            </div>

          </div>

        </div>

      )}

    </AdminLayout>

  );
};

export default ProductDetails;