import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBookOpen,
  faChartLine,
  faCog,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const { pathname } = useLocation();

  const links = [
    { path: "/", label: "Dashboard", icon: faHome },
    { path: "/routine", label: "Study Routine", icon: faBookOpen },
    { path: "/progress", label: "Progress", icon: faChartLine },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      <aside
        className={`fixed top-16 left-0 h-[calc(100%-4rem)] w-64 bg-white shadow-md p-4 transform transition-transform duration-300 ease-in-out z-40
          ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 md:top-0 md:h-screen md:sticky`}
      >
        {/* Close button for mobile */}
        <div className="flex justify-between items-center mb-6 md:hidden">
          <h1 className="text-2xl font-bold text-indigo-600">SmartEdu</h1>
          <button
            onClick={toggleSidebar}
            className="p-2 text-gray-600 hover:text-indigo-600"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <h1 className="hidden md:block text-2xl font-bold text-indigo-600 mb-6">
          SmartEdu
        </h1>

        <nav className="space-y-2">
          {links.map(({ path, label, icon }) => (
            <Link
              key={path}
              to={path}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-indigo-100 transition
                ${
                  pathname === path
                    ? "bg-indigo-200 text-indigo-800 font-medium"
                    : ""
                }`}
              onClick={toggleSidebar} // close sidebar on mobile after click
            >
              <FontAwesomeIcon icon={icon} />
              <span>{label}</span>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
