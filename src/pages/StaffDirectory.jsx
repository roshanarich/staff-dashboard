//Satff Directory
import { useState, useEffect } from "react";
import staffData from "../data/staff.json";

export default function StaffDirectory() {
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setStaff(staffData);
    }, 500);
  }, []);

  return (
    <div className="min-h-screen bg-orange-50 text-black p-6">
      <h2 className="text-3xl font-semibold mb-6">Staff Directory</h2>

      {/* Staff Grid Card */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {staff.map((member) => (
          <div
            key={member.id}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            {/* User Details */}
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={member.photo || "https://i.pravatar.cc/100?img=1"}
                alt={member.name}
                className="w-24 h-24 rounded-lg object-cover border-2 border-orange-500"
              />
              <div>
                <h3 className="text-lg font-semibold text-black">{member.name}</h3>
                <p className="text-sm text-black/60">{member.role}</p>
              </div>
            </div>

            {/* User Contact and Status Information */}
            <div className="space-y-2 text-sm text-black/70">
              <p><strong>Email:</strong> {member.email}</p>
              <p>
                <strong>Status:</strong>{" "}
                <span
                  className={`inline-block px-2 py-1 rounded-full text-xs font-semibold 
                    ${member.status === "active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"}`}
                >
                  {member.status}
                </span>
              </p>
              <p><strong>Last Login:</strong> {new Date(member.lastLogin).toLocaleString()}</p>

              <div>
                <p className="mb-1"><strong>Drive Usage:</strong></p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-orange-500 h-2 rounded-full"
                    style={{ width: member.driveUsage }}
                  ></div>
                </div>
                <p className="text-xs text-black/50">Used: {member.driveUsage}</p>
              </div>

              <p><strong>Device:</strong> {member.device}</p>
            </div>

            {/* View Details Button - not connected */}
            <div className="mt-4">
              <button className="text-orange-600 hover:underline text-sm">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
