import React, {
  useEffect,
  useState
} from "react";

import AdminLayout from "./AdminLayout";

import config from "../utils/config";

const CareerApplication = () => {

  const [applications, setApplications] =
    useState([]);

  const [search, setSearch] =
    useState("");

  useEffect(() => {

    fetch(
      `${config.baseurl}/career-applications/`
    )
      .then((res) => res.json())
      .then((data) =>
        setApplications(data)
      )
      .catch((err) =>
        console.log(err)
      );

  }, []);

  const filteredApplications =
    applications.filter((item) => {

      const value =
        search.toLowerCase();
 const formattedDate = item.applied_at
    ? (() => {
        const d = new Date(item.applied_at);
        const day = String(d.getDate()).padStart(2, "0");
        const month = String(d.getMonth() + 1).padStart(2, "0");
        const year = d.getFullYear();
        return `${day}/${month}/${year}`;
      })()
    : "";
      return (
        item.full_name
          ?.toLowerCase()
          .includes(value) ||

        item.email
          ?.toLowerCase()
          .includes(value) ||

        item.phone
          ?.toLowerCase()
          .includes(value) ||

        item.career
          ?.toLowerCase()
          .includes(value)||
            formattedDate.includes(value)
      );
    });

  return (

    <AdminLayout>

      <div className="p-3">

        <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-5">

          <h1 className="text-3xl font-bold text-cyan-600">
            Career Applications
          </h1>

          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            className="border rounded-lg px-4 py-2 w-full md:w-80"
          />

        </div>

        <div className="overflow-x-auto bg-white ">

          <table className="min-w-full border">

            <thead>

              <tr className="bg-gray-100">

                <th className="border px-4 py-2">
                  Job Position
                </th>

                <th className="border px-4 py-2">
                  Name
                </th>

                <th className="border px-4 py-2">
                  Email
                </th>

                <th className="border px-4 py-2">
                  Phone
                </th>

                <th className="border px-4 py-2">
                  Resume
                </th>

                <th className="border px-4 py-2">
                  Applied Date
                </th>

              </tr>

            </thead>

            <tbody>

              {filteredApplications.length >
              0 ? (

                filteredApplications.map(
                  (item) => (

                    <tr
                      key={item.id}
                      className="text-center"
                    >

                      <td className="border px-4 py-2">
                        {item.career}
                      </td>

                      <td className="border px-4 py-2">
                        {item.full_name}
                      </td>

                      <td className="border px-4 py-2">
                        {item.email}
                      </td>

                      <td className="border px-4 py-2">
                        {item.phone}
                      </td>

                      <td className="border px-4 py-2">

                        <a
                          href={
                            item.resume
                          }
                          target="_blank"
                          rel="noreferrer"
                          className="
                          bg-cyan-600
                          text-white
                          px-3
                          py-1
                          rounded
                          "
                        >
                          Download
                        </a>

                      </td>

                      <td className="border px-4 py-2">
                       
                        {item.applied_at
  ? (() => {
      const d = new Date(item.applied_at);
      const day = String(d.getDate()).padStart(2, "0");
      const month = String(d.getMonth() + 1).padStart(2, "0");
      const year = d.getFullYear();
      return `${day}/${month}/${year}`;
    })()
  : ""}
                      </td>

                    </tr>
                  )
                )

              ) : (

                <tr>

                  <td
                    colSpan="6"
                    className="
                    text-center
                    py-5
                    text-gray-500
                    "
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
};

export default CareerApplication;