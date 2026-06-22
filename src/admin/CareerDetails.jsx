import React, { useEffect, useState } from "react";
import config from "../utils/config";
import AdminLayout from "./AdminLayout";

const CareerDetails = () => {

  const [careers, setCareers] = useState([]);
  const [search, setSearch] = useState("");

  const [showModal, setShowModal] =
    useState(false);

  const [editCareer, setEditCareer] =
    useState(null);

  const filteredCareers = careers.filter((career) => {
  const value = search.toLowerCase();
 const formattedDate = career.last_date
    ? (() => {
        const d = new Date(career.last_date);
        const day = String(d.getDate()).padStart(2, "0");
        const month = String(d.getMonth() + 1).padStart(2, "0");
        const year = d.getFullYear();
        return `${day}/${month}/${year}`;
      })()
    : "";
  return (
    career.title?.toLowerCase().includes(value) ||
    career.description?.toLowerCase().includes(value) ||
    career.work_mode?.toLowerCase().includes(value) ||
    formattedDate.includes(value)
  );
});

  useEffect(() => {

    fetch(
      `${config.baseurl}/career-list/`
    )
      .then((res) => res.json())
      .then((data) =>
        setCareers(data)
      )
      .catch((err) =>
        console.log(err)
      );

  }, []);

  const openEditModal = (
    career
  ) => {

    setEditCareer(career);

    setShowModal(true);

  };

  const handleUpdate =
    async () => {

      try {

        const res =
          await fetch(
            `${config.baseurl}/career-update/${editCareer.id}/`,
            {
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body: JSON.stringify(
                editCareer
              ),
            }
          );

        const data =
          await res.json();

        if (
          data.status ===
          "success"
        ) {

          alert(
            "Career Updated"
          );

          window.location.reload();

        }

      } catch (error) {

        console.log(error);

      }

    };

  const deleteCareer =
    async (id) => {

      const confirmDelete =
        window.confirm(
          "Delete this career?"
        );

      if (!confirmDelete)
        return;

      try {

        const res =
          await fetch(
            `${config.baseurl}/career-delete/${id}/`,
            {
              method:
                "DELETE",
            }
          );

        const data =
          await res.json();

        if (
          data.status ===
          "success"
        ) {

          alert(
            "Career Deleted"
          );

          setCareers(
            careers.filter(
              (career) =>
                career.id !==
                id
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
            Career Details
          </h1>

          <input
            type="text"
            placeholder="Search Career..."
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
  <table className="min-w-[700px] md:min-w-full border">

            <thead>

              <tr className="bg-gray-100">

                <th className="border px-4 py-2 w-29">
                  Title
                </th>

                <th className="border px-4 py-2 w-96">
                  Description
                </th>

                <th className="border px-4 py-2 w-21">
                  Work Mode
                </th>

                <th className="border px-4 py-2  w-30">
                  Last Date
                </th>

                <th className="border px-4 py-2 w-16">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {filteredCareers.map(
                (career) => (

                  <tr
                    key={
                      career.id
                    }
                    className="text-center"
                  >

                    <td className="border px-4 py-2">
                      {
                        career.title
                      }
                    </td>

                    <td className="border px-4 py-2">
                      {
                        career.description
                      }
                    </td>

                    <td className="border px-4 py-2">
                      {
                        career.work_mode
                      }
                    </td>

                    <td className="border px-4 py-2">
                     {career.last_date
  ? new Date(career.last_date).toLocaleDateString("en-GB")
  : ""}
                    </td>

                    <td className="border px-4 py-2 space-x-2">

                      <button
                        onClick={() =>
                          openEditModal(
                            career
                          )
                        }
                        className="bg-blue-600 text-white px-3 py-1 rounded m-2"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          deleteCareer(
                            career.id
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

      {showModal &&
        editCareer && (
  <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 p-4 ">
      <div className="bg-white p-6 rounded-lg w-full max-w-[500px] max-h-[95vh] overflow-y-auto">


              <h2 className="text-2xl font-bold text-blue-700 mb-5">
                Edit Career
              </h2>

              <div className="mb-4">

                <label className="block font-semibold mb-2">
                  Job Title
                </label>

                <input
                  type="text"
                  value={
                    editCareer.title
                  }
                  onChange={(e) =>
                    setEditCareer(
                      {
                        ...editCareer,
                        title:
                          e
                            .target
                            .value,
                      }
                    )
                  }
                  className="w-full border p-2 rounded"
                />

              </div>

              <div className="mb-4">

                <label className="block font-semibold mb-2">
                  Description
                </label>

                <textarea
                  rows="4"
                  value={
                    editCareer.description
                  }
                  onChange={(e) =>
                    setEditCareer(
                      {
                        ...editCareer,
                        description:
                          e
                            .target
                            .value,
                      }
                    )
                  }
                  className="w-full border p-2 rounded"
                />

              </div>

              <div className="mb-4">

                <label className="block font-semibold mb-2">
                  Work Mode
                </label>

                <select
                  value={
                    editCareer.work_mode
                  }
                  onChange={(e) =>
                    setEditCareer(
                      {
                        ...editCareer,
                        work_mode:
                          e
                            .target
                            .value,
                      }
                    )
                  }
                  className="w-full border p-2 rounded"
                >
                  <option value="Remote">
                    Remote
                  </option>

                  <option value="Hybrid">
                    Hybrid
                  </option>

                  <option value="Onsite">
                    Onsite
                  </option>

                </select>

              </div>

              <div className="mb-4">

                <label className="block font-semibold mb-2">
                  Last Date
                </label>

                <input
                  type="date"
                  value={
                    editCareer.last_date
                  }
                  onChange={(e) =>
                    setEditCareer(
                      {
                        ...editCareer,
                        last_date:
                          e
                            .target
                            .value,
                      }
                    )
                  }
                  className="w-full border p-2 rounded"
                />

              </div>

              <div className="flex justify-end gap-3">

                <button
                  onClick={() =>
                    setShowModal(
                      false
                    )
                  }
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>

                <button
                  onClick={
                    handleUpdate
                  }
                  className="bg-green-600 text-white px-4 py-2 rounded"
                >
                  Update Career
                </button>

              </div>

            </div>

          </div>

        )}

    </AdminLayout>

  );
};

export default CareerDetails;