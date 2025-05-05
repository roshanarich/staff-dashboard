//UserProfile

import React from "react";
import { useNavigate } from "react-router-dom"; 

// My User information 
const user = {
  id: 2,
  name: "Roshana Richards",
  role: "Software Engineer",
  email: "roshana@brrmedia.co.uk",
  status: "active",  
  lastLogin: "2024-03-15T09:00:00Z",  
  driveUsage: "5.1 GB", 
  device: "MacBook Air",  
  photo: "https://i.pravatar.cc/150?img=13", 
  phone: "123-456-7890",  
  department: "Software Engineering",  
};

const UserProfile = () => {
  const navigate = useNavigate(); 

{/* Main content */}
  return (
    <div className="min-h-screen bg-orange-50 p-6 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-xl p-8 max-w-3xl w-full">
        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <img
            src={user.photo}
            alt={user.name}
            className="w-32 h-32 rounded-full shadow-md border-4 border-orange-500"
          />
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-3xl font-bold text-gray-800 mb-1">{user.name}</h1>
            <p className="text-sm text-gray-600 mb-2">{user.email}</p>
            <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 text-xs font-semibold rounded-full">
              {user.role}
            </span>
          </div>
        </div>

        {/* Profile Information */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h3 className="text-gray-700 font-semibold">Phone Number</h3>
            <p className="text-gray-600">{user.phone}</p>
          </div>
          <div>
            <h3 className="text-gray-700 font-semibold">Department</h3>
            <p className="text-gray-600">{user.department}</p>
          </div>
          <div>
            <h3 className="text-gray-700 font-semibold">Account Status</h3>
            <p className="text-gray-600">{user.status === "active" ? "Active" : "Inactive"}</p>
          </div>
          <div>
            <h3 className="text-gray-700 font-semibold">Drive Usage</h3>
            <p className="text-gray-600">{user.driveUsage}</p>
          </div>
          <div>
            <h3 className="text-gray-700 font-semibold">Device</h3>
            <p className="text-gray-600">{user.device}</p>
          </div>
          <div>
            <h3 className="text-gray-700 font-semibold">Last Login</h3>
            <p className="text-gray-600">{new Date(user.lastLogin).toLocaleString()}</p>
          </div>
        </div>

        {/* Extra Buttons */}
        <div className="mt-6 flex justify-between">
          {/* Profile Button */}
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
            onClick={() => alert("Edit Profile")}
          >
            Edit Profile
          </button>

          {/* Back Button */}
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
            onClick={() => navigate("/")}
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
