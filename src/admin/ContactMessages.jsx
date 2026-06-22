import React, { useEffect, useState } from "react";
import AdminLayout from "./AdminLayout";
import config from "../utils/config";

const ContactMessages = () => {

  const [messages, setMessages] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`${config.baseurl}/contact-messages/`)
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((err) => console.log(err));
  }, []);
const [fromDate, setFromDate] = useState("");
const [toDate, setToDate] = useState("");
  const filtered = messages.filter((item) => {
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
      item.name?.toLowerCase().includes(value) ||
      item.email?.toLowerCase().includes(value) ||
      item.subject?.toLowerCase().includes(value) ||
      item.message?.toLowerCase().includes(value)||
      formattedDate.includes(value)
    );
  });

  return (
    <AdminLayout>

      <div className="p-3">

        <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-5">

          <h1 className="text-3xl font-bold text-cyan-600">
            Contact Messages
          </h1>

          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded-lg px-4 py-2 w-full md:w-80"
          />

        </div>

        <div className="overflow-x-auto bg-white">

          <table className="min-w-full border">

            <thead>

              <tr className="bg-gray-100">

                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">Subject</th>
                <th className="border px-4 py-2">Message</th>
                <th className="border px-4 py-2">Date</th>

              </tr>

            </thead>

            <tbody>

              {filtered.length > 0 ? (

                filtered.map((msg) => (

                  <tr key={msg.id} className="text-center">

                    <td className="border px-4 py-2">
                      {msg.name}
                    </td>

                    <td className="border px-4 py-2">
                      {msg.email}
                    </td>

                    <td className="border px-4 py-2">
                      {msg.subject}
                    </td>

                    <td className="border px-4 py-2 max-w-xs truncate">
                      {msg.message}
                    </td>

                    <td className="border px-4 py-2">
                 {msg.created_at
  ? (() => {
      const d = new Date(msg.created_at);
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

                  <td colSpan="5" className="text-center py-5 text-gray-500">
                    No Messages Found
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

export default ContactMessages;