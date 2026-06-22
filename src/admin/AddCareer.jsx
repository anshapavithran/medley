import React, { useState } from "react";
import config from "../utils/config";
import AdminLayout from "./AdminLayout";

export default function AddCareer() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [workMode, setWorkMode] = useState("");
  const [lastDate, setLastDate] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    const data = {
      title,
      description,
      work_mode: workMode,
      last_date: lastDate,
    };

    const res = await fetch(
      `${config.baseurl}/create-career/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const result = await res.json();

    if (result.status === "success") {

      alert("Career Added Successfully");

      setTitle("");
      setDescription("");
      setWorkMode("");
      setLastDate("");

    } else {

      alert("Something went wrong");

    }

  };

  return (
    <AdminLayout>

      <div className="max-w-2xl mx-auto p-5">

        <h2 className="text-3xl font-bold text-cyan-600 text-center mb-6">
          Add Career
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white p-6 rounded-lg shadow"
        >

          <div>
            <label className="block font-medium mb-2">
              Job Title
            </label>

            <input
              type="text"
              placeholder="Enter Job Title"
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
              className="w-full border p-3 rounded"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-2">
              Job Description
            </label>

            <textarea
              rows={5}
              placeholder="Enter Job Description"
              value={description}
              onChange={(e) =>
                setDescription(e.target.value)
              }
              className="w-full border p-3 rounded"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-2">
              Work Mode
            </label>

            <select
              value={workMode}
              onChange={(e) =>
                setWorkMode(e.target.value)
              }
              className="w-full border p-3 rounded"
              required
            >
              <option value="">
                Select Work Mode
              </option>

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

          <div>
            <label className="block font-medium mb-2">
              Last Date To Apply
            </label>

            <input
              type="date"
              value={lastDate}
              onChange={(e) =>
                setLastDate(e.target.value)
              }
              className="w-full border p-3 rounded"
              required
            />
          </div>
<div className="flex justify-end">
          <button
            type="submit"
            className="bg-cyan-600 hover:bg-green-700 text-white px-6 py-3 rounded"
          >
            Save Career
          </button>
</div>
        </form>

      </div>

    </AdminLayout>
  );
}