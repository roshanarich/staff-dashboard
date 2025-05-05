//Sidebar Page
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  BarChart2,
  Users,
  ClipboardList,
  FileText,
  CheckSquare,
  Menu,
  ChevronLeft,
  Settings,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SIDEBAR_ITEMS = [
  { name: "Home", item: BarChart2, href: "/" },
  { name: "Staff Directory", item: Users, href: "/staff" },
  { name: "IT Request", item: ClipboardList, href: "/it-request" },
  { name: "Tickets", item: FileText, href: "/tickets" },
  { name: "To-Do List", item: CheckSquare, href: "/todo-list" },
  { name: "Settings", item: Settings, href: "/UserProfile" },
];

const Sidebar = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-white text-black m-0">
      {/* Sidebar */}
      <motion.div
        className={`fixed top-0 left-0 z-10 flex-shrink-0 h-full ${isSidebarOpen ? "w-64" : "w-20"} bg-orange-600 min-h-screen p-4 transition-all duration-50 ease-in-out`}
        animate={{ width: isSidebarOpen ? 256 : 80 }}
      >
        {/* Toggle Button */}
        <motion.button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-full hover:bg-orange-500 transition-colors max-w-fit mb-6 text-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isSidebarOpen ? <ChevronLeft size={24} /> : <Menu size={24} />}
        </motion.button>

        {/* Sidebar Items */}
        <nav className="mt-8 flex flex-col gap-4">
          {SIDEBAR_ITEMS.map(({ name, item: Icon, href }) => (
            <NavLink
              key={href}
              to={href}
              className="flex items-center p-4 text-sm font-bold rounded-lg hover:bg-orange-500 transition-colors no-underline text-black"
            >
              <Icon size={24} className="text-black ml-[-5px]" />
              <AnimatePresence>
                {isSidebarOpen && (
                  <motion.span
                    className="ml-4 whitespace-nowrap text-black"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ opacity: { duration: 0.8 }, width: { duration: 0.8 } }}
                  >
                    {name}
                  </motion.span>
                )}
              </AnimatePresence>
            </NavLink>
          ))}
        </nav>
      </motion.div>

      {/* Main content */}
      <div className={`flex-grow p-6 m-0 transition-all duration-400 ease-in-out ${isSidebarOpen ? "ml-64" : "ml-20"} bg-white text-black`}>
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
