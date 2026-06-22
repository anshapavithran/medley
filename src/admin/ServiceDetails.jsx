import React, { useEffect, useState } from "react";
import config from "../utils/config";
import AdminLayout from "./AdminLayout";

const ServiceDetails = () => {
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState("");

  const [showModal, setShowModal] = useState(false);

  const [editService, setEditService] =
    useState(null);

  const [newImage, setNewImage] =
    useState(null);

  const filteredServices =
    services.filter((s) => {
      const value = search.toLowerCase();

      return (
        s.title?.toLowerCase().includes(value) ||
        s.description?.toLowerCase().includes(value)
      );
    });

  useEffect(() => {
    fetch(
      `${config.baseurl}/services-list/`
    )
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);

  const openEditModal = (service) => {
    setEditService(service);
    setShowModal(true);
  };

  const handleUpdate = async () => {
    try {
      const formData = new FormData();

      formData.append(
        "title",
        editService.title
      );

      formData.append(
        "description",
        editService.description
      );

      if (newImage) {
        formData.append(
          "image",
          newImage
        );
      }

      const res = await fetch(
        `${config.baseurl}/service/update/${editService.id}/`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      if (data.status === "success") {
        alert("Service Updated");

        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteService = async (id) => {
    const confirmDelete =
      window.confirm(
        "Delete this service?"
      );

    if (!confirmDelete) return;

    try {
      const res = await fetch(
        `${config.baseurl}/service/delete/${id}/`,
        {
          method: "DELETE",
        }
      );

      const data = await res.json();

      if (data.status === "success") {
        alert("Service Deleted");

        setServices((prev) =>
          prev.filter(
            (service) =>
              service.id !== id
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

          <h1 className="text-3xl font-bold  text-cyan-600">
            Service Details
          </h1>

          <input
            type="text"
            placeholder="Search Service..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="border rounded-lg px-4 py-2 w-full md:w-80"
          />

        </div>

        <div className="overflow-x-auto bg-white ">

          <table className="min-w-full border">

            <thead>

              <tr className="bg-gray-100">

                <th className="border px-4 py-2">
                  Image
                </th>

                <th className="border px-4 py-2">
                  Title
                </th>

                <th className="border px-4 py-2">
                  Description
                </th>

                <th className="border px-4 py-2">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {filteredServices.map(
                (service) => (
                  <tr
                    key={service.id}
                    className="text-center"
                  >

                    <td className="border px-4 py-2">

                      <img
                        src={`${config.baseurl}${service.image}`}
                        alt=""
                        className="w-20 h-20 object-cover mx-auto rounded"
                      />

                    </td>

                    <td className="border px-4 py-2">
                      {service.title}
                    </td>

                    <td className="border px-4 py-2">
                      {service.description}
                    </td>

                    <td className="border px-4 py-2 space-x-2">

                      <button
                        onClick={() =>
                          openEditModal(
                            service
                          )
                        }
                        className="bg-blue-600 text-white px-3 py-1 rounded m-2"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          deleteService(
                            service.id
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

      {showModal && editService && (
      <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 p-4 ">
      <div className="bg-white p-6 rounded-lg w-full max-w-[500px] max-h-[95vh] overflow-y-auto">

  <div className="flex justify-between items-center mb-5">

    <h2 className="text-2xl font-bold text-blue-700">
      Edit Service
    </h2>

  </div>

  <div className="mb-4">

    <label className="block text-sm font-semibold text-gray-700 mb-2">
      Service Title
    </label>

    <input
      type="text"
      value={editService.title}
      onChange={(e) =>
        setEditService({
          ...editService,
          title: e.target.value,
        })
      }
      className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Enter service title"
    />

  </div>


  <div className="mb-4">

    <label className="block text-sm font-semibold text-gray-700 mb-2">
      Service Description
    </label>

    <textarea
      rows="4"
      value={editService.description}
      onChange={(e) =>
        setEditService({
          ...editService,
          description: e.target.value,
        })
      }
      className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Enter service description"
    />

  </div>

  {!newImage && (
    <div className="mb-4">

      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Current Image
      </label>

      {editService.image ? (
        <img
          src={`${config.baseurl}${editService.image}`}
          alt={editService.title}
          className="w-40 h-40 object-cover rounded border"
        />
      ) : (
        <p className="text-gray-500">
          No Image Available
        </p>
      )}

    </div>
  )}


  <div className="mb-4">

    <label className="block text-sm font-semibold text-gray-700 mb-2">
      Change Image
    </label>

    <input
      type="file"
      accept="image/*"
      onChange={(e) =>
        setNewImage(e.target.files[0])
      }
      className="w-full border border-gray-300 p-2 rounded"
    />

  </div>


  {newImage && (
    <div className="mb-4">

      <label className="block text-sm font-semibold text-green-700 mb-2">
        New Image Preview
      </label>

      <img
        src={URL.createObjectURL(newImage)}
        alt="Preview"
        className="w-40 h-40 object-cover rounded border"
      />

    </div>
  )}


  <div className="flex justify-end gap-3 mt-5">

    <button
      onClick={() => {
        setShowModal(false);
        setNewImage(null);
      }}
      className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
    >
      Cancel
    </button>

    <button
      onClick={handleUpdate}
      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
    >
      Update Service
    </button>

  </div>

</div>
  </div>    )}
    </AdminLayout>
  );
};

export default ServiceDetails;