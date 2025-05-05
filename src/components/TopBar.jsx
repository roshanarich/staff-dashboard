//Top bar page 
import React from "react";

const TopBar = ({ title, sidebarOpen }) => (
  <header
    className={`fixed top-0 z-20 w-full h-12 bg-orange-300 bg-opacity-50 backdrop-blur-md shadow-md flex items-center justify-center px-4 transition-all duration-300 left- 5px ml-[-24px]`} // Reduced padding (h-12, px-4)
  >
    <h1 className="text-xl font-semibold text-gray-100">{title}</h1>
  </header>
);

export default TopBar;
