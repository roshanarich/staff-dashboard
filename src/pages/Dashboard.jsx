//Dashboard Page 
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import tickets from '../data/tickets.json';
import todoItems from '../data/todos.json';

const user = {
  name: "Roshana Richards",
  email: "roshana@brrmedia.co.uk",
  photo: "data:image/jpeg;base64,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"

};

export default function Dashboard() {
  const [date, setDate] = useState(new Date());
  const quickSummary = {
    openTickets: tickets.filter(ticket => ticket.status === "Open").length,
    tasksPending: todoItems.filter(todo => !todo.completed).length,
    latestUpdates: [
      "Opened a new IT Request",
      "Updated To-Do List",
      "Viewed Tickets",
      "Completed Task 'Server Maintenance'",
    ]
  };

  return (
    <div className="min-h-screen bg-orange-50 text-gray-900">
      <div className="p-6 pt-10">
        
        {/* Welcome Banner */}
        <div className="bg-orange-600 p-6 rounded-lg shadow-md text-center mb-8">
          <h2 className="text-2xl font-semibold text-white">Welcome back, {user.name}!</h2>
          <p className="text-sm text-white mt-2">
            You have {quickSummary.openTickets} open tickets and {quickSummary.tasksPending} pending tasks.
          </p>
        </div>

        {/* User Profile Card */}
        <Link to="/UserProfile">
          <div className="flex items-center bg-white p-6 rounded-xl shadow-md mb-8 ">
            <img
              src={user.photo}
              alt={`${user.name}'s profile picture`}
              className="w-40 h-38 rounded-full mr-4 shadow"
            />
            <div>
              <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
              <p className="text-sm text-gray-600">{user.email}</p>
            </div>
          </div>
        </Link>

        {/* Summary Counters */}
        <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {[
            { label: "Open Tickets", count: quickSummary.openTickets },
            { label: "Pending Tasks", count: quickSummary.tasksPending },
            { label: "Latest Updates", count: quickSummary.latestUpdates.length },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-6 rounded-lg shadow text-center"
            >
              <div className="w-20 h-20 rounded-full bg-orange-200 flex items-center justify-center text-2xl font-bold text-orange-700 mb-4">
                {item.count}
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{item.label}</h3>
            </div>
          ))}
        </div>

        {/* Open Tickets, Pending todo */}
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4 text-orange-700">Open Tickets</h3>
            <ul className="space-y-4 text-gray-700">
              {tickets.filter(ticket => ticket.status === "Open").map(ticket => (
                <li key={ticket.id}>
                  <h4 className="font-semibold text-gray-800">{ticket.issue}</h4>
                  <p className="text-sm text-gray-600">{ticket.description}</p>
                  <p className="text-xs text-gray-500">Created: {new Date(ticket.created).toLocaleDateString()}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4 text-orange-700">Pending To-Do Tasks</h3>
            <ul className="space-y-4 text-gray-700">
              {todoItems.filter(todo => !todo.completed).map(todo => (
                <li key={todo.id} className="flex items-center space-x-2">
                  <span className="inline-block w-2 h-2 bg-red-500 rounded-full"></span>
                  <span>{todo.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Navgation Boxes */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto mb-8">
          {[
            { to: "/staff", title: "View Staff Directory", bg: "bg-orange-300", hover: "hover:bg-orange-400", text: "Access the full staff directory and find your colleagues." },
            { to: "/it-request", title: "Submit IT Request", bg: "bg-orange-400", hover: "hover:bg-orange-500", text: "Submit requests for IT support and services." },
            { to: "/tickets", title: "View Tickets", bg: "bg-orange-500", hover: "hover:bg-orange-600", text: "Manage and track the status of your support tickets." },
            { to: "/todo-list", title: "Manage To-Do List", bg: "bg-orange-600", hover: "hover:bg-orange-700", text: "Stay organized with your personal to-do list and tasks." },
          ].map(({ to, title, bg, hover, text }, idx) => (
            <Link
              key={idx}
              to={to}
              className={`${bg} p-6 min-h-40 rounded-lg shadow-lg ${hover} hover:text-white transition duration-300 ease-in-out transform hover:scale-105`}
            >
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-sm text-gray-700">{text}</p>
            </Link>
          ))}
        </div>

        {/* Calendar and Recent Activity */}
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-lg shadow">
            <h3 className="text-2xl font-semibold text-orange-700 mb-4">Task Calendar</h3>
            <div className="calendar-widget bg-orange-100 p-4 rounded-lg border border-orange-300 text-gray-900">
              <Calendar onChange={setDate} value={date} />
            </div>
          </div>

          <div className="bg-white h-48 p-4 rounded-lg shadow">
            <h3 className="text-2xl font-semibold text-orange-700 mb-4">Recent Activity</h3>
            <ul className="space-y-2 text-gray-700">
              {quickSummary.latestUpdates.map((update, idx) => (
                <li key={idx} className="flex items-center space-x-2">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>{update}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
