import React, { useEffect, useState } from "react";
import AdminLayout from "./AdminLayout";
import config from "../utils/config";

export default function ViewJobseekers() {

  const [jobSeekers, setJobSeekers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadJobSeekers();
  }, []);

  const loadJobSeekers = async () => {
    try {

      const res = await fetch(
        `${config.baseurl}/view-job-seekers/`
      );

      const data = await res.json();

      setJobSeekers(data);

    } catch (err) {
      console.log(err);
    }
  };

  const filteredJobSeekers = jobSeekers.filter((item) => {
  const value = search.toLowerCase();

  const formattedDate = item.created_at
    ? (() => {
        const d = new Date(item.created_at);
        const day = String(d.getDate()).padStart(2, "0");
        const month = String(d.getMonth() + 1).padStart(2, "0");
        const year = d.getFullYear();
        return `${day}/${month}/${year}`;
      })()
    : "";

  return (
    item.first_name?.toLowerCase().includes(value) ||
    item.last_name?.toLowerCase().includes(value) ||
    item.phone_number?.toLowerCase().includes(value) ||
    item.email?.toLowerCase().includes(value) ||
    item.place?.toLowerCase().includes(value) ||
    item.applicant_type?.toLowerCase().includes(value) ||
    formattedDate.includes(value)
  );
});

  return (
    <AdminLayout>

      <div className="p-4">

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-5">

          <h2 className="text-3xl font-bold text-cyan-600">
            Job Seeker Applications
          </h2>

          <input
            type="text"
            placeholder="Search Applicant..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

        </div>

        <div className="overflow-x-auto">

          <table className="min-w-full border">

            <thead className="bg-gray-100">

              <tr>

                <th className="border p-3">
                  Name
                </th>

                <th className="border p-3">
                  Phone
                </th>

                <th className="border p-3">
                  Email
                </th>

                <th className="border p-3">
                  Place
                </th>

                <th className="border p-3">
                  Type
                </th>

                <th className="border p-3">
                  Applied Date
                </th>

              </tr>

            </thead>

            <tbody>

              {filteredJobSeekers.length > 0 ? (

                filteredJobSeekers.map((item) => (

                  <tr key={item.id}>

                    <td className="border p-3">
                      {item.first_name} {item.last_name}
                    </td>

                    <td className="border p-3">
                      {item.phone_number}
                    </td>

                    <td className="border p-3">
                      {item.email}
                    </td>

                    <td className="border p-3">
                      {item.place}
                    </td>

                    <td className="border p-3">
                      {item.applicant_type}
                    </td>

                    <td className="border p-3">
                   {item.created_at
  ? (() => {
      const d = new Date(item.created_at);
      const day = String(d.getDate()).padStart(2, "0");
      const month = String(d.getMonth() + 1).padStart(2, "0");
      const year = d.getFullYear();
      return `${day}/${month}/${year}`;
    })()
  : ""}
                    </td>

                  </tr>

                ))

              ) : (

                <tr>

                  <td
                    colSpan="6"
                    className="border p-4 text-center text-gray-500"
                  >
                    No Applications Found
                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>

    </AdminLayout>
  );
}