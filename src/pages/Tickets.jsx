//Tickets Page

import { useState, useEffect } from "react";
import ticketsData from "../data/tickets.json";

export default function Tickets() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setTickets(ticketsData);
    }, 500);
  }, []);
  
{/* Main content */}
  return (
    <div className="min-h-screen bg-orange-50 p-6 flex justify-center items-start">
        
      <div className="w-full max-w-5xl bg-white shadow-xl rounded-xl p-8 border border-gray-200  border-2 border-orange-500">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Submitted Tickets
        </h2>

        {tickets.length === 0 ? (
          <p className="text-center text-gray-500">No tickets found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto text-sm">
              <thead>
                <tr className="bg-gray-100 text-left text-gray-600 uppercase tracking-wider">
                  <th className="px-6 py-3">Issue</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3">Created Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {tickets.map((ticket) => (
                  <tr key={ticket.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-800">
                      {ticket.issue}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                          ticket.status === "Open"
                            ? "bg-green-100 text-green-800"
                            : ticket.status === "In Progress"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {ticket.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {new Date(ticket.created).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
