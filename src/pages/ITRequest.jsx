//ItRequest Page
import { useState } from "react";

export default function ITRequest() {
  const [issueType, setIssueType] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ issueType, description, file });
    alert("Request submitted!");
    setIssueType("");
    setDescription("");
    setFile(null);
  };
 {/* Main content */}
  return (
    <div className="min-h-screen bg-orange-50 flex items-center justify-center p-6 ">
       
      <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-xl border border-gray-200  border-2 border-orange-500">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Submit an IT Request
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="issueType" className="block text-sm font-medium text-gray-700">
              Issue Type
            </label>
            <select
              id="issueType"
              value={issueType}
              onChange={(e) => setIssueType(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select an issue</option>
              <option value="Wi-Fi Connectivity">Wi-Fi Connectivity</option>
              <option value="Device Issue">Device Issue</option>
              <option value="Software Installation">Software Installation</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Describe your issue..."
            />
          </div>

          <div>
            <label htmlFor="file" className="block text-sm font-medium text-gray-700">
              Attach a file (optional)
            </label>
            <input
              type="file"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300 shadow-md"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}
